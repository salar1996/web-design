const $ = document;
const sliderImages = [
    "../images/backgrounds/001.jpg",
    "../images/backgrounds/002.jpg",
    "../images/backgrounds/003.jpg",
    "../images/backgrounds/004.jpg"
]

const slider = $.querySelector("#img-slider");
const sliderNextButton = $.querySelector(".fa-forward");
const sliderPrevButton = $.querySelector(".fa-backward");
let sliderImageIndex = 0;
let changeslide = false;


//// functions
(function loadSlider(){
    slider.style.cssText = "background: url(\"" + sliderImages[0] + "\") center no-repeat; background-size: cover;";
})();

function NextSlide(){
    sliderImageIndex++;
    if(sliderImageIndex >= sliderImages.length){
        sliderImageIndex = 0;
    }
    slider.style.cssText = "background: url(\"" + sliderImages[sliderImageIndex] + "\") center no-repeat; background-size: cover;";
    clearInterval(sliderTurn);
    sliderTurn = setInterval(function(){
        NextSlide();
    }
    , 3000);
}

function prevSlide(){
    sliderImageIndex--;
    if(sliderImageIndex < 0 ){
        sliderImageIndex = sliderImages.length-1;
        console.log(sliderImages.length-1)
    }
    slider.style.cssText = "background: url(\"" + sliderImages[sliderImageIndex] + "\") center no-repeat; background-size: cover;";
    clearInterval(sliderTurn);
    sliderTurn = setInterval(function(){
        NextSlide();
    }
    , 3000);
}

let sliderTurn = setInterval(function(){
        NextSlide();
    }
    , 3000);


//// events
sliderPrevButton.parentElement.addEventListener("click", prevSlide);
sliderNextButton.parentElement.addEventListener("click", NextSlide);



