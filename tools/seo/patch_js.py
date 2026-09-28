import json,sys,os,glob
sys.path.insert(0,'.')
from seo import PAGES, AREA_SLUGS, TEXT_SWAPS
js=open('/home/claude/site-backup-pre-seo/static/js/main.7b2e4d91.js').read()
old='document.title=`${n.h1} \\u2014 Junqueira Advogados`;const e=document.querySelector(\'meta[name="description"]\');e&&e.setAttribute("content",n.subtitle)'
assert js.count(old)==1
m={s:[PAGES['/'+s][0],PAGES['/'+s][1]] for s in AREA_SLUGS}
js=js.replace(old,'const __s=('+json.dumps(m,ensure_ascii=True)+')[t]||[`${n.h1} \\u2014 Junqueira Advogados`,n.subtitle];document.title=__s[0];const e=document.querySelector(\'meta[name="description"]\');e&&e.setAttribute("content",__s[1])')
oldalt='(0,s().jsx)("img",{src:e,alt:"",className:"h-full w-full object-cover",loading:"lazy",draggable:!1})'
assert js.count(oldalt)==1
js=js.replace(oldalt,oldalt.replace('alt:""','alt:"Equipe trabalhando no escrit\\xf3rio Junqueira Advogados"'))
for a,b in TEXT_SWAPS:
    n=js.count(a); assert n>=1,(a,n); js=js.replace(a,b)
    print(n,'x',b[:60])
NEW='main.9a3d61c2'
js=js.replace('main.7b2e4d91',NEW)
d='/home/claude/site-original/static/js/'
for f in glob.glob(d+'main.*'): os.remove(f)
open(d+NEW+'.js','w').write(js)
import shutil; shutil.copy('/home/claude/site-backup-pre-seo/static/js/main.7b2e4d91.js.LICENSE.txt',d+NEW+'.js.LICENSE.txt')
for f in ['/home/claude/site-original/asset-manifest.json','template.html']:
    s=open(f).read().replace('main.5f2b7c19',NEW); open(f,'w').write(s)
t=open('template.html').read()
t=t.replace('presença consolidada no Piauí e Maranhão. Método, transparência e proximidade jurídica.','atuação em Direito Previdenciário e do Consumidor e atendimento em todo o Brasil.')
t=t.replace('presença no Piauí e Maranhão. Atendimento presencial e digital com método.','atendimento presencial e digital em todo o Brasil.')
open('template.html','w').write(t)
print('Piauí left in template:', 'Piauí e Maranhão' in t)
