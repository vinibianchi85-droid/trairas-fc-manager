import { load } from "../utils/storage";
import { tabela } from "../utils/campeonato";

export default function Dashboard() {

  const jogos = load("jogos", []);
  const dados = tabela(jogos);

  return (
    <div className="pagina">

      <h1>📈 Dashboard</h1>

      <div className="card">
        <h3>Pontos</h3>
        <h2>{dados.pontos}</h2>
      </div>

      <div className="card">
        <h3>Vitórias</h3>
        <h2>{dados.vitorias}</h2>
      </div>

      <div className="card">
        <h3>Saldo de Gols</h3>
        <h2>{dados.saldo}</h2>
      </div>

      <div className="card">
        <h3>Jogos</h3>
        <h2>{dados.jogos}</h2>
      </div>

    </div>
  );
}
