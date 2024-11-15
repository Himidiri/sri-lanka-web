const videos = document.getElementsByClassName("video");
const playButtons = document.getElementsByClassName("play-btn");

for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const playButton = playButtons[i];

    // Play/Pause when play button clicked
    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.innerHTML = "| |";
            playButton.style.padding = "1.3em";
        } else {
            video.pause();
            playButton.innerHTML = "▶";
            playButton.style.padding = "1.3em 1.2em 1.3em 1.4em";
        }
    });

    // Play/Pause when the video background clicked
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.innerHTML = "| |";
            playButton.style.padding = "1.3em";
        } else {
            video.pause();
            playButton.innerHTML = "▶";
            playButton.style.padding = "1.3em 1.2em 1.3em 1.4em";
        }
    });

    // Hide play button when video playing and mouse leaves the video
    video.addEventListener("mouseout", function () {
        if (!video.paused) {
            playButton.style.display = "none";
        }
    });

    // Show play button when mouse over the video
    video.addEventListener("mouseover", function () {
        playButton.style.display = "flex";
    });

    // Reset play button when video ends
    video.addEventListener("ended", function () {
        playButton.style.display = "flex";
        playButton.innerHTML = "▶";
        playButton.style.padding = "1.3em 1.2em 1.3em 1.4em";
    });
}
