import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Escritorio from "@/pages/Escritorio";
import AreasDeAtuacao from "@/pages/AreasDeAtuacao";
import Equipe from "@/pages/Equipe";
import Unidades from "@/pages/Unidades";
import Contato from "@/pages/Contato";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import TermosDeUso from "@/pages/TermosDeUso";
import LandingRoute from "@/pages/LandingRoute";
import NotFound from "@/pages/NotFound";

const LANDING_SLUGS = [
    "pensao-por-morte",
    "aposentadoria",
    "cnis",
    "planejamento-previdenciario",
    "auxilio-acidente",
    "emprestimo-nao-reconhecido",
    "direito-aereo",
    "bpc-loas",
    "bpc-idoso",
    "bpc-autismo",
    "salario-maternidade",
];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/escritorio" element={<Escritorio />} />
                    <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/unidades" element={<Unidades />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
                    <Route path="/termos-de-uso" element={<TermosDeUso />} />
                    {LANDING_SLUGS.map((slug) => (
                        <Route key={slug} path={`/${slug}`} element={<LandingRoute slug={slug} />} />
                    ))}
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
