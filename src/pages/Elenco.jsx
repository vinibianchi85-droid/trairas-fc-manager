import { useState } from "react";

import jogadoresIniciais from "../data/jogadores";

import JogadorForm from "../components/JogadorForm";
import JogadorCard from "../components/JogadorCard";

export default function Elenco() {

  const [jogadores, setJogadores] = useState(jogadoresIniciais);

  const [pesquisa, setPesquisa] = useState("");

  function adicionarJogador(jogador){

    setJogadores([
      ...jogadores,
      {
        ...jogador,
        id: Date.now(),
        gols:0,
        assistencias:0,
        amarelos:0,
        vermelhos:0,
        jogos:0
      }
    ]);

  }

  const jogadoresFiltrados = jogadores.filter((jogador)=>{

    const texto = pesquisa.toLowerCase();

    return (

      jogador.nome.toLowerCase().includes(texto) ||

      String(jogador.numero).includes(texto)

    );

  });

  return(

<div style={{padding:20}}>

<h1>Elenco Traíras FC</h1>

<JogadorForm onSalvar={adicionarJogador}/>

<hr/>

<input

placeholder="Pesquisar jogador..."

value={pesquisa}

onChange={(e)=>setPesquisa(e.target.value)}

style={{
width:"100%",
padding:12,
marginBottom:20,
borderRadius:8,
border:"1px solid #ccc"
}}

/>

{

jogadoresFiltrados.length===0 ?

<p>Nenhum jogador encontrado.</p>

:

jogadoresFiltrados.map((jogador)=>(

<JogadorCard

key={jogador.id}

jogador={jogador}

/>

))

}

</div>

  );

}
