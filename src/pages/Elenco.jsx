import jogadores from "../data/jogadores";

export default function Elenco() {
  return (
    <>
      <h2>👥 Elenco</h2>

      {jogadores.map((jogador) => (
        <div className="card" key={jogador.id}>
          <h3>
            #{jogador.numero} - {jogador.nome}
          </h3>

          <p><strong>Posição:</strong> {jogador.posicao}</p>
          <p>⚽ Gols: {jogador.gols}</p>
          <p>🎯 Assistências: {jogador.assistencias}</p>
          <p>🏃 Jogos: {jogador.jogos}</p>
          <p>🟨 Amarelos: {jogador.amarelos}</p>
          <p>🟥 Vermelhos: {jogador.vermelhos}</p>
        </div>
      ))}
    </>
  );
}
