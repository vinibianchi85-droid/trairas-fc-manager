export default function BottomMenu({ pagina, setPagina }) {
  const itens = [
    { id: "home", nome: "🏠 Home" },
    { id: "dashboard", nome: "📈 Dashboard" },
    { id: "jogos", nome: "⚽ Jogos" },
    { id: "elenco", nome: "👥 Elenco" },
    { id: "campeonato", nome: "🏆 Campeonato" },
    { id: "estatisticas", nome: "📊 Estatísticas" },
    { id: "admin", nome: "⚙️ Admin" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        overflowX: "auto",
        background: "#111",
        borderTop: "1px solid #333",
        padding: "8px",
        gap: "8px",
      }}
    >
      {itens.map((item) => (
        <button
          key={item.id}
          onClick={() => setPagina(item.id)}
          style={{
            flex: 1,
            minWidth: "110px",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: pagina === item.id ? "#16a34a" : "#2b2b2b",
            color: "#fff",
            fontWeight: pagina === item.id ? "bold" : "normal",
          }}
        >
          {item.nome}
        </button>
      ))}
    </nav>
  );
}
