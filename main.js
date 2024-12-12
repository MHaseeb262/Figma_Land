const paragraph = document.getElementsByClassName('rewrite');
const para_len = paragraph.length;

if (window.innerWidth <= 599) {
    for (let i = 0; i < para_len; i++) {
        paragraph[i].textContent = "Most calendars are designed for teams.";

    }
}

let video = document.getElementById('myVideo');
let btn = document.getElementById('play_btn');
let btnIcon = document.getElementById('btnIcon');
let timeoutId;
let bool = 0;

btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.setAttribute("controls", "");
        btnIcon.src = "/Images/pause_btn.svg";
        hide_btn();

        // hovering on video     
        video.addEventListener('mouseenter', () => {
            show_btn();
            hide_btn();
        });

        video.addEventListener('mouseleave', () => {
            hide_btn();
        });
    } else {
        video.pause();
        video.removeAttribute('controls');
        btnIcon.src = "/Images/play_btn.svg";
    }
});



function show_btn() {
    btn.classList.remove('hidden');
}

function hide_btn() {
    setTimeout(() => {
        btn.classList.add('hidden');
    }, 2500);
}