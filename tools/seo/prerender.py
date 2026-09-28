# -*- coding: utf-8 -*-
"""Prerender every route of the Junqueira build into static HTML with per-page SEO head tags."""
import json, os, re, shutil, subprocess, sys, time, html
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from seo import PAGES, AREA_SLUGS, SITE, BRAND, OG_IMAGE

BUILD = "/home/claude/site-original"
TEMPLATE = os.path.join(HERE, "template.html")          # pristine index.html
SRC = os.path.join(HERE, "render_src")                  # copy served for rendering
PORT = 8766

areas = json.load(open(os.path.join(HERE, "areas.json")))
data = json.load(open(os.path.join(HERE, "units.json")))
units = data["units"]

UF = {"Piauí": "PI", "Maranhão": "MA"}


def digits_phone(p):
    d = re.sub(r"\D", "", p or "")
    return "+55-" + d[:2] + "-" + d[2:] if d else None


def org():
    head = units[0]
    depts = []
    for u in units:
        d = {
            "@type": "LegalService",
            "name": f"{BRAND} – {u['city']}",
            "address": {"@type": "PostalAddress", "streetAddress": u["address"],
                        "addressLocality": u["city"], "addressRegion": UF[u["state"]],
                        "addressCountry": "BR"},
            "url": SITE + "/unidades",
        }
        tel = digits_phone(u.get("whatsapp") or u.get("phone"))
        if tel:
            d["telephone"] = tel
        depts.append(d)
    return {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "@id": SITE + "/#organizacao",
        "name": BRAND,
        "url": SITE + "/",
        "logo": SITE + "/brand/logo-mark.png",
        "image": OG_IMAGE,
        "email": "contato@junqueiraadvogados.com.br",
        "telephone": "+55-86-4009-6145",
        "priceRange": "$$",
        "address": depts[0]["address"],
        "openingHoursSpecification": [{"@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00", "closes": "18:00"}],
        "areaServed": {"@type": "Country", "name": "Brasil"},
        "knowsAbout": ["Direito Previdenciário", "Aposentadoria INSS", "BPC/LOAS", "Pensão por morte",
                        "Auxílio-acidente", "Salário-maternidade", "Direito do Consumidor",
                        "Empréstimo consignado não reconhecido", "Direito aéreo"],
        "founder": [{"@type": "Person", "name": t["name"], "jobTitle": t["role"]} for t in data["team"]],
        "department": depts,
    }


def breadcrumb(path):
    items = [{"@type": "ListItem", "position": 1, "name": "Início", "item": SITE + "/"}]
    if path in ["/" + s for s in AREA_SLUGS]:
        items.append({"@type": "ListItem", "position": 2, "name": "Áreas de Atuação",
                      "item": SITE + "/areas-de-atuacao"})
    items.append({"@type": "ListItem", "position": len(items) + 1, "name": PAGES[path][2],
                  "item": SITE + path})
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items}


def schemas(path):
    out = [org()]
    if path == "/":
        out.append({"@context": "https://schema.org", "@type": "WebSite", "name": BRAND,
                    "url": SITE + "/", "inLanguage": "pt-BR",
                    "publisher": {"@id": SITE + "/#organizacao"}})
    else:
        out.append(breadcrumb(path))
    slug = path.strip("/")
    if slug in areas:
        a = areas[slug]
        out.append({"@context": "https://schema.org", "@type": "Service",
                    "name": PAGES[path][2], "serviceType": a["topic"],
                    "description": PAGES[path][1], "url": SITE + path,
                    "provider": {"@id": SITE + "/#organizacao"},
                    "areaServed": {"@type": "Country", "name": "Brasil"}})
        if a.get("faq"):
            out.append({"@context": "https://schema.org", "@type": "FAQPage",
                        "mainEntity": [{"@type": "Question", "name": f["q"],
                                        "acceptedAnswer": {"@type": "Answer", "text": f["a"]}}
                                       for f in a["faq"]]})
    return out


def head_tags(path):
    title, desc, _ = PAGES[path]
    url = SITE + (path if path != "/" else "/")
    e = html.escape
    tags = [
        f'<link rel="canonical" href="{url}"/>',
        '<meta name="robots" content="index,follow,max-image-preview:large"/>',
        '<meta property="og:locale" content="pt_BR"/>',
        f'<meta property="og:site_name" content="{BRAND}"/>',
        f'<meta property="og:url" content="{url}"/>',
        f'<meta property="og:title" content="{e(title)}"/>',
        f'<meta property="og:description" content="{e(desc)}"/>',
        f'<meta property="og:image" content="{OG_IMAGE}"/>',
        '<meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/>',
        f'<meta name="twitter:title" content="{e(title)}"/>',
        f'<meta name="twitter:description" content="{e(desc)}"/>',
        f'<meta name="twitter:image" content="{OG_IMAGE}"/>',
    ]
    for s in schemas(path):
        tags.append('<script type="application/ld+json">' +
                    json.dumps(s, ensure_ascii=False).replace("</", "<\\/") + "</script>")
    return "".join(tags)


def build_html(tpl, path, body):
    title, desc, _ = PAGES.get(path, ("Página não encontrada | " + BRAND, "", ""))
    h = tpl
    h = re.sub(r"<title>.*?</title>", "<title>" + html.escape(title) + "</title>", h, count=1)
    if path in PAGES:
        h = re.sub(r'<meta name="description" content="[^"]*"/>',
                   lambda m: '<meta name="description" content="' + html.escape(desc) + '"/>', h, count=1)
        # drop template og/twitter generic tags (replaced below)
        h = re.sub(r'<meta property="og:(type|title|description|image)" content="[^"]*"/>',
                   lambda m: m.group(0) if 'og:type' in m.group(0) else "", h)
        h = re.sub(r'<meta name="twitter:card" content="[^"]*"/>',
                   '<meta name="twitter:card" content="summary_large_image"/>', h)
        h = h.replace("</head>", head_tags(path) + "</head>", 1)
    else:  # 404
        h = h.replace("</head>", '<meta name="robots" content="noindex"/></head>', 1)
    h = h.replace('<div id="root"></div>', '<div id="root">' + body + "</div>", 1)
    return h


def render(routes):
    out = {}
    with sync_playwright() as p:
        b = p.chromium.launch()
        for r in routes:
            pg = b.new_page(viewport={"width": 1440, "height": 900})
            pg.route("**/*", lambda rt: rt.abort() if re.search(
                r"google|gstatic|facebook|unsplash", rt.request.url) and "fonts" not in rt.request.url
                else rt.continue_())
            pg.goto(f"http://localhost:{PORT}/", wait_until="load")
            pg.wait_for_timeout(800)
            if r != "/":
                pg.evaluate(f"history.pushState({{}},'','{r}');dispatchEvent(new PopStateEvent('popstate'))")
            pg.wait_for_timeout(1500)
            hgt = pg.evaluate("document.body.scrollHeight")
            y = 0
            while y < hgt:
                y += 600
                pg.evaluate(f"window.scrollTo(0,{y})")
                pg.wait_for_timeout(250)
                hgt = pg.evaluate("document.body.scrollHeight")
            pg.evaluate("window.scrollTo(0,0)")
            pg.wait_for_timeout(1200)
            body = pg.evaluate("document.getElementById('root').innerHTML")
            out[r] = body
            pg.close()
        b.close()
    return out


def main():
    tpl = open(TEMPLATE, encoding="utf-8").read()
    # fresh render copy with the pristine template as index.html
    if os.path.exists(SRC):
        shutil.rmtree(SRC)
    shutil.copytree(BUILD, SRC, ignore=shutil.ignore_patterns("*.html"))
    open(os.path.join(SRC, "index.html"), "w", encoding="utf-8").write(tpl)
    srv = subprocess.Popen([sys.executable, "-m", "http.server", str(PORT)], cwd=SRC,
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1)
    try:
        routes = list(PAGES.keys()) + ["/404"]
        bodies = render(routes)
    finally:
        srv.terminate()
    for r, body in bodies.items():
        page = build_html(tpl, r, body)
        fname = "index.html" if r == "/" else r.strip("/") + ".html"
        open(os.path.join(BUILD, fname), "w", encoding="utf-8").write(page)
        print(f"{fname:40s} {len(page)//1024:4d} KB  h1={len(re.findall('<h1', body))}")


if __name__ == "__main__":
    main()
