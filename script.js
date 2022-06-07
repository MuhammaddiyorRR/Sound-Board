const sounds = ["alarm", "keyboard", "bonus"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopounds();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
