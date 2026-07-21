import { colors } from "../styles/theme";

export default function Card({
  title,
  children
}) {
  return (
    <div
      style={{
        background: colors.card,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,.12)"
      }}
    >
      <h3
        style={{
          color: colors.primary,
          marginBottom: 15
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}
