import {useState} from 'react';
import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Elenco from './pages/Elenco';
import Estatisticas from './pages/Estatisticas';
import Campeonato from './pages/Campeonato';
import Admin from './pages/Admin';
import './style.css';
export default function App(){
 const [p,setP]=useState('home');
 const map={home:<Home/>,jogos:<Jogos/>,elenco:<Elenco/>,estatisticas:<Estatisticas/>,campeonato:<Campeonato/>,admin:<Admin/>};
 return <div><nav><button onClick={()=>setP('home')}>Home</button><button onClick={()=>setP('jogos')}>Jogos</button><button onClick={()=>setP('elenco')}>Elenco</button><button onClick={()=>setP('estatisticas')}>Stats</button><button onClick={()=>setP('campeonato')}>Camp.</button><button onClick={()=>setP('admin')}>Admin</button></nav>{map[p]}</div>
}