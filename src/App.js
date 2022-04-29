import Topbar from './top/topbar/Topbar';
import Home from './main/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
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
    <Route path="/portfolio/*" element={<Portfolio />} /> 
    <Route path="/contact/*" element={<Contact />} />   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
