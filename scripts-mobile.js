function header_toggled () {
    document.getElementById('header').classList.toggle('opened');
};

function introbox_cleared() {
    document.getElementById('introbox').classList.add('cleared');
    document.getElementById('audio').play();
};