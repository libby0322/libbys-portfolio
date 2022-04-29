import './topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {
    const user = false;  
  return (
   <div className="top">
    <h1 className="toplogo">
    Libby's Portfolio
    </h1>
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="Homelink">Home</Link></li>
                <li className="topListItem"><Link to="/about">About</Link></li>
                <li className="topListItem"><Link to="/portfolio">Portfolio</Link></li>
                <li className="topListItem"><Link to="/contact">Contact</Link></li>
                
            </ul>

    </div>
    
  )
}
