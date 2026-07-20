import { useState } from "react";
export default function FormJogo() {
  const [adversario, setAdversario] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");

  function salvarJogo() {
    alert("Jogo cadastrado (por enquanto apenas teste).");
  }

  return (
    <div className="card">
      <h2>Novo Jogo</h2>

      <input
        placeholder="Adversário"
        value={adversario}
        onChange={(e) => setAdversario(e.target.value)}
      />

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <input
        type="time"
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
      />

      <input
        placeholder="Local"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />

      <button onClick={salvarJogo}>
        Salvar jogo
      </button>
    </div>
  );
}
