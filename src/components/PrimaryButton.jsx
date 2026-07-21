import { colors } from "../styles/theme";

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  style = {}
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
        color: colors.white,
        border: "none",
        borderRadius: 12,
        padding: "12px 22px",
        fontSize: 16,
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,.25)",
        transition: "all .2s ease",
        opacity: disabled ? 0.6 : 1,
        ...style
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "scale(1.03)";
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {children}
    </button>
  );
}
