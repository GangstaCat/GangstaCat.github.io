let unocard = false;

function loadSP() {
    if (getCookie("yes") == "yea") {
        unocard = true;
        console.log("yea");
        yes();
        window.scrollTo(0, 5000);
    }
}

function yes() {
    let element = document.getElementById("yes");
    element.style.display = "initial";
    if (!unocard) {
        element.muted = false;
    }

    element.play();

    element.addEventListener('pause', function () {
        console.log("pause");
        if (!unocard) {
            console.log("uno");
            setCookie("yes", "yea");
        }
        element.play();
    });

    element.addEventListener('volumechange', function () {
        element.volume = 100;
    });

    setInterval(() => {
        if (element.muted) {
            if (!unocard) {
                element.muted = false;
            }
        }
    }, 10);

    element.scrollIntoView(true);

    launchIntoFullscreen(element);

    let ignore = true;
    setTimeout(() => {
        ignore = false;
    }, 150);

    addEventListener('fullscreenchange', event => {
        if (!unocard && !ignore) {
            setCookie("yes", "yea");
        }
        launchIntoFullscreen(element);
    });
}

function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        element.classList.toggle('fullscreen');
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    const d = new Date();
    d.setMinutes(d.getMinutes() + 1);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}