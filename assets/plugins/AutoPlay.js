function AutoPLay() {}

AutoPLay.prototype.run = function (player) {
    player.mute();
    player.play()
};

export default AutoPLay