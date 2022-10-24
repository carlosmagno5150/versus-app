import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Home from './pages/Home';
import Partida from './pages/Partida';
import Partidas from './pages/Partidas';

function App() {
  return (
    <div className="">
      <BrowserRouter>                
        <Menu />
        <br/><br/><br/><br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partidas" element={<Partidas />} />
          <Route path="/partida/:id" element={<Partida />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
