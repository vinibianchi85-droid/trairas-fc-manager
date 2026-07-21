import jogadores from "../data/jogadores";
import partidas from "../data/partidas";

import Card from "../components/Card";
import { calcularDashboard } from "../utils/dashboard";

export default function Dashboard() {
  const dados = calcularDashboard(jogadores, partidas);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20
        }}
      >
        <Card title="👥 Jogadores">
          <h2>{dados.totalJogadores}</h2>
        </Card>

        <Card title="⚽ Partidas">
          <h2>{dados.totalPartidas}</h2>
        </Card>

        <Card title="🥅 Gols">
          <h2>{dados.totalGols}</h2>
        </Card>

        <Card title="🎯 Assistências">
          <h2>{dados.totalAssistencias}</h2>
        </Card>

        <Card title="🏆 Artilheiro">
          <h3>
            {dados.artilheiro
              ? `${dados.artilheiro.nome} (${dados.artilheiro.gols})`
              : "--"}
          </h3>
        </Card>

        <Card title="🎖 Garçom">
          <h3>
            {dados.garcom
              ? `${dados.garcom.nome} (${dados.garcom.assistencias})`
              : "--"}
          </h3>
        </Card>
      </div>
    </div>
  );
}
