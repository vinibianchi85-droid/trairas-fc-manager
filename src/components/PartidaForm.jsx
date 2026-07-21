import { useState } from "react";

export default function PartidaForm({ onSalvar }) {
  const modelo = {
    data: "",
    adversario: "",
    campeonato: "",
    local: "",
    placarTrairas: "",
    placarAdversario: ""
  };

  const [form, setForm] = useState(modelo);

  function alterar(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function salvar(e) {
    e.preventDefault();

    if (
      !form.data ||
      !form.adversario ||
      !form.campeonato
    ) {
      alert("Preencha Data, Adversário e Campeonato.");
      return;
    }

    onSalvar({
      ...form,
      id: Date.now(),
      jogadores: []
    });

    setForm(modelo);
  }

  return (
    <form
      onSubmit={salvar}
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20
      }}
    >
      <h2>Nova Partida</h2>

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={alterar}
      />

      <input
        name="adversario"
        placeholder="Adversário"
        value={form.adversario}
        onChange={alterar}
      />

      <input
        name="campeonato"
        placeholder="Campeonato"
        value={form.campeonato}
        onChange={alterar}
      />

      <input
        name="local"
        placeholder="Local"
        value={form.local}
        onChange={alterar}
      />

      <input
        type="number"
        name="placarTrairas"
        placeholder="Gols Traíras"
        value={form.placarTrairas}
        onChange={alterar}
      />

      <input
        type="number"
        name="placarAdversario"
        placeholder="Gols Adversário"
        value={form.placarAdversario}
        onChange={alterar}
      />

      <button type="submit">
        Salvar Partida
      </button>
    </form>
  );
}
