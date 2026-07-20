import clube from "../data/clube";

export default function Home() {
  return (
    <>
      <div className="card">
        <h2>⚽ Próximo jogo</h2>

        <p><strong>Adversário:</strong> {clube.proximoJogo.adversario}</p>
        <p><strong>Data:</strong> {clube.proximoJogo.data}</p>
        <p><strong>Horário:</strong> {clube.proximoJogo.horario}</p>
      </div>

      <div className="card">
        <h2>🏆 Campanha</h2>

        <p>Jogos: {clube.campanha.jogos}</p>
        <p>Vitórias: {clube.campanha.vitorias}</p>
        <p>Empates: {clube.campanha.empates}</p>
        <p>Derrotas: {clube.campanha.derrotas}</p>
        <p>Gols Pró: {clube.campanha.golsPro}</p>
        <p>Gols Contra: {clube.campanha.golsContra}</p>
      </div>
    </>
  );
}
