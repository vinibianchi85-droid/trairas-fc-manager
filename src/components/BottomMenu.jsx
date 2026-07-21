import { colors } from "../styles/theme";

export default function BottomMenu({ pagina, setPagina }) {

  const menu = [
    { id: "home", nome: "🏠", texto: "Home" },
    { id: "elenco", nome: "👥", texto: "Elenco" },
    { id: "jogos", nome: "⚽", texto: "Jogos" },
    { id: "dashboard", nome: "📊", texto: "Dashboard" },
    { id: "admin", nome: "⚙️", texto: "Admin" }
  ];

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: colors.primary,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -3px 10px rgba(0,0,0,.3)"
      }}
    >
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setPagina(item.id)}
          style={{
            background: "transparent",
            border: "none",
            color:
              pagina === item.id
                ? colors.accent
                : colors.white,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            fontSize: 12
          }}
        >
          <span style={{ fontSize: 22 }}>
            {item.nome}
          </span>

          {item.texto}
        </button>
      ))}
    </footer>
  );
}
