function toggle(){
    var blur = document.getElementById('blur');
        blur.classList.toggle('active')
    
    var popup = document.getElementById('popup');
        popup.classList.toggle('active')
}

function toggle1(){
    var blur = document.getElementById('blur');
        blur.classList.toggle('active1')
    
    var popup = document.getElementById('popup1');
        popup.classList.toggle('active1')
}



searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

}


let searchBox = document.querySelector('.search-form');



window.onscroll = () => {

    
    if (window.scrollY > 100) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    }

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
        fadeOut();
    }


function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 2000);
}



let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}











var swiper = new Swiper (".books-slider", {
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper (".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        450: {
            slidesPerView: 2,
            },
        768: {
            slidesPerView: 3,
            },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper (".reviews-slider", {
    spaceBetween:10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});



var swiper = new Swiper (".blogs-slider", {
    spaceBetween:10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});









