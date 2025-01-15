// HTML 템플릿
function createMyPage() {
  return `
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

    <main class="wrapper">
      <div class="grid-item section profile-section modal-trigger">
        <p class="section-title">프로필</p>
      </div>

      <div class="grid-item section time-management-section">
        <div class="current-time">
          <p>현재시각</p>
          <p class="current-time-value">--:--</p>
        </div>
        <ul class="work-time-list">
          <li class="work-time-item">
            <p class="time-label">근무 시작</p>
            <p class="time-value">-</p>
          </li>
          <li class="work-time-item">
            <p class="time-label">근무 종료</p>
            <p class="time-value">-</p>
          </li>
        </ul>
        <button class="modal-trigger btn work-btn" id="work-btn">
          <p>근무 시작</p>
        </button>
      </div>

      <div class="grid-item section attendance-section">
        <div class="attendance-list-section modal-trigger">
         <p class="section-title">근태 내역</p>
          <div class="attendance-header">
            <div class="header-item title">제목</div>
            <div class="header-item type">종류</div>
            <div class="header-item date">일자</div>
            <div class="header-item writer">작성자</div>
          </div>
          <div class="attendance-list">
            <div class="attendance-item">
              <div class="profile-circle"></div>
              <div class="item-content title">연차 신청합니다</div>
              <div class="item-content type">연차</div>
              <div class="item-content date">1/10</div>
              <div class="item-content writer">장은혜</div>
            </div>
          </div>
        </div>
        <button class="add-attendance-btn btn modal-trigger">
          <p>+</p>
        </button>
      </div>
    </main>

    <div class="modal profile-modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>프로필 정보</h2>
      </div>
    </div>

    <div class="modal work-btn-modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>근무 시작</h2>
      </div>
    </div>

    <div class="modal attendance-modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>근태 내역</h2>
      </div>
    </div>

    <div class="modal add-attendance-btn-modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>근태신청</h2>
      </div>
    </div>
    </body>
  `;
}

// 모달 초기화 함수
function initModals() {
  const modals = {
    profile: {
      trigger: document.querySelector(".profile-section"),
      modal: document.querySelector(".profile-modal"),
    },
    workBtn: {
      trigger: document.querySelector("#work-btn"),
      modal: document.querySelector(".work-btn-modal"),
    },
    attendance: {
      trigger: document.querySelector(".attendance-list-section"),
      modal: document.querySelector(".attendance-modal"),
    },
    addAttendance: {
      trigger: document.querySelector(".add-attendance-btn"),
      modal: document.querySelector(".add-attendance-btn-modal"),
    },
  };

  Object.values(modals).forEach(({ trigger, modal }) => {
    if (!trigger || !modal) return;

    const closeBtn = modal.querySelector(".close");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  });
}

// 시간 업데이트 함수
function initTimeUpdate() {
  const currentTimeElement = document.querySelector(".current-time-value");
  if (!currentTimeElement) return;

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// 메인 초기화 함수
export function initMyPage() {
  // HTML 렌더링
  document.querySelector("#app").innerHTML = createMyPage();

  // 기능 초기화
  initModals();
  initTimeUpdate();
}
