export function ordenarHistorico(jogos = []) {
  return [...jogos].sort((a, b) => {
    const da = new Date(a.data || 0);
    const db = new Date(b.data || 0);
    return db - da;
  });
}

export function filtrarJogos(jogos = [], filtro = "") {
  if (!filtro) return jogos;

  return jogos.filter((jogo) =>
    (jogo.adversario || "")
      .toLowerCase()
      .includes(filtro.toLowerCase())
  );
}
