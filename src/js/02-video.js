import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const stopTime = localStorage.getItem('videoplayer-current-time');

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.setCurrentTime(stopTime ? stopTime : 0)
player.on('timeupdate', throttle(onPlay, 1000));



