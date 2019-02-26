window.addEventListener("keydown", function(e) {
    if([81, 87, 37, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
