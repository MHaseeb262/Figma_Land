const paragraph = document.getElementsByClassName('rewrite');
const para_len = paragraph.length;

if (window.innerWidth <= 599) {
    for (let i = 0; i < para_len; i++) {
        paragraph[i].textContent = "Most calendars are designed for teams.";

    }
}