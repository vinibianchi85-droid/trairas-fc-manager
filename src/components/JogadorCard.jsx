export default function JogadorCard({
  jogador,
  onEditar,
  onExcluir
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)"
      }}
    >
      <div>
        {jogador.foto ? (
          <img
            src={jogador.foto}
            alt={jogador.nome}
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #16a34a"
            }}
          />
        ) : (
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42
            }}
          >
            👤
          </div>
        )}
      </div>

      <div style={{ flex: 1 }}>
        <h2 style={{ margin: 0 }}>
          #{jogador.numero} {jogador.nome}
        </h2>

        <p><strong>Posição:</strong> {jogador.posicao}</p>

        <p><strong>Pé:</strong> {jogador.pe}</p>

        <p><strong>Telefone:</strong> {jogador.telefone}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 8,
            marginTop: 10
          }}
        >
          <div>⚽ {jogador.gols}</div>

          <div>🎯 {jogador.assistencias}</div>

          <div>🟨 {jogador.amarelos}</div>

          <div>🟥 {jogador.vermelhos}</div>
        </div>

        <div
          style={{
            marginTop: 15,
            display: "flex",
            gap: 10
          }}
        >
          <button type="button">
            👁 Ver Perfil
          </button>

          <button
            type="button"
            onClick={onEditar}
          >
            ✏️ Editar
          </button>

          <button
            type="button"
            onClick={onExcluir}
            style={{
              background: "#dc2626",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 12px",
              cursor: "pointer"
            }}
          >
            🗑 Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
