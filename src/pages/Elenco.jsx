import { useState } from "react";
import jogadoresIniciais from "../data/jogadores";

import JogadorForm from "../components/JogadorForm";
import JogadorCard from "../components/JogadorCard";

export default function Elenco() {
  const [jogadores, setJogadores] = useState(jogadoresIniciais);

  function adicionarJogador(jogador) {
    setJogadores([
      ...jogadores,
      {
        ...jogador,
        id: Date.now(),
        gols: 0,
        assistencias: 0,
        amarelos: 0,
        vermelhos: 0,
      },
    ]);
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Elenco Traíras FC</h1>

      <JogadorForm onSalvar={adicionarJogador} />

      <hr />

      {jogadores.length === 0 ? (
        <p>Nenhum jogador cadastrado.</p>
      ) : (
        jogadores.map((jogador) => (
          <JogadorCard
            key={jogador.id}
            jogador={jogador}
          />
        ))
      )}

    </div>
  );
}
