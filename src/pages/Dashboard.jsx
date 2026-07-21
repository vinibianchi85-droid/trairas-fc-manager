import Card from "../components/Card";
import { colors } from "../styles/theme";

export default function Dashboard() {

  return (

    <div
      style={{
        padding:20,
        background:colors.background,
        minHeight:"100vh"
      }}
    >

      <h1
        style={{
          color:colors.primary,
          marginBottom:25
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:20
        }}
      >

        <Card title="👥 Jogadores">
          <h2>0</h2>
          <small>Jogadores cadastrados</small>
        </Card>

        <Card title="⚽ Partidas">
          <h2>0</h2>
          <small>Partidas disputadas</small>
        </Card>

        <Card title="🥅 Gols">
          <h2>0</h2>
          <small>Total de gols</small>
        </Card>

        <Card title="🏆 Artilheiro">
          <h2>--</h2>
          <small>A definir</small>
        </Card>

      </div>

      <div
        style={{
          marginTop:30
        }}
      >

        <Card title="Resumo">

          <p>
            Aqui aparecerão automaticamente:
          </p>

          <ul>

            <li>Artilharia</li>

            <li>Assistências</li>

            <li>Cartões</li>

            <li>Média de gols</li>

            <li>Últimos jogos</li>

            <li>Ranking dos atletas</li>

          </ul>

        </Card>

      </div>

    </div>

  );

}
