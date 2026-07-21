export default function JogadorCard({ jogador }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "#e5e5e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
          }}
        >
          👤
        </div>

        <div>
          <h3 style={{ margin: 0 }}>
            #{jogador.numero} - {jogador.nome}
          </h3>

          <p style={{ margin: "4px 0" }}>
            <strong>Posição:</strong> {jogador.posicao}
          </p>

          <p style={{ margin: "4px 0" }}>
            <strong>Pé:</strong> {jogador.pe}
          </p>

          <p style={{ margin: "4px 0" }}>
            <strong>Telefone:</strong> {jogador.telefone}
          </p>
        </div>
      </div>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 8,
        }}
      >
        <div>⚽ Gols: {jogador.gols}</div>
        <div>🎯 Assistências: {jogador.assistencias}</div>
        <div>🟨 Amarelos: {jogador.amarelos}</div>
        <div>🟥 Vermelhos: {jogador.vermelhos}</div>
      </div>
    </div>
  );
}
