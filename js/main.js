const searchEl = document.querySelector('.search');//document는 HTML자체로 봐도 무방하다
//const searchInputEl = document.querySelector('.search input')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');//클래스를 추가
  searchInputEl.setAttribute('placeholder', '통합검색');//속성을 추가
});

searchInputEl.addEventListener('blur', function() {//blur : focus의 반대
  searchEl.classList.remove('focused');//클래스를 제거
  searchInputEl.setAttribute('placeholder', '');//속성을 추가
});


const badgeEl = document.querySelector('header .badges');
// window : 브라우저 창(화면 자체)
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // hide badge
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));//300ms
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션(객체));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 1.4 2.1 2.7...
    opacity: 1,
  });
});

// new Swiper(선택자, {옵션})
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 처음에는 보여지고 있다.
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  // 반대값 false => true
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //  숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처림!
    promotionEl.classList.remove('hide');
  }
});