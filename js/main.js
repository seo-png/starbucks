const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//badgeEL 변수 지정, document 부분에 querySelector라는 메소드를 실행해 특정한 요소를 찾음,
//찾으려고 하는 선택자는 header 안의 badges라는 요소  => 요소를 하나 찾아둠


window.addEventListener('scroll', _.throttle (function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    //배지 보이기 
    gsap.to(badgeEL, .6, {
      opacity: 1, 
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//window => 하나의 브라우저 창, 화면 자체 
//window 객체라는 것은 우리 프로젝트가 나오고 있는 화면 자체를 의미하며, 그 화면 자체에다가
//이벤트를 추가해서, 그 화면이 스크롤 되면 뒤 쪽에 있는 어떤 익명의 함수를 실행하겠다 라는 뜻 
//=> 스크롤 할 때 마다 콘솔창에 scroll! 이라는 문자가 입력 됨. 
// _.throttle(함수, 시간);
//300은 0.3초를 의미 => 수십개의 scroll 함수에 0.3초마다 부하를 줘서 함수가 마구 실행되는 것을 방지하려고 
//throttle라는 lodash 에서 제공하는 기능을 사용한 것. (lodash cdn 검색 html 복사 붙여넣기)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 //gsap 플러그인 연결 통해 사용함.
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
//fadeEls라는 변수 설정, document(html) 에서 querySelectorAll 전부 찾는 기능을 가진 메소드 실행 
//뒤쪽에 명시하는 선택자들을 전부 찾아서 fadeEls 라는 변수에 값을 할당하겠다
//첫번째 인수로 문자 데이터로 .visual의 후손 .fade-in을 모두 찾아 fadeEls에 값을 넣겠다.
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //첫번째 반복할 때 index의 값은 0, 그러므로 순차적으로 0.7, 1.4, 2.1, 2.7 시간을 가짐.
    opacity: 1
  });
});
//fadeEls에 forEach 라는 메소드를 붙여 html에서 찾은 fade-in 이라는 요소들의 갯수 만큼 
//forEach 라는 메소드 안에 인수로 적은 함수가 실행이 된다. 


//new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', //슬라이드
  autoplay: true, //자동재생
  loop: true //반복재생여부
});
//new => 생성자(클래스) 이를 통해서 자바스크립트에서 여러 객체들을 다룰 수 있음

new Swiper('.promotion .swiper', {
  //direction: 'horizontal', => horizontal은 기본값이기 때문에 따로 명시할 필요 없음 ! 
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수 slidesPerView의 기본값은 1
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //500은 0.5초 (=>밀리세컨즈), 5000은 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자 
    //(promotion의 후손인 swiper-pagination이라는 요소를 실제로 페이지 번호를 사용하는 그 요소로 사용하겠다)
    clickable: true, //사용자의 페이지 번호 요소 제어
    //(사용자가 이 페이지 요소를 단순히 시각적으로 보는 것만이 아닌, 눌러서 제어할 수 있는지의 여부)
  },
  navigation: {
    nextEl: '.promotion .swiper-button-next',  //다음 슬라이드 보는 버튼
    prevEl: '.promotion .swiper-button-prev', //이전 슬라이드 보는 버튼 
  }
});

new Swiper('.awards .swiper', {
  //direction: 'horizontal' => 수평이 기본값이므로 입력할 필요 없음.
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // ! => 값을 반대의 값으로 만듬. 
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide'); //자바스크립트에서 생성되고 지워지는 hide라는 클래스를 css에서 쉽게 제어할 수 있음
  }
});
//isHidePromotion 이 false 이면 !를 통해 true 값으로 다시 isHidePromotion에 값이 들어감 
//반대 상황도 마찬가지
//어떤 특정 변수의 값을 지속적으로 반대의 값으로 전환시켜줄 수 있는 코드


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션); => 자바스크립트 애니메이션 라이브러리 사용
  gsap.to(
    selector,   // 선택자
    random(1.5, 2.5),   // 애니메이션 동작 시간
    {  //옵션
      y: size,
      repeat: -1, //-1값은 "무한 반복"을 의미
      yoyo: true, //위에서 아래로 올라가는 애니메이션 할 경우, 반대로 아래에서 위로 올라가게 함(자연스러움)
      ease: Power1.easeInOut, //gsap easing 검색창에 쳐서 Easing-GreenSock 에서 나온 코드 가져오기!
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



//구글 검색창에 scrollMagic cdn 검색 => cdnjs.com > Libraries
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
    //중괄호 => 객체데이터
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
//spyEls에 forEach라는 메소드를 사용해서 각각의 요소들을 반복할 것이고, 반복될 때 실행할 함수를 지정해줄 수 있다.
//함수의 안으로 들어가서, spyEls => 각각의 반복되는 요소들을 가지고 무언가를 할 것인데,
//new라는 키워드를 사용하여 ScrollMagic이라는 자바스크립트 라이브러리를 실행 
//Scene이라는 것은 ScrollMagic이라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드.
//감시에 필요한 여러가지 옵션들을 Scene안에 넣어주면 됨.
//체이닝을 통해 (chaining) setClassToggle 이라는 메소드를 추가해줄 수 있음.
//setClassToggle=> 지정한다, 클래스를, 클래스를 넣었다 뺐다 제어할 수 있음
//addTo => ScrollMagic에 필요한 컨트롤러를 추가하기 위해 


