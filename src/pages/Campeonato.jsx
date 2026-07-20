export default function Campeonato() {
  const tabela = [
    {
      pos: 1,
      time: "Traíras FC",
      pts: 0,
      j: 0,
      v: 0,
      e: 0,
      d: 0,
      gp: 0,
      gc: 0,
      sg: 0
    }
  ];

  return (
    <>
      <h2>🏆 Campeonato</h2>

      {tabela.map((time) => (
        <div className="card" key={time.pos}>
          <h3>
            {time.pos}º - {time.time}
          </h3>

          <p>Pts: {time.pts}</p>
          <p>Jogos: {time.j}</p>
          <p>Vitórias: {time.v}</p>
          <p>Empates: {time.e}</p>
          <p>Derrotas: {time.d}</p>
          <p>GP: {time.gp}</p>
          <p>GC: {time.gc}</p>
          <p>Saldo: {time.sg}</p>
        </div>
      ))}
    </>
  );
}
