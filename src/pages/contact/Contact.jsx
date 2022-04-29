import './contact.css'

export default function Contact() {
  return (
    <div class="contactwrap">
        <div class="wrapper">
        <h1 class="contact-title">Contact</h1>
        <div class="contactBox">
        <div class="contactBox-left">
            <img class="contactme" alt="contactme" src="images/me.jpg"></img>
            <div class="contactBox-body">
                <h3 class="conhead">안녕하세요! 신입 프론트엔드 개발자 임리비입니다!</h3>
            </div>
            <dl class="row">
                <dt class="col-sm-2"><i class="fa-solid fa-envelope"></i> Email</dt>
                <dd class="col-sm-10 content-text">
                    <p class="context1">
                        l_libby@naver.com
                    </p>
                </dd>
                <dt class="col-sm-2"> <i className="fa-brands fa-github"></i> GitHub</dt>
                <dd class="col-sm-10 content-text">
                <p class="context2">
                    https://github.com/l_libby0322
                    </p>
                </dd>
                <dt class="col-sm-2"> <i class="fa-solid fa-mobile-screen-button"></i> Phone</dt>
                <dd class="col-sm-10 content-text">
                <p class="context3">
                    010-2477-2739
                    </p>
                </dd>
            </dl>
        </div>
        </div>
        </div>
        <p class="endtext">2022 Libby Lim - All rights reserved
        <br />
        본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.
        </p>
    </div>
  )
}
