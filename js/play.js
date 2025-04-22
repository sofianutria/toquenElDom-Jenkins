const keys = document.querySelectorAll('.key')
console.log(keys);
keys.forEach(key => {
  key.addEventListener("click", () => {
    const noteId = key.id;
    const sound = new Audio(`../assets/sounds/${noteId}.wav`); 
    sound.currentTime = 0;
    sound.play();
  });
});