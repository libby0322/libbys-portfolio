import './topbar.css'


export default function Topbar() {
    const user = false;  
  return (
   <div className="top">
    <h1 className="toplogo">
    Libby's Portfolio
    </h1>
            <ul className="topList">
                <li className="topListItem"><a href="#">Home</a></li>
                <li className="topListItem"><a href="#">About</a></li>
                <li className="topListItem"><a href="#">Skills</a></li>
                <li className="topListItem"><a href="#">Portfolio</a></li>
                <li className="topListItem"><a href="#">Contact</a></li>
            </ul>



    </div>
  )
}
