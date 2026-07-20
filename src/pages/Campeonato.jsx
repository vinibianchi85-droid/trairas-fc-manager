import { load } from "../utils/storage";
import { tabela } from "../utils/campeonato";

export default function Campeonato() {

  const jogos = load("jogos", []);

  const dados = tabela(jogos);

  return (
    <div className="pagina">

      <h1>🏆 Campeonato</h1>

      <div className="card">
        <p><strong>Pontos:</strong> {dados.pontos}</p>
        <p><strong>Jogos:</strong> {dados.jogos}</p>
        <p><strong>Vitórias:</strong> {dados.vitorias}</p>
        <p><strong>Empates:</strong> {dados.empates}</p>
        <p><strong>Derrotas:</strong> {dados.derrotas}</p>
        <p><strong>Gols Pró:</strong> {dados.golsPro}</p>
        <p><strong>Gols Contra:</strong> {dados.golsContra}</p>
        <p><strong>Saldo:</strong> {dados.saldo}</p>
      </div>

    </div>
  );
}
