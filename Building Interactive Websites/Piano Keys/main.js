// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(element) {
  element.target.style.backgroundColor = 'blue';
}

function keyReturn(element) {
  element.target.style.backgroundColor = '';
}
// Write a named function with event handler properties
function eventAssignment(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  let note5 = document.getElementById('letter-note-five');
  note5.innerHTML = 'D';
  let note6 = document.getElementById('letter-note-six');
  note6.innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  let word5 = document.getElementById('word-five');
  word5.innerHTML = 'DEAR';
  let word6 = document.getElementById('word-six');
  word6.innerHTML = "FRI-";
  lastLyric.style.display = 'inline-block';

  let note3 = document.getElementById('letter-note-three');
  note3.innerHTML = 'G';

  let note4 = document.getElementById('letter-note-four');
  note4.innerHTML = 'E';

  let note5 = document.getElementById('letter-note-five');
  note5.innerHTML = 'C';

  let note6 = document.getElementById('letter-note-six');
  note6.innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;

  let word1 = document.getElementById('word-one');
  word1.innerHTML = 'HAP-';

  let word2 = document.getElementById('word-two');
  word2.innerHTML = 'PY';

  let word3 = document.getElementById('word-three');
  word3.innerHTML = 'BIRTH';

  let word4 = document.getElementById('word-four');
  word4.innerHTML = 'DAY';

  let word5 = document.getElementById('word-five');
  word5.innerHTML = 'TO';

  let word6 = document.getElementById('word-six');
  word6.innerHTML = 'YOU!';

  let letter1 = document.getElementById('letter-note-one');
  letter1.innerHTML = 'F';

  let letter2 = document.getElementById('letter-note-two');
  letter2.innerHTML = 'F';

  let letter3 = document.getElementById('letter-note-three');
  letter3.innerHTML = 'E';

  let letter4 = document.getElementById('letter-note-four');
  letter4.innerHTML = 'C';

  let letter5 = document.getElementById('letter-note-five');
  letter1.innerHTML = 'D';

  let letter6 = document.getElementById('letter-note-six');
  letter6.innerHTML = 'C';

  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
