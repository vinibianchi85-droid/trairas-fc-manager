import { useState } from "react";
import jogadoresIniciais from "../data/jogadores";
import JogadorForm from "../components/JogadorForm";

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
      <h2>Elenco</h2>

      <JogadorForm onSalvar={adicionarJogador} />

      <div style={{ marginTop: 20 }}>
        {jogadores.map((jogador) => (
          <div
            key={jogador.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <h3>
              #{jogador.numero} - {jogador.nome}
            </h3>

            <p><strong>Posição:</strong> {jogador.posicao}</p>
            <p><strong>Pé dominante:</strong> {jogador.pe}</p>
            <p><strong>Telefone:</strong> {jogador.telefone}</p>

            <hr />

            <p>⚽ Gols: {jogador.gols}</p>
            <p>🎯 Assistências: {jogador.assistencias}</p>
            <p>🟨 Amarelos: {jogador.amarelos}</p>
            <p>🟥 Vermelhos: {jogador.vermelhos}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
