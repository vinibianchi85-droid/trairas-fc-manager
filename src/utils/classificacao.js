export function gerarClassificacao(jogos = []) {
  const tabela = {
    "Traíras FC": {
      time: "Traíras FC",
      pontos: 0,
      jogos: 0,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      golsPro: 0,
      golsContra: 0,
      saldo: 0,
      aproveitamento: 0
    }
  };

  jogos.forEach((jogo) => {

    if (!jogo.placar) return;

    const [gp, gc] = jogo.placar
      .split("-")
      .map((n) => Number(n.trim()));

    if (isNaN(gp) || isNaN(gc)) return;

    const t = tabela["Traíras FC"];

    t.jogos++;
    t.golsPro += gp;
    t.golsContra += gc;

    if (gp > gc) {
      t.vitorias++;
      t.pontos += 3;
    } else if (gp === gc) {
      t.empates++;
      t.pontos++;
    } else {
      t.derrotas++;
    }

    t.saldo = t.golsPro - t.golsContra;

    t.aproveitamento =
      t.jogos === 0
        ? 0
        : ((t.pontos / (t.jogos * 3)) * 100).toFixed(1);
  });

  return Object.values(tabela);
}
