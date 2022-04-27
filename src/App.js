import Topbar from './top/topbar/Topbar';
import Home from './main/home/Home';
import About from './pages/about/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <Topbar />
    <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/about/*" element={<About />} />  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
