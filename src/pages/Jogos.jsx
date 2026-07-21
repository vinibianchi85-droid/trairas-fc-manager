import { useState } from "react";

import partidasIniciais from "../data/partidas";
import jogadoresIniciais from "../data/jogadores";

import PartidaForm from "../components/PartidaForm";
import EscalacaoForm from "../components/EscalacaoForm";
import EstatisticasPartida from "../components/EstatisticasPartida";

import atualizarEstatisticas from "../utils/atualizarEstatisticas";

export default function Jogos() {

  const [partidas, setPartidas] = useState(partidasIniciais);

  const [jogadores, setJogadores] = useState(jogadoresIniciais);

  const [partidaAtual, setPartidaAtual] = useState(null);

  const [escalados, setEscalados] = useState([]);

  function salvarPartida(partida) {

    setPartidaAtual(partida);

    setPartidas([...partidas, partida]);

  }

  function salvarEscalacao(ids) {

    const lista = jogadores.filter((j) =>
      ids.includes(j.id)
    );

    setEscalados(lista);

  }

  function salvarEstatisticas(estatisticas) {

    const atualizados = atualizarEstatisticas(
      jogadores,
      estatisticas
    );

    setJogadores(atualizados);

    alert("Partida registrada com sucesso!");

    setPartidaAtual(null);

    setEscalados([]);

  }

  return (

    <div style={{ padding:20 }}>

      <h1>Jogos</h1>

      <PartidaForm
        onSalvar={salvarPartida}
      />

      {

        partidaAtual && (

          <EscalacaoForm

            jogadores={jogadores}

            onSalvar={salvarEscalacao}

          />

        )

      }

      {

        escalados.length>0 && (

          <EstatisticasPartida

            jogadoresEscalados={escalados}

            onSalvar={salvarEstatisticas}

          />

        )

      }

    </div>

  );

}
