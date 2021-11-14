
//검색창에 youtube iframe api 검색 후 script 부분 복붙 후 수정

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

//onYouTubeIframeAPIReady 의 함수의 이름 같은 경우 맘대로 짓는 것이 아닌
//가지고 온 유튜브 라이브러리가 이 함수의 이름을 자체적으로 찾기 때문에 동일하게 해주어야함.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    //playerVars: 영상을 재생하기 위한 여러가지 변수들 
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록 
    },
    events: {
      onReady: function(event) {
        event.target.mute() //음소거
      }
      //events 라는 옵션을 넣고 onReady 라는 메소드 실행 익명의 함수 할당
      //동영상 플레이어가 준비(onReady)가 되면 이 함수 (event)를 실행한다.
    }
    
  });
}



