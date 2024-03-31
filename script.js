const alphabet = {"a":"ALPHA","b":"BRAVO","c":"CHARLIE","d":"DELTA","e":"ECHO","f":"FOXTROT","g":"GOLF","h":"HOTEL","i":"INDIA","j":"JULIET","k":"KILO","l":"LIMA","m":"MIKE","n":"NOVEMBER","o":"OSCAR","p":"PAPA","q":"QUEBEC","r":"ROMEO","s":"SIERRA","t":"TANGO","u":"UNIFORM","v":"VICTOR","w":"WHISKEY","x":"X","y":"YANKEE","z":"ZULU","0":"ZERO","1":"WUN","2":"TOO","3":"TREE","4":"FOWer","5":"FIFE","6":"SIX","7":"SEVen","8":"AIT","9":"NINer"}

function row(i, c) {
  const r = alphabet[c] || c
  return '<tr><th scope="row">' + i + '</th><td>' + c + '</td><td>' + r + '</td></tr>'
  

 // setLetterSound(c);
      // runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
  
  
}

function changeEventHandler(event) {
  const tbody = document.getElementsByTagName('tbody')[0]
  tbody.innerHTML = ''
  for (let i = 0, l = event.target.value.length; i < l; i++) {
    tbody.innerHTML += row(i+1, event.target.value[i].toLowerCase())
  }
}

function loadEventHandler() {
  document.getElementsByTagName('input')[0].oninput = changeEventHandler
}

// https://plainjs.com/javascript/events/running-code-when-the-document-is-ready-15/
if (document.readyState !== 'loading') loadEventHandler()
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', loadEventHandler)



// Declaring stuff
  myName = ""; // declaring a variable for my easter egg
  audioPlayer = document.getElementsByTagName('audio')[0];

  // ------ Functions ------
  // Getting the letter sound and playing it.
  function setLetterSound(letterVariable) {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = 'https://cdn.jsdelivr.net/gh/linuxguist/files@main/natoii/' + letterVariable +'.mp3';
    oggSource.src = 'https://cdn.jsdelivr.net/gh/linuxguist/files@main/natoii/' + letterVariable +'.ogg';
  }

  function setGenericSound() {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = 'https://cdn.jsdelivr.net/gh/linuxguist/files@main/like-glass.mp3';
    oggSource.src = 'https://cdn.jsdelivr.net/gh/linuxguist/files@main/like-glass.ogg';
  }

  // Generating a new element to restart the CSS3 animation.
  function generateNewElement() {
    var elm = document.getElementById('big-char');
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
  }

  // Running the HTML5 audio player
  function runAudioPlayer() {
    audioPlayer.load(); // pre loading the audi file
    // audioPlayer.currentTime = 0; // start the audio from the beginning
    audioPlayer.play(); // play the audio
  }

  // Show and hide the about
  // document.getElementById('hide-button').onclick = function() {
   // document.getElementById('about-cont').style.display = "none";
  // }
  /*
  document.getElementById('about-button').onclick = function() {
    document.getElementById('about-cont').style.display = "block";
  }
*/
  
  // On mobile, when the user taps on "Show Keyboard" move the focus to the hidden input
  /*
  document.getElementById('show-keyboard-button').onclick = function() {
    document.getElementById('mobile-text-input').focus();
  }
  */

  document.onkeypress = function(event){ // Do stuff when you press any key in the document

    letterOnScreen = document.getElementById('big-char'); // get the element properties
    console.log(event.charCode);
    if ( // if use pressed on any of these characters which are not numbers or letters
      event.charCode === 13||
      event.charCode === 32||
      event.charCode === 92||
      event.charCode === 96||
      event.charCode === 61||
      event.charCode === 43||
      event.charCode === 45||
      event.charCode === 33||
      event.charCode === 64||
      event.charCode === 35||
      event.charCode === 36||
      event.charCode === 37||
      event.charCode === 94||
      event.charCode === 38||
      event.charCode === 42||
      event.charCode === 40||
      event.charCode === 41||
      event.charCode === 95||
      event.charCode === 91||
      event.charCode === 93||
      event.charCode === 34||
      event.charCode === 39||
      event.charCode === 47||
      event.charCode === 63||
      event.charCode === 62||
      event.charCode === 44||
      event.charCode === 60||
      event.charCode === 46||
      event.charCode === 59||
      event.charCode === 58||
      event.charCode === 123||
      event.charCode === 124||
      event.charCode === 125||
      event.charCode === 126
      ) {
      
      if (event.charCode === 13) { // getting the Enter key
        // letterOnScreen.innerHTML = "Enter";
        changeEventHandler();
        // alert('hi');
      } else if (event.charCode === 32) {
        // changeEventHandler();
        // letterOnScreen.innerHTML = "Space";
      } else {
        letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
      }
      setGenericSound(); // Set the generic sound in the resources of the audio tag
      runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
      changeEventHandler();
    } else {
      // letterOnScreen.innerHTML = String.fromCharCode(event.charCode); // getting the pressed character
      // pressedLetter = String.fromCharCode(event.charCode).toLowerCase(); // passing the pressed letter to the function to add it to sources
      setLetterSound(String.fromCharCode(event.charCode));
      runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
      changeEventHandler();
    }

    // An easter egg, if you type my name
    myName += String.fromCharCode(event.charCode);
    console.log(myName);
    if (myName==="mahdi") {
      alert('You typed my name!\n--------------------------------\nNow I will show you my website.');
      window.open('http://mahdif.com','_blank');
    }

  }

/*
  // Mute button
  document.getElementById('mute-button').onclick = function() {
    if (audioPlayer.muted === false) {
      audioPlayer.muted = true;
      document.getElementById('mute-button').innerHTML = "Unmute Sounds";
    } else {
      audioPlayer.muted = false;
      document.getElementById('mute-button').innerHTML = "Mute Sounds";
    }
  }
*/

//load page with cursor in input field (focus)
$(document).ready(function(){
    document.getElementById("big-char").focus();
});