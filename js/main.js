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
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});