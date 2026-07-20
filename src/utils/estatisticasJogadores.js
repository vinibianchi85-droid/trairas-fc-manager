export function calcularEstatisticasJogadores(jogos = []) {
  const jogadores = {};

  jogos.forEach((jogo) => {
    if (!jogo.artilheiros) return;

    jogo.artilheiros.forEach((nome) => {
      if (!jogadores[nome]) {
        jogadores[nome] = {
          nome,
          gols: 0,
          jogos: 0
        };
      }

      jogadores[nome].gols++;
    });

    if (jogo.jogadores) {
      jogo.jogadores.forEach((nome) => {
        if (!jogadores[nome]) {
          jogadores[nome] = {
            nome,
            gols: 0,
            jogos: 0
          };
        }

        jogadores[nome].jogos++;
      });
    }
  });

  return Object.values(jogadores).sort((a, b) => b.gols - a.gols);
}
