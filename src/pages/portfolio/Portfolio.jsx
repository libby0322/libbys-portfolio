import './portfolio.css'

export default function Portfolio() {
  return (
    <div>
    <div class="projectBox">
        <div class="projectImgBox">
          <div class="project1">
            <img class="game" src="images/game.png" alt="game"></img>
        </div>
        <div class="projectTextBox">
          <span class="titleName">가위바위보 게임</span>
          <p>제이쿼리를 이용한 모바일 앱입니다.</p>
          <p>'기록보기' 버튼을 누르면 승률이 계산되어 표시됩니다.</p>
          <span class="github">
          <i className="fa-brands fa-github"></i>
          <a className="github-text" href="#" >GitGub Repo</a>
          </span>
        </div>
        </div>  
    </div>
    <div class="projectBox">
        <div class="projectImgBox">
          <div class="project2">
            <img class="moonbucks" src="images/Moonbucks.png" alt="moonbucks"></img>
        </div>
        <div class="projectTextBox">
          <span class="titleName">스타벅스 코리아 랜딩 페이지</span>
          <p>포트폴리오용으로 제작한 웹 페이지입니다.</p>
          <p>반응형 웹페이지 입니다.</p>
          <span class="github">
          <i className="fa-brands fa-github"></i>
          <a className="github-text" href="#" >GitGub Repo</a>
          </span>
        </div>
        </div>  
    </div>
    <div class="projectBox">
        <div class="projectImgBox">
          <div class="project3">
            <img class="doum" src="images/doum.png" alt="doum"></img>
        </div>
        <div class="projectTextBox">
          <span class="titleName">다음 카페 랜딩 페이지</span>
          <p>포트폴리오용으로 제작한 웹 페이지입니다.</p>
          <p>반응형 웹페이지 입니다.</p>
          <span class="github">
          <i className="fa-brands fa-github"></i>
          <a className="github-text" href="#" >GitGub Repo</a>
          </span>
        </div>
        </div>  
    </div>

    </div>
  )
}
