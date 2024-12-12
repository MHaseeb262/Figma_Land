// In mobile screen txt will change
const paragraph = document.getElementsByClassName('rewrite');
const para_len = paragraph.length;

if (window.innerWidth <= 599) {
    for (let i = 0; i < para_len; i++) {
        paragraph[i].textContent = "Most calendars are designed for teams.";

    }
}

// Function to heandle hover effect
function handleHover(element, hoverSrc, defaultSrc) {
    element.addEventListener('mouseenter', ()=>{
        element.src = hoverSrc;
    });
    
    element.addEventListener('mouseleave', ()=>{
        element.src = defaultSrc;
    });
}

const icons = [
    {id:"nav_twitter_icon", hoverEffect:"/Images/twitterBlue.svg", defaultSrc:"/Images/twitterWhite.svg"},
    {id:"nav_faceBook_icon", hoverEffect:"/Images/faceBookB.svg", defaultSrc:"/Images/faceBookW.svg"},
    {id:"nav_linkedIn_icon", hoverEffect:"/Images/linkedInB.svg", defaultSrc:"/Images/linkedInW.svg"},
    {id:"foot_twitter_icon", hoverEffect:"/Images/twitterBlue.svg", defaultSrc:"/Images/twitterWhite.svg"},
    {id:"foot_faceBook_icon", hoverEffect:"/Images/faceBookB.svg", defaultSrc:"/Images/faceBookW.svg"},
    {id:"foot_linkedIn_icon", hoverEffect:"/Images/linkedInB.svg", defaultSrc:"/Images/linkedInW.svg"}
];

icons.forEach(({id, hoverEffect, defaultSrc})=>{
    const element = document.getElementById(id);

    if(element){
        handleHover(element, hoverEffect, defaultSrc);
    }
});

// For feature section vedio
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