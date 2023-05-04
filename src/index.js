var player;
var loggedIn = false;

let loginTriggerButton = document.querySelector("#login-trigger-button");
let loginButton = document.querySelector("#login-btn");
let logoutButton = document.querySelector("#logout-btn");
let editButtons = document.querySelectorAll(".edit");
let deleteButtons = document.querySelectorAll(".delete");

/* function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: "450",
        height: "530",
        videoId: 'DnewVhYNt-I',
        playerVars: {
            autoplay: '1',
            controls: '0',
            wmode: 'opaque',
            mute: '1'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
} */

function onPlayerReady(event) {
    player.setVolume(10);
    player.playVideo();
    player.unMute();
}

function handleAccordions() {
    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("is-open");
            let content = this.nextElementSibling;
            console.log(content);

            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = "8vw";
                console.log(content.style.maxHeight);
            }
        };
    });
}

function scrolltoId(id) {
    var bwidth = window.innerWidth;
    var percent = 0.027;
    var wpercent = bwidth * percent;

    var access = document.getElementById(id);
    const offsetPosition = access.offsetTop - wpercent

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/*CURTAINS*/
function setupCourtains() {
    const open_string = document.querySelector('#open_string')
    const left_side = document.querySelector('#left_side')
    const right_side = document.querySelector('#right_side')
    const container = document.getElementById("about-container");

    open_string.addEventListener('touchmove', function (event) {
        event.preventDefault();
        var touch = event.touches[0].clientY;
        if (touch < 5) {
            touch = 5
        }
        var touch_perc = (touch / container.clientHeight) * 100
        if (touch_perc > 80) {
            touch_perc = 80
        }

        left_side.style.transform = 'translateX(' + ((-1) * (touch_perc - 5)) + '%)'
        right_side.style.transform = 'translateX(' + (touch_perc - 5) + '%)'
        open_string.style.top = touch_perc + '%'
    }, false);

    dragElement(open_string);
    function dragElement(elmnt) {
        var dist = window.innerHeight * .8
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
            elmnt.classList.toggle('grabbing')
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            pos2 = pos4 - e.clientY;
            pos4 = e.clientY;
            // set the element's new position:
            var newY = elmnt.offsetTop - pos2 
            var perc = (newY / container.clientHeight) * 100
            if (perc < 5) {
                perc = 5
            }
            if (perc > 35) {
                perc = 35
            }
            elmnt.style.top = perc + '%'
            console.log("elementDrag: "+perc);
            left_side.style.transform = 'translateX(' + ((-1) * (perc - 5) * 2.5) + '%)'
            right_side.style.transform = 'translateX(' + ((perc - 5) * 2.5) + '%)'
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
            elmnt.classList.toggle('grabbing')
        }
    }
}
/*CURTAINS*/

/* Technology Filters */

function bindTechnology() {
    let tech01 = document.getElementById("tech-01");
    let tech02 = document.getElementById("tech-02");
    let tech03 = document.getElementById("tech-03");
    let tech04 = document.getElementById("tech-04");
    let tech05 = document.getElementById("tech-05");
    let tech06 = document.getElementById("tech-06");

    tech01.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".htmlcss");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

    tech02.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".js");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

    tech03.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".react");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

    tech04.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".angular");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

    tech05.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".ue05");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

    tech06.addEventListener("click", () => {
        var hideFiltersList = [];
        var showFiltersList = [];

        let projectFilters = document.getElementById("projects").querySelectorAll(".project-filters-list")
        projectFilters.forEach((element) => {
            var foundChild = element.querySelector(".ai");
            if (!foundChild) {
                hideFiltersList.push(element);
            } else {
                showFiltersList.push(element);
            }
        })

        hideFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.add("hidden");
        })

        showFiltersList.forEach((element) => {
            var projectContainerClassList = element.parentNode.parentNode.parentNode.classList;
            projectContainerClassList.remove("hidden");
        })
    })

}

function bindLoginButton() {
    loginButton.addEventListener("click", () => {

        editButtons.forEach((button) => {
            button.classList.remove("hidden");
        });

        deleteButtons.forEach((button) => {
            button.classList.remove("hidden");
        });

        logoutButton.classList.remove("hidden");
        loginTriggerButton.classList.add("hidden");
    });


    logoutButton.addEventListener("click", () => {
        editButtons.forEach((button) => {
            button.classList.add("hidden");
        });

        deleteButtons.forEach((button) => {
            button.classList.add("hidden");
        });

        logoutButton.classList.add("hidden");
        loginTriggerButton.classList.remove("hidden");
    });
}

function start() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    handleAccordions();
    bindTechnology();
    setupCourtains();
    bindLoginButton();
}

document.addEventListener("DOMContentLoaded", start);


