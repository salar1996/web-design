let songDetail = [
    {name: "Shabe Royaei", artist: "Garsha rezaei", src: "../media/Shabe Royaei(joyamusic).mp3", cover: "../media/covers/Shabe-Royaei.png"},
    {name: "Nashod Ke Nashod", artist: "Saman Jalili", src: "../media/Saman Jalili - Nashod Ke Nashod.mp3", cover: "../media/covers/Saman-Jalili---Nashod-Ke-Nashod.png"},
    {name: "Barandeh", artist: "Shadmehr Aghili", src: "../media/Shadmehr Aghili – Barandeh.mp3", cover: "../media/covers/Shadmehr-Aghili-–-Barandeh.png"},
    {name: "Ghalbe Man", artist: "Shadmehr Aghili", src: "../media/Shadmehr Aghili - Ghalbe Man.mp3", cover: "../media/covers/Shadmehr-Aghili---Ghalbe-Man.png"}
]


const $ = document;
const song = $.querySelector("audio");
const playIcon = $.querySelector(".fa-play").parentElement;
const pauseIcon = $.querySelector(".fa-pause").parentElement;
const nextIcon = $.querySelector(".fa-forward-fast").parentElement;
const prevIcon = $.querySelector(".fa-backward-fast").parentElement;
const currentTime = $.querySelector("#current-time");
const totalTime = $.querySelector("#total-time");
const timeLine = $.querySelector("#time-line");
const currentTileLine = $.querySelector("#time-line-show-time");
const musicTitle = $.querySelector("#music-name");
const artistName = $.querySelector("#singer");
const musicCover = $.querySelector("#image-holder");
const circleShowingTimeLine = $.querySelector("#circle-showing-time-line");
var isPaused = false;
var isChanged = false;
var isPlaying = false;


const backgroundImage = $.body.style.background;


(getFirstInfo) ();
playIcon.addEventListener("click", playSong);
pauseIcon.addEventListener("click", pauseSong);
nextIcon.addEventListener("click", nextsong);
prevIcon.addEventListener("click", prevSong);
timeLine.addEventListener("click", goToOtherTime)





function playSong(){
    song.play();
    isPlaying = true;
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block"
    getSongInformation ();
    if(song.currentTime === song.duration){
        nextsong ();
    }
}

function pauseSong(){
    song.pause();
    isPaused = true;
    isPlaying = false;
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
}

function nextsong () {
    if(isPlaying){
        isChanged = true;
    }
    let songSelected = song.getAttribute("src");
    let songIndex = songDetail.findIndex(function(item){
        return item.src === songSelected;
    })
    songIndex++;
    if(songIndex < songDetail.length){
        song.setAttribute("src", songDetail[songIndex].src);
        playSong();
    }else if(songIndex === songDetail.length) {
        song.setAttribute("src", songDetail[0].src);
        playSong();  
    }
}

function prevSong () {
    if(isPlaying){
        isChanged = true;
    }
    let songSelected = song.getAttribute("src");
    let songIndex = songDetail.findIndex(function(item){
        return item.src === songSelected;
    })
    songIndex--;
    if(songIndex >= 0){
        song.setAttribute("src", songDetail[songIndex].src);
        playSong();
    }else if(songIndex < 0) {
        song.setAttribute("src", songDetail[songDetail.length - 1].src);
        playSong();  
    }
}

function getSongInformation (){
    let songSelected = song.getAttribute("src");
    let songIndex = songDetail.findIndex(function(item){
        return item.src === songSelected;
    });
    musicTitle.innerHTML = songDetail[songIndex].name;
    artistName.innerHTML = songDetail[songIndex].artist;
    musicCover.style.background = "url(" + songDetail[songIndex].cover + ") no-repeat  center"
    musicCover.style.backgroundSize = "cover";
    document.body.style.background = "url(" + songDetail[songIndex].cover + ") no-repeat  center"
    document.body.style.backgroundSize = "cover"


    setTimeout(function(){
        totalTime.innerHTML = convertToStandardTimeFormat(song.duration);
    },500)

    currentTime.innerHTML  =  convertToStandardTimeFormat( Math.floor(song.currentTime));
    showCurrentTimeAndTimeLine ();
    

}


function convertToStandardTimeFormat (second) {
    let minutes = Math.floor(second/60);
    let seconds = Math.floor(second%60);
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    return (minutes + ":" + seconds)
}


function showCurrentTimeAndTimeLine (event){
    let timeNow = Math.floor(song.currentTime);
    let timeCurrent = setInterval(function(){
        if(isPaused){
            clearInterval(timeCurrent);
            isPaused = false;
        }else if(isChanged) {
            isChanged = false; 
            clearInterval(timeCurrent);
        }else if(isPlaying) {
            timeNow += .1 ; 
            currentTime.innerHTML  =  convertToStandardTimeFormat(timeNow);
            if(song.duration === undefined){
                currentTileLine.style.width = "0%"
            }else{
                let findTileLineWidth = (timeNow / song.duration) * 272;
                // currentTileLine.style.width  =  (timeNow / song.duration) * 100 + "%";
                currentTileLine.style.width  =  findTileLineWidth + "px";
                circleShowingTimeLine.style.left = findTileLineWidth - 7 + "px";
                if(song.currentTime === song.duration){
                    nextsong();
                }
            }
        }
    }, 100)

}

function goToOtherTime (event) {
   let intendedTime  = (event.layerX / 272 ) * song.duration;
   pauseSong();
   song.currentTime = intendedTime;
   playSong();
   
}


function getFirstInfo (){
    let songSelected = song.getAttribute("src");
    let songIndex = songDetail.findIndex(function(item){
        return item.src === songSelected;
    });
    musicTitle.innerHTML = songDetail[songIndex].name;
    artistName.innerHTML = songDetail[songIndex].artist;
    musicCover.style.background = "url(" + songDetail[songIndex].cover + ") no-repeat  center"
    musicCover.style.backgroundSize = "cover";
    document.body.style.background = "url(" + songDetail[songIndex].cover + ") no-repeat  center"
    document.body.style.backgroundSize = "cover"


    setTimeout(function(){
        totalTime.innerHTML = convertToStandardTimeFormat(song.duration);
    },500)

}

