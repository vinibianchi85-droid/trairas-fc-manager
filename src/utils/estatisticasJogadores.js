export function calcularEstatisticasJogadores(jogos = []) {

  const jogadores = {};

  jogos.forEach((jogo) => {

    (jogo.artilheiros || []).forEach((nome) => {

      if (!jogadores[nome]) {
        jogadores[nome] = {
          nome,
          gols: 0,
          assistencias: 0,
          amarelos: 0,
          vermelhos: 0,
          jogos: 0
        };
      }

      jogadores[nome].gols++;

    });

    (jogo.assistencias || []).forEach((nome) => {

      if (!jogadores[nome]) {
        jogadores[nome] = {
          nome,
          gols: 0,
          assistencias: 0,
          amarelos: 0,
          vermelhos: 0,
          jogos: 0
        };
      }

      jogadores[nome].assistencias++;

    });

    (jogo.amarelos || []).forEach((nome) => {

      if (!jogadores[nome]) {
        jogadores[nome] = {
          nome,
          gols: 0,
          assistencias: 0,
          amarelos: 0,
          vermelhos: 0,
          jogos: 0
        };
      }

      jogadores[nome].amarelos++;

    });

    (jogo.vermelhos || []).forEach((nome) => {

      if (!jogadores[nome]) {
        jogadores[nome] = {
          nome,
          gols: 0,
          assistencias: 0,
          amarelos: 0,
          vermelhos: 0,
          jogos: 0
        };
      }

      jogadores[nome].vermelhos++;

    });

  });

  return Object.values(jogadores).sort(
    (a, b) => b.gols - a.gols
  );
}
