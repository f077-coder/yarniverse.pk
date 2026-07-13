document.getElementById("topBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};



const images = [
    "images/flower.jpeg",
    "images/bag.jpeg",
    "images/keychain.jpeg",
    "images/scarf.jpeg",
    "images/gajra.jpeg",
    "images/cardigan.jpeg",
    "images/coaster.jpeg"
];

let current = 0;

const slider = document.getElementById("slider-image");

document.querySelector(".next").onclick = () => {
    current = (current + 1) % images.length;
    slider.src = images[current];
};

document.querySelector(".prev").onclick = () => {
    current = (current - 1 + images.length) % images.length;
    slider.src = images[current];
};

// Auto Slide Every 3 Seconds
setInterval(() => {
    current = (current + 1) % images.length;
    slider.src = images[current];
}, 3000);