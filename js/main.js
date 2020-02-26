let scrollButton = document.getElementById("buttonRound");

function topFunction() {
    window.scrollTo(0,0);
}

var scene = document.getElementById('scene');
var parallaxInstance = new parallaxInstance(scene, {relativeInput: true});

parallaxInstance.hoverOnly(true);