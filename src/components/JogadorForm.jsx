import { useState, useEffect } from "react";

export default function JogadorForm({
  onSalvar,
  jogadorEditando,
  cancelarEdicao
}) {

  const modelo = {
    nome:"",
    numero:"",
    posicao:"",
    nascimento:"",
    telefone:"",
    pe:"Direito",
    altura:"",
    peso:"",
    foto:""
  };

  const [form,setForm]=useState(modelo);

  useEffect(()=>{

    if(jogadorEditando){

      setForm(jogadorEditando);

    }else{

      setForm(modelo);

    }

  },[jogadorEditando]);

  function alterar(e){

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  }

  function salvar(e){

    e.preventDefault();

    if(form.nome===""){

      alert("Informe o nome.");

      return;

    }

    onSalvar(form);

    setForm(modelo);

  }

  return(

<form onSubmit={salvar}>

<h2>

{

jogadorEditando ?

"Editar Jogador"

:

"Novo Jogador"

}

</h2>

<input
name="nome"
placeholder="Nome"
value={form.nome}
onChange={alterar}
/>

<input
name="numero"
type="number"
placeholder="Número"
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

<button type="submit">

{

jogadorEditando ?

"Salvar Alterações"

:

"Salvar Jogador"

}

</button>

{

jogadorEditando && (

<button
type="button"
onClick={cancelarEdicao}
style={{marginLeft:10}}
>

Cancelar

</button>

)

}

</form>

  );

}
