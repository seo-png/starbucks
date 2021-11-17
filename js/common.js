const searchEl = document.querySelector('.search');
// 변수생성 EL = element의 약어 document라는 개체에서 querySelector라는 메소드 실행
//인수로 문자 데이터 형태로 css 선택자를 넣음 
//search라는 클래스의 css 선택자를 찾아서 searchEL이라는 변수에 값을 할당함 (넣음)
const searchInputEl = searchEl.querySelector('input');
// 이미 위에서 찾은 search 클래스를 다시 찾을 필요 없으므로 효율적으로 작성
// document도 하나의 html 요소라고 볼 수 있음


searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});
// searchEl이라는 변수 생성 안에 addEventListener라는 메소드 추가 
// => search라는 요소에 event를 추가하는 개념
//click 이라는 이벤트를 실행하면 (= search 요소를 클릭하면) fuction이라는 익명의 함수가 실행 되는데 
// 그건 바로 focus 이다. 

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색' );
});
//searchInputEl 변수 작성 , addEventListener 메소드 실행 'focus' 라는 이벤트 추가 
// => searchInputEl 부분이 focus 가 되면 두번째 인수로 작성한 익명의 함수(function)가 실행이 된다. (=핸들러)
// 무엇을 실행할지 함수로 들어가 로직 작성 
//classList => 특정 요소의 클래스 정보를 가지고 있는 객체에서 (add메소드 실행)어떤 클래스 내용을 추가하겠다 
// 그렇게 추가할 클래스 이름은 'focused' (=> 포커스가 된 상태를 의미 ) (Css에서 제어 가능하게 하기 위함)
//setAttribute 메소드 실행 => searchInputEl 에다가 어떤 html 속성을 지정할 때 사용 
// 그렇게 사용할 속성 첫번째 문자 데이터 형태로 'placeholder'라는 인풋요소의 html 속성
// 두번째 힌트 내용은 값으로 문자 데이터 '통합검색' 추가  

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '' );
});
//blur => 인풋 요소에 focus가 해제될 때 를 의미함. 
//remove => (focus가 해제되면) focused 라는 클래스를 제거 
// placeholder => 비어있는 상태가 되어야 하므로 빈 문자열


//FOOTER 부분에 날짜부분이 매 년도에 맞게 해줌.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021