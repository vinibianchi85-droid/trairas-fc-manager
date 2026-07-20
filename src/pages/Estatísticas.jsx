import jogadores from "../data/jogadores";

export default function Estatisticas() {
  const artilheiro = [...jogadores].sort((a, b) => b.gols - a.gols)[0];

  return (
    <>
      <div className="card">
        <h2>📊 Estatísticas</h2>

        <p>
          <strong>Artilheiro:</strong>{" "}
          {artilheiro ? artilheiro.nome : "Nenhum"}
        </p>

        <p>
          <strong>Gols:</strong>{" "}
          {artilheiro ? artilheiro.gols : 0}
        </p>
      </div>
    </>
  );
}
