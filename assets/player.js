import MediaPlayer from "/assets/media.js";
import AutoPLay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const playButton = document.querySelector('#play');
const muteButton = document.querySelector('#mute');
const bunny = {
    el: video,
    plugins: [
        new AutoPLay()
    ]
};
const player = new MediaPlayer(bunny);

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();