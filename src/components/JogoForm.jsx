import { useState } from "react";

export default function JogoForm({ onSalvar }) {
  const [adversario, setAdversario] = useState("");
  const [placar, setPlacar] = useState("");
  const [artilheiros, setArtilheiros] = useState("");
  const [assistencias, setAssistencias] = useState("");
  const [amarelos, setAmarelos] = useState("");
  const [vermelhos, setVermelhos] = useState("");
  
  const [data, setData] = useState("");
  function salvar() {
    onSalvar({
      id: Date.now(),
      adversario,
      placar,
      artilheiros: artilheiros
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean),
      assistencias: assistencias
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean),
      amarelos: amarelos
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean),
      vermelhos: vermelhos
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean),
    });

    setAdversario("");
    setPlacar("");
    setArtilheiros("");
    setAssistencias("");
    setAmarelos("");
    setVermelhos("");
  }

  return (
    <div className="card">

      <input
        placeholder="Adversário"
        value={adversario}
        onChange={(e) => setAdversario(e.target.value)}
      />

      <input
        placeholder="Placar (2-1)"
        value={placar}
        onChange={(e) => setPlacar(e.target.value)}
      />

      <input
       type="date"
       value={data}
       onChange={(e) => setData(e.target.value)}
      />
      
      <input
        placeholder="Artilheiros (separados por vírgula)"
        value={artilheiros}
        onChange={(e) => setArtilheiros(e.target.value)}
      />

      <input
        placeholder="Assistências"
        value={assistencias}
        onChange={(e) => setAssistencias(e.target.value)}
      />

      <input
        placeholder="Cartões amarelos"
        value={amarelos}
        onChange={(e) => setAmarelos(e.target.value)}
      />

      <input
        placeholder="Cartões vermelhos"
        value={vermelhos}
        onChange={(e) => setVermelhos(e.target.value)}
      />

      <button onClick={salvar}>
        Salvar partida
      </button>

    </div>
  );
}
