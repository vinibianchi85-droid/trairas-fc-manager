import { useState } from "react";

export default function JogadorForm({ onSalvar }) {

  const [form, setForm] = useState({
    nome:"",
    numero:"",
    posicao:"",
    nascimento:"",
    telefone:"",
    pe:"Direito",
    altura:"",
    peso:"",
    foto:""
  });

  function alterar(e){
    const {name,value}=e.target;

    setForm({
      ...form,
      [name]:value
    });
  }

  function salvar(e){
    e.preventDefault();

    if(form.nome===""){
      alert("Informe o nome.");
      return;
    }

    onSalvar(form);

    setForm({
      nome:"",
      numero:"",
      posicao:"",
      nascimento:"",
      telefone:"",
      pe:"Direito",
      altura:"",
      peso:"",
      foto:""
    });
  }

  return(

<form onSubmit={salvar}>

<h2>Novo Jogador</h2>

<input
name="nome"
placeholder="Nome"
value={form.nome}
onChange={alterar}
/>

<input
name="numero"
placeholder="Número"
type="number"
value={form.numero}
onChange={alterar}
/>

<input
name="posicao"
placeholder="Posição"
value={form.posicao}
onChange={alterar}
/>

<input
name="nascimento"
type="date"
value={form.nascimento}
onChange={alterar}
/>

<input
name="telefone"
placeholder="Telefone"
value={form.telefone}
onChange={alterar}
/>

<select
name="pe"
value={form.pe}
onChange={alterar}
>

<option>Direito</option>
<option>Esquerdo</option>
<option>Ambidestro</option>

</select>

<input
name="altura"
placeholder="Altura"
value={form.altura}
onChange={alterar}
/>

<input
name="peso"
placeholder="Peso"
value={form.peso}
onChange={alterar}
/>

<input
name="foto"
placeholder="URL da Foto"
value={form.foto}
onChange={alterar}
/>

<button>

Salvar Jogador

</button>

</form>

  );

}
