import { useState } from "react";

import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Elenco from "./pages/Elenco";
import Campeonato from "./pages/Campeonato";
import Estatisticas from "./pages/Estatisticas";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

import Header from "./components/Header";
import BottomMenu from "./components/BottomMenu";

export default function App() {
  const [pagina, setPagina] = useState("home");

  function renderPagina() {
    switch (pagina) {
      case "home":
        return <Home />;

      case "dashboard":
        return <Dashboard />;

      case "jogos":
        return <Jogos />;

      case "elenco":
        return <Elenco />;

      case "campeonato":
        return <Campeonato />;

      case "estatisticas":
        return <Estatisticas />;

      case "admin":
        return <Admin />;

      default:
        return <Home />;
    }
  }

  return (
    <div className="app">

      <Header />

      <main>
        {renderPagina()}
      </main>

      <BottomMenu
  pagina={pagina}
  setPagina={setPagina}
/>

    </div>
  );
}
