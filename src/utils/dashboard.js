export function calcularDashboard(jogadores = [], partidas = []) {

  const totalJogadores = jogadores.length;

  const totalPartidas = partidas.length;

  const totalGols = jogadores.reduce(
    (total, j) => total + (j.gols || 0),
    0
  );

  const totalAssistencias = jogadores.reduce(
    (total, j) => total + (j.assistencias || 0),
    0
  );

  const artilheiro = [...jogadores]
    .sort((a, b) => (b.gols || 0) - (a.gols || 0))[0];

  const garcom = [...jogadores]
    .sort((a, b) => (b.assistencias || 0) - (a.assistencias || 0))[0];

  return {
    totalJogadores,
    totalPartidas,
    totalGols,
    totalAssistencias,
    artilheiro,
    garcom
  };

}
