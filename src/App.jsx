import { useState } from "react";

export default function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <div className="app">
      <header className="header">
        <h1>⚽ Traíras FC Manager</h1>
        <p>Temporada 2026 • Citadino</p>
      </header>

      <main className="content">
        {pagina === "home" && <Home />}
        {pagina === "jogos" && <Jogos />}
        {pagina === "elenco" && <Elenco />}
        {pagina === "estatisticas" && <Estatisticas />}
        {pagina === "campeonato" && <Campeonato />}
        {pagina === "admin" && <Admin />}
      </main>

      <footer className="menu">
        <button onClick={() => setPagina("home")}>🏠 Home</button>
        <button onClick={() => setPagina("jogos")}>⚽ Jogos</button>
        <button onClick={() => setPagina("elenco")}>👥 Elenco</button>
        <button onClick={() => setPagina("estatisticas")}>📊 Stats</button>
        <button onClick={() => setPagina("campeonato")}>🏆 Tabela</button>
        <button onClick={() => setPagina("admin")}>⚙️ Admin</button>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Bem-vindo ao Traíras FC</h2>

      <div className="card">
        <h3>Próximo jogo</h3>
        <p>Traíras FC x Adversário</p>
      </div>

      <div className="card">
        <h3>Último resultado</h3>
        <p>Traíras FC 3 x 1 Adversário</p>
      </div>

      <div className="card">
        <h3>Campanha</h3>
        <p>0 Jogos</p>
        <p>0 Vitórias</p>
        <p>0 Empates</p>
        <p>0 Derrotas</p>
      </div>
    </div>
  );
}

function Jogos() {
  return <h2>⚽ Jogos</h2>;
}

function Elenco() {
  return <h2>👥 Elenco</h2>;
}

function Estatisticas() {
  return <h2>📊 Estatísticas</h2>;
}

function Campeonato() {
  return <h2>🏆 Campeonato</h2>;
}

function Admin() {
  return <h2>⚙️ Administração</h2>;
}
