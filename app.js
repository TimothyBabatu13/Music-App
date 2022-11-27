let control = 0;
let musicInfo = {
  "link": ["Juice WRLD - BAD ENERGY.mp3", "Juice WRLD - Run.mp3", "Juice WRLD - Wishing Well.mp3", "Juice_WRLD - Fighting_Demons.mp3", "Juice-WRLD-Graduation.mp3"],
  "images": ["bad energy.jpg", "run.jpg", "wishing-well.jpg", "fighting-demons.jpg", "graduation.jpg"]
};
 
let player = document.querySelector('audio');

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById("previous");
let playBtn = document.getElementById("play");
let songBanner = document.getElementById("song-banner");
let artistNamme = document.getElementById("artist-name");
function setAttribute(){
  player.setAttribute("src", musicInfo.link[control]);
  songBanner.setAttribute("src", musicInfo.images[control]);
}
function addClass(){
  playBtn.classList.add("pause");
}

function play(){
  playBtn.onclick = ()=>{
    player.play();
    playBtn.classList.toggle("pause");
    if(playBtn.className == "pause"){
      player.play();
    }
    else{
      player.pause();
    }
  }
}

function ifNext(){
  if(control == musicInfo.link.length){
      control = 0;
    }
}
function next(){
  nextBtn.onclick = ()=>{
    control++;
    ifNext();
    addClass();
    artistInformtion();
    setAttribute();
    player.play();
  }
}
function prev(){
  prevBtn.onclick = ()=>{
    control--;
   if(control < 0){
      control = musicInfo.link.length-1;
   }
   addClass();
   artistInformtion();
   setAttribute();
   player.play();
    }
  }
  
  function indexFull(stri){
    return musicInfo.link[control].indexOf(stri);
  }
  function artistInformtion(){
  let songName=  document.getElementById("song-name");
  let index = indexFull("-");
  let fullStop = indexFull(".");
 
  artistNamme.innerHTML = musicInfo.link[control].slice(0, index);
  
  songName.innerHTML = musicInfo.link[control].slice(0, fullStop);
  }
  
  
function repeat(){
  let repeatControl = 0;
  let simpleLoop = document.getElementById("first-loop");
  
  simpleLoop.onclick = ()=>{
    repeatControl++;
    simpleLoop.classList.toggle("repeat");
    if(repeatControl == 2){
      repeatControl =0;
    }
    if(repeatControl == 1){
      document.querySelector("audio").loop = true;
    }
    else{
      document.querySelector("audio").loop = false;
    }
  }
  }

function ended(){
  player.addEventListener("ended", function(){
     player.currentTime = 0;
     control++;
     ifNext();
     setAttribute();
     artistInformtion();
     player.play();
});
}

function favourite (){
  let icon = document.querySelector("#love");
  
  icon.onclick = ()=>{
    icon.classList.toggle("love");
  }
}
function main(){
  play();
  next();
  prev();
  artistInformtion();
  setAttribute();
  repeat();
  ended();
  favourite();
}
main()
