import { useState } from "react";

import jogadoresIniciais from "../data/jogadores";
import JogadorForm from "../components/JogadorForm";
import JogadorCard from "../components/JogadorCard";

export default function Elenco() {

  const [jogadores, setJogadores] = useState(jogadoresIniciais);
  const [pesquisa, setPesquisa] = useState("");
  const [jogadorEditando, setJogadorEditando] = useState(null);

  function salvarJogador(jogador) {

    if (jogadorEditando) {

      setJogadores(
        jogadores.map((j) =>
          j.id === jogador.id ? jogador : j
        )
      );

      setJogadorEditando(null);

      return;
    }

    setJogadores([
      ...jogadores,
      {
        ...jogador,
        id: Date.now(),
        gols: 0,
        assistencias: 0,
        amarelos: 0,
        vermelhos: 0,
        jogos: 0,
      },
    ]);
  }

  function editarJogador(jogador) {
    setJogadorEditando(jogador);
  }

  function cancelarEdicao() {
    setJogadorEditando(null);
  }

  function excluirJogador(id) {

    if (!confirm("Deseja excluir este jogador?")) return;

    setJogadores(
      jogadores.filter((j) => j.id !== id)
    );
  }

  const jogadoresFiltrados = jogadores.filter((j) => {

    const texto = pesquisa.toLowerCase();

    return (
      j.nome.toLowerCase().includes(texto) ||
      String(j.numero).includes(texto)
    );

  });

  return (
    <div style={{ padding: 20 }}>

      <h1>Elenco Traíras FC</h1>

      <JogadorForm
        onSalvar={salvarJogador}
        jogadorEditando={jogadorEditando}
        cancelarEdicao={cancelarEdicao}
      />

      <hr />

      <input
        placeholder="Pesquisar jogador..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 20,
        }}
      />

      {jogadoresFiltrados.map((jogador) => (

        <JogadorCard
          key={jogador.id}
          jogador={jogador}
          onEditar={() => editarJogador(jogador)}
          onExcluir={() => excluirJogador(jogador.id)}
        />

      ))}

    </div>
  );
}
