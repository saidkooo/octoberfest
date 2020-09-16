const play = document.querySelector(".play-btn")
const modal = document.querySelector(".modal")
let opened = false;

function openModal(param) {
    let video = document.querySelector("iframe").src=param
    document.querySelector("body").style.cssText="overflow: hidden"
    modal.classList.add("open")
}

function closeModal() {
    modal.classList.remove("open")
    document.querySelector("body").style.cssText="overflow: scroll"
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

