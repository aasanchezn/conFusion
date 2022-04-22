var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);
var Buttoncarousel = document.querySelector('#carouselButton');
console.log(Buttoncarousel);
if (Buttoncarousel != null){
    console.log("no hay carousel");
    Buttoncarousel.addEventListener('click',carouselInterac);
    function carouselInterac() {
        if (Buttoncarousel.children[0].classList.contains('fa-pause')){
        
            Buttoncarousel.children[0].classList.replace('fa-pause', 'fa-play');
                carousel._isPaused=true;
            }
        else if (Buttoncarousel.children[0].classList.contains('fa-play')){
        
                Buttoncarousel.children[0].classList.replace('fa-play', 'fa-pause');
                carousel._isPaused=false;  
        }
    };
};

if (document.getElementById('loginModal')!= null){    

    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

    document.querySelector('#buttonLogin').addEventListener('click', function (){
        loginModal.show();
    });
};

    if (document.getElementById('reserveTable')!= null){
    var reserveModal = new bootstrap.Modal(document.getElementById('reserveTable'));
    console.log(reserveModal);
    document.querySelector('#buttonReservetable').addEventListener('click', function (){
        reserveModal.show();});
    }; 
