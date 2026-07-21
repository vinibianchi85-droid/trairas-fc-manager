import logo from "../assets/logo.png";
import { colors } from "../styles/theme";

export default function Header() {
  return (
    <header
      style={{
        background: colors.primary,
        color: colors.white,
        padding: 20,
        display: "flex",
        alignItems: "center",
        gap: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,.2)"
      }}
    >
      <img
        src={logo}
        alt="Traíras FC"
        style={{
          width: 70,
          height: 70
        }}
      />

      <div>
        <h1 style={{ margin: 0 }}>
          Traíras FC Manager
        </h1>

        <small>
          Gestão completa do elenco
        </small>
      </div>
    </header>
  );
}
