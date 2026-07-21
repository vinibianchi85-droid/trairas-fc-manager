import { useState } from "react";

export default function EscalacaoForm({
  jogadores,
  onSalvar
}) {

  const [selecionados, setSelecionados] = useState([]);

  function marcar(id) {

    if (selecionados.includes(id)) {

      setSelecionados(
        selecionados.filter(j => j !== id)
      );

    } else {

      setSelecionados([
        ...selecionados,
        id
      ]);

    }

  }

  function salvar() {

    onSalvar(selecionados);

  }

  return (

    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        marginTop: 20
      }}
    >

      <h2>Escalação</h2>

      {

        jogadores.length === 0 ?

        <p>Nenhum jogador cadastrado.</p>

        :

        jogadores.map((jogador) => (

          <label
            key={jogador.id}
            style={{
              display: "block",
              marginBottom: 8
            }}
          >

            <input
              type="checkbox"
              checked={selecionados.includes(jogador.id)}
              onChange={() => marcar(jogador.id)}
            />

            {" "}

            #{jogador.numero} - {jogador.nome}

          </label>

        ))

      }

      <button
        onClick={salvar}
        style={{
          marginTop: 15
        }}
      >
        Confirmar Escalação
      </button>

    </div>

  );

}
