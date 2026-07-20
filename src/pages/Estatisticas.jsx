import { load } from "../utils/storage";
import { calcularEstatisticasJogadores } from "../utils/estatisticasJogadores";

export default function Estatisticas() {

  const jogos = load("jogos", []);

  const ranking = calcularEstatisticasJogadores(jogos);

  return (
    <div className="pagina">

      <h1>📊 Estatísticas</h1>

      <table>

        <thead>
          <tr>
            <th>Jogador</th>
            <th>Jogos</th>
            <th>Gols</th>
          </tr>
        </thead>

        <tbody>

          {ranking.map((jogador) => (

            <tr key={jogador.nome}>
              <td>{jogador.nome}</td>
              <td>{jogador.jogos}</td>
              <td>{jogador.gols}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
