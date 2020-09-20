const play = document.querySelector(".play-btn")
const modal = document.querySelector(".modal")
let opened = false;

function openModal(param) {
    if (opened == false){
        let video = document.querySelector("iframe").src=param
        document.querySelector("body").style.cssText="overflow: hidden"
        modal.classList.add("open")
        opened = true
    } else {
        alert("Error, try again")
        opened=false
    }
}

function closeModal() {
    if (opened == true){
        modal.classList.remove("open")
        document.querySelector("body").style.cssText="overflow-y: scroll"
        opened=false
    }
    else {
        opened=true
    }
}
function menuButton() {
    if (!opened){
        document.querySelector("body").style.cssText="overflow: hidden"
        document.querySelector(".menu-button").classList.add("open");
        document.querySelector(".mobile-menu").classList.add("open");
        opened = true;
    } else {
        document.querySelector("body").style.cssText="overflow-y: scroll"
        document.querySelector(".menu-button").classList.remove("open");
        document.querySelector(".mobile-menu").classList.remove("open");
        opened = false;
    }
}

$(document).ready(function(){
    $('.gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
});

