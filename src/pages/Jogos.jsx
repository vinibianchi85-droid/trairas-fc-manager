export default function Jogos() {
  const jogos = [
    {
      id: 1,
      adversario: "A definir",
      data: "00/00/2026",
      horario: "00:00",
      local: "Campo Municipal",
      placar: "-"
    }
  ];

  return (
    <>
      <h2>⚽ Jogos</h2>

      {jogos.map((jogo) => (
        <div className="card" key={jogo.id}>
          <h3>{jogo.adversario}</h3>

          <p>📅 {jogo.data}</p>
          <p>🕒 {jogo.horario}</p>
          <p>📍 {jogo.local}</p>
          <p>🥅 {jogo.placar}</p>
        </div>
      ))}
    </>
  );
}
