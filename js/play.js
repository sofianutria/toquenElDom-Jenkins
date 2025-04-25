const keys = document.querySelectorAll('.key')
const keyLetter = { q: 'C1', w: 'C-1', e: 'D1', r: 'D-1', t: 'E1', y: 'F1', u: 'F-1', i: 'G1', o: 'G-1', p: 'A1', a: 'A-1', s: 'B1', d: 'C2', f: 'C-2', g: 'D2', h: 'D-2', j: 'E2', k: 'F2', l: 'F-2', z: 'G2', x: 'G-2', c: 'A2', v: 'A-2', b: 'B2', n: 'C3' }
keys.forEach(key => {
  key.addEventListener("click", () => {
    const noteId = key.id;
    soundPlay(noteId);
  });
});
document.addEventListener("keydown", (event) => {
  const noteId = keyLetter[event.key.toLowerCase()];
  if (noteId) {
    soundPlay(noteId);
  }
});
function soundPlay(noteId) {
  const sound = new Audio(`../assets/sounds/${noteId}.wav`);
  sound.currentTime = 0;
  sound.play();

  const keyElement = document.getElementById(noteId);
  if (keyElement) {
  keyElement.classList.add('active');

  setTimeout(() => {
    keyElement.classList.remove('active');
  }, 200); 
}}
