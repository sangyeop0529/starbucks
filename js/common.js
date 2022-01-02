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


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 현재년도