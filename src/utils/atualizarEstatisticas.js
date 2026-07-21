export default function atualizarEstatisticas(
  jogadores,
  estatisticasPartida
) {
  return jogadores.map((jogador) => {
    const registro = estatisticasPartida.find(
      (item) => item.jogadorId === jogador.id
    );

    if (!registro) return jogador;

    return {
      ...jogador,
      jogos: (jogador.jogos || 0) + 1,
      gols: (jogador.gols || 0) + registro.gols,
      assistencias:
        (jogador.assistencias || 0) + registro.assistencias,
      amarelos:
        (jogador.amarelos || 0) + registro.amarelos,
      vermelhos:
        (jogador.vermelhos || 0) + registro.vermelhos,
    };
  });
}
