import './about.css'

export default function About() {
  return (
    <div className="aboutMain flex row-gt-sm">
      <div class="aboutInfo">
      <div class="aboutImg">
        <img src="images/fort_me.jpg" alt="me" className="fortMe" />
      </div>
      <div class="aboutText">
        <h2> 자소서 제목 들어갈 칸</h2>
        <p class="text-detail">
          <div class="text-detail">
          자소서 제목이나 본문 텍스트 </div>
          <div class="text-detail">
           자소서.... 어떻게 써야 할지 막막하네요 개발자 취업자 자소서 훔쳐보고싶다</div>
           <div class="text-detail">이 포트폴리오 조금 더 열심히 수정해서 나중에 꼭 써먹을게요..</div>
           <br/>
           <div class="text-detail">
             다른 사람들은 to-do list 하던데 저는 무슨 부귀영화를 누리겠다고 이걸 시작했을까요..?</div>
           <div class="text-detail">
               여기까지 오기 정말 힘들었어여 쌤... 이건 안읽어주셨으면 좋겠다 화면 채우려고 쓰긴 하는데 쪽팔리네요..</div>
           <div class="text-detail">
             쓰다보니 한글입숨 있는데 또 제가 왜 이러고 있을까요ㅠ 머리가 나쁘면 손발이 고생한다더니</div>
             <br/>
             <div class="text-detail">
             앞길이 정말 막막하지만... 그래도 열심히 끝까지 해보려고요..</div>
           <div class="text-detail">
               열심히 만들어 놓으면 완성했을때 분명히 뿌듯할거야...</div>
           <div class="text-detail">
             이제 어바웃인데 컨택트까지 어떻게 가지...</div>
          </p>
      </div>
      </div>
    </div>
  )
}
