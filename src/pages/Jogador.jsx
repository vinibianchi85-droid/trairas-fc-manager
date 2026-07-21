export default function Jogador({ jogador }) {
  if (!jogador) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Jogador não encontrado</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 25,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            margin: "0 auto",
            borderRadius: "50%",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 60,
          }}
        >
          👤
        </div>

        <h2 style={{ marginTop: 15 }}>
          {jogador.nome}
        </h2>

        <h3>
          Camisa #{jogador.numero}
        </h3>
      </div>

      <hr />

      <h3>Informações</h3>

      <p><strong>Posição:</strong> {jogador.posicao}</p>

      <p><strong>Nascimento:</strong> {jogador.nascimento}</p>

      <p><strong>Pé dominante:</strong> {jogador.pe}</p>

      <p><strong>Altura:</strong> {jogador.altura}</p>

      <p><strong>Peso:</strong> {jogador.peso}</p>

      <p><strong>Telefone:</strong> {jogador.telefone}</p>

      <hr />

      <h3>Estatísticas</h3>

      <p>⚽ Gols: {jogador.gols}</p>

      <p>🎯 Assistências: {jogador.assistencias}</p>

      <p>🟨 Cartões amarelos: {jogador.amarelos}</p>

      <p>🟥 Cartões vermelhos: {jogador.vermelhos}</p>

      <p>🏃 Jogos: {jogador.jogos || 0}</p>

      <p>
        ⭐ Média de gols:
        {" "}
        {jogador.jogos
          ? (jogador.gols / jogador.jogos).toFixed(2)
          : "0.00"}
      </p>
    </div>
  );
}
