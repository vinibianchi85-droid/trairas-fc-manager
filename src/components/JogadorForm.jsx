import { useState } from "react";

export default function JogadorForm({ onSalvar }) {
  const [form, setForm] = useState({
    nome: "",
    numero: "",
    posicao: "",
    nascimento: "",
    telefone: "",
    pe: "Direito",
    altura: "",
    peso: ""
  });

  function alterar(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function salvar(e) {
    e.preventDefault();

    if (!form.nome.trim()) {
      alert("Informe o nome do jogador.");
      return;
    }

    onSalvar(form);

    setForm({
      nome: "",
      numero: "",
      posicao: "",
      nascimento: "",
      telefone: "",
      pe: "Direito",
      altura: "",
      peso: ""
    });
  }

  return (
    <form
      onSubmit={salvar}
      style={{
        display: "grid",
        gap: 10,
        marginBottom: 20,
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 10,
      }}
    >
      <h3>Novo Jogador</h3>

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
        placeholder="Altura (Ex.: 1,80)"
        value={form.altura}
        onChange={alterar}
      />

      <input
        name="peso"
        placeholder="Peso (kg)"
        value={form.peso}
        onChange={alterar}
      />

      <button type="submit">
        Salvar Jogador
      </button>
    </form>
  );
}
