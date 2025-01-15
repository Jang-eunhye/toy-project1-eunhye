import { initMyPage } from "./mypage.js";

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const pageName = link.textContent;
      switch(pageName) {
        case '마이페이지':
          initMyPage();
          break;
        case '홈':
          initHome();
          break;
        // 다른 페이지들도 여기에 추가 가능
        // case '근태관리':
        //   initAttendance();
        //   break;
      }
    });
  });
}

export function initHome() {
  // 홈 페이지 HTML 렌더링
  document.querySelector("#app").innerHTML = `
    <body>
      <header></header>
      <div class="sidebar">
        <nav>
          <ul class="nav-menu">
            <li><a href="#">홈</a></li>
            <li><a href="#">마이페이지</a></li>
            <li><a href="#">근태관리</a></li>
            <li><a href="#">설정</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <!-- 홈 페이지 컨텐츠 -->
      </main>
    </body>
  `;

  // 네비게이션 초기화
  initNavigation();
}
