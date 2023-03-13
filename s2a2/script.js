const playButtonDay = document.getElementById("playButtonDay");
const audioPlayerDay = document.getElementById("audioPlayerDay");
const playButtonNight = document.getElementById("playButtonNight");
const audioPlayerNight = document.getElementById("audioPlayerNight");

playButtonDay.addEventListener("click", () => {
    if (audioPlayerDay.paused) {
        audioPlayerDay.play();
        playButtonDay.textContent = "Pause";
    } else {
        audioPlayerDay.pause();
        playButtonDay.textContent = "Play";
    }
});

playButtonNight.addEventListener("click", () => {
    if (audioPlayerNight.paused) {
        audioPlayerNight.play();
        playButtonNight.textContent = "Pause";
    } else {
        audioPlayerNight.pause();
        playButtonNight.textContent = "Play";
    }
});