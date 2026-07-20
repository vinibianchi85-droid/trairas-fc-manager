import { useEffect, useState } from "react";
import JogoForm from "../components/JogoForm";
import { load, save } from "../utils/storage";
import { ordenarHistorico, filtrarJogos } from "../utils/historico";

export default function Jogos() {

  const [jogos, setJogos] = useState(() =>
    ordenarHistorico(load("jogos", []))
  );

  const [busca, setBusca] = useState("");

  useEffect(() => {
    save("jogos", jogos);
  }, [jogos]);

  function adicionar(jogo) {
    setJogos(ordenarHistorico([...jogos, jogo]));
  }

  function excluir(id) {
    if (!confirm("Excluir esta partida?")) return;

    setJogos(jogos.filter((j) => j.id !== id));
  }

  const lista = filtrarJogos(jogos, busca);

  return (
    <div className="pagina">

      <h1>⚽ Jogos</h1>

      <JogoForm onSalvar={adicionar} />

      <input
        placeholder="Pesquisar adversário..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {lista.map((jogo) => (

        <div className="card" key={jogo.id}>

          <h3>{jogo.adversario}</h3>

          <p>Data: {jogo.data || "-"}</p>

          <p>Placar: {jogo.placar}</p>

          <button onClick={() => excluir(jogo.id)}>
            Excluir
          </button>

        </div>

      ))}

    </div>
  );
}
