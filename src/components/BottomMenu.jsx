import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";

import { colors } from "../styles/theme";

export default function BottomMenu() {
  const menu = [
    {
      rota: "/",
      texto: "Home",
      icone: <Home size={22} />,
    },
    {
      rota: "/elenco",
      texto: "Elenco",
      icone: <Users size={22} />,
    },
    {
      rota: "/jogos",
      texto: "Jogos",
      icone: <CalendarDays size={22} />,
    },
    {
      rota: "/dashboard",
      texto: "Dashboard",
      icone: <BarChart3 size={22} />,
    },
    {
      rota: "/admin",
      texto: "Admin",
      icone: <Settings size={22} />,
    },
  ];

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        background: colors.primary,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -3px 10px rgba(0,0,0,.3)",
      }}
    >
      {menu.map((item) => (
        <NavLink
          key={item.rota}
          to={item.rota}
          style={({ isActive }) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            fontSize: 12,
            color: isActive ? colors.accent : colors.white,
          })}
        >
          {item.icone}
          {item.texto}
        </NavLink>
      ))}
    </footer>
  );
}
