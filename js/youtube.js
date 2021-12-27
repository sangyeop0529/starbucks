  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  // 함수 절대 바꾸면 안됨!!!!
  function onYouTubeIframeAPIReady() {
    //<div id="player"></div>
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
      playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        // 영상이 준비(onReady)가 되면 익명의 함수 실행
        onReady: function(e) {
          e.target.mute() // 음소거
        }
      }
    });
  }