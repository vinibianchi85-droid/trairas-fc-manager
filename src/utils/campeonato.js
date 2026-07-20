export function tabela(jogos = []) {
  const tabela = {
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  };

  jogos.forEach((jogo) => {
    if (!jogo.placar) return;

    const placar = jogo.placar.split("-");

    if (placar.length !== 2) return;

    const golsPro = parseInt(placar[0].trim());
    const golsContra = parseInt(placar[1].trim());

    if (isNaN(golsPro) || isNaN(golsContra)) return;

    tabela.jogos++;
    tabela.golsPro += golsPro;
    tabela.golsContra += golsContra;

    if (golsPro > golsContra) {
      tabela.vitorias++;
      tabela.pontos += 3;
    } else if (golsPro === golsContra) {
      tabela.empates++;
      tabela.pontos++;
    } else {
      tabela.derrotas++;
    }
  });

  tabela.saldo = tabela.golsPro - tabela.golsContra;

  return tabela;
}
