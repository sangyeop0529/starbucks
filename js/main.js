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
const toTopEl = document.querySelector('#to-top');

// window : 브라우저 창(화면 자체)
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // hide badge
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
    // top 버튼 보이기
    gsap.to(toTopEl, .4, {
      opacity: 1,
      display: 'flex',
    });
  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    // top 버튼 숨기기
    gsap.to(toTopEl, .4, {
      opacity: 0,
      display: 'none'
    });
  }
}, 300));//300ms
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션(객체));

// gsap cdn scrolltoplugin 추가
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
})


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

new Swiper('.awards .swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션{})
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 자연스럽게
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic 
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 시작 : 0 끝 : 1 중간부분 : .5
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 현재년도