const video = {};
video.wrapper = document.querySelector('.video-block__video');
video.poster = video.wrapper.querySelector('.video-block__preview');
video.video = document.querySelector('#video');
video.button = document.querySelector('#video-button');

const initVideo = (element) => {

  const startVideo = (evt) => {

    element.wrapper.classList.add('video-block__video--is-playable');
    element.button.style.display = 'none';
    if (element.poster.parentNode) {
      element.poster.parentNode.removeChild(element.poster);
    }
    element.video.play();
  }

  function pauseVideo() {
    element.wrapper.classList.remove('video-block__video--is-playable');
    element.button.style.display = '';
  }

  element.video.addEventListener('pause', pauseVideo);

  element.video.addEventListener('play', startVideo);

  element.button.addEventListener('click', startVideo);
}

initVideo(video);
