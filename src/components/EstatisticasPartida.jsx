import { useState } from "react";

export default function EstatisticasPartida({
  jogadoresEscalados,
  onSalvar
}) {

  const [dados, setDados] = useState(
    jogadoresEscalados.map((jogador) => ({
      jogadorId: jogador.id,
      nome: jogador.nome,
      gols: 0,
      assistencias: 0,
      amarelos: 0,
      vermelhos: 0
    }))
  );

  function alterar(index, campo, valor) {

    const copia = [...dados];

    copia[index][campo] = Number(valor);

    setDados(copia);

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

      <h2>Estatísticas da Partida</h2>

      {

        dados.map((jogador, index) => (

          <div
            key={jogador.jogadorId}
            style={{
              borderBottom: "1px solid #eee",
              marginBottom: 15,
              paddingBottom: 15
            }}
          >

            <h3>{jogador.nome}</h3>

            <label>

              Gols

              <input
                type="number"
                min="0"
                value={jogador.gols}
                onChange={(e)=>
                  alterar(index,"gols",e.target.value)
                }
              />

            </label>

            <label>

              Assistências

              <input
                type="number"
                min="0"
                value={jogador.assistencias}
                onChange={(e)=>
                  alterar(index,"assistencias",e.target.value)
                }
              />

            </label>

            <label>

              Amarelos

              <input
                type="number"
                min="0"
                value={jogador.amarelos}
                onChange={(e)=>
                  alterar(index,"amarelos",e.target.value)
                }
              />

            </label>

            <label>

              Vermelhos

              <input
                type="number"
                min="0"
                value={jogador.vermelhos}
                onChange={(e)=>
                  alterar(index,"vermelhos",e.target.value)
                }
              />

            </label>

          </div>

        ))

      }

      <button
        onClick={() => onSalvar(dados)}
      >
        Salvar Estatísticas
      </button>

    </div>

  );

}
