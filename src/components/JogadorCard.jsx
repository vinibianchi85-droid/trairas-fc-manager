export default function JogadorCard({ jogador }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
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
              border: "2px solid #16a34a",
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
              fontSize: 42,
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

        <p>
          <strong>Posição:</strong> {jogador.posicao}
        </p>

        <p>
          <strong>Pé:</strong> {jogador.pe}
        </p>

        <p>
          <strong>Telefone:</strong> {jogador.telefone}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 8,
            marginTop: 10,
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
            gap: 10,
          }}
        >
          <button>
            👁 Ver Perfil
          </button>

          <button>
            ✏ Editar
          </button>

          <button>
            🗑 Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
