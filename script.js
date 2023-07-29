//  HEADER

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// WINDOW SCROLL

    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');

        } else{
            document.querySelector('.header').classList.remove('active');
        }
    }

    //  HOME SECTION

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        effect: "fade",
        grabCursor: true,
        loop: true,
        centerdSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

      });
