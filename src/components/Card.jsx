import { colors } from "../styles/theme";

export default function Card({
  title,
  children
}) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        color: colors.white,
        borderRadius: 18,
        padding: 22,
        boxShadow: "0 8px 20px rgba(0,0,0,.20)",
        transition: "0.25s",
        cursor: "default",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -30,
          top: -30,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)"
        }}
      />

      <h3
        style={{
          marginTop: 0,
          marginBottom: 18,
          fontSize: 18,
          fontWeight: "bold"
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontSize: 16
        }}
      >
        {children}
      </div>
    </div>
  );
}
