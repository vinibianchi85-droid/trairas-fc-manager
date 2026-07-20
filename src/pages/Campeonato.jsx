import { load } from "../utils/storage";
import { gerarClassificacao } from "../utils/classificacao";

export default function Campeonato() {

  const jogos = load("jogos", []);

  const tabela = gerarClassificacao(jogos);

  return (

    <div className="pagina">

      <h1>🏆 Campeonato</h1>

      <table>

        <thead>

          <tr>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
          </tr>

        </thead>

        <tbody>

          {tabela.map((time) => (

            <tr key={time.time}>

              <td>{time.time}</td>

              <td>{time.pontos}</td>

              <td>{time.jogos}</td>

              <td>{time.vitorias}</td>

              <td>{time.empates}</td>

              <td>{time.derrotas}</td>

              <td>{time.golsPro}</td>

              <td>{time.golsContra}</td>

              <td>{time.saldo}</td>

              <td>{time.aproveitamento}%</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}
