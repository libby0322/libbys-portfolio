import './home.css';

export default function Home() {
  return (
    <div className="home">
         <div className="homeTitles">
             <span className="homeTitleSm">끊임없이 발전하는 개발자, 임리비입니다.</span>
             <span className="homeTitleLg">노력은 결과를 낳아야 합니다. 그 결과가 저의 가치를 판단하며 제 노력을 빛내주기 때문이라 생각합니다. 끊임없이 발전하며 결과로 보여드리겠습니다. </span>
         </div>
         <img className="homeImg" 
              src="images/star.jpg" alt="mainimg" />
    </div>
  )
}
