document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector(".carousel__slider")) {
        const carousel = new Swiper(".carousel__slider", {
            slidesPerView: 'auto',
            pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
        });
    }

    function carouselDecorPosition() {
        const screenWidth = window.innerWidth;
        let topValue;
        let carouselElement = document.querySelector('.carousel__decor');
        let carouselContainer = document.querySelector('.carousel');
    
        if (!carouselElement || !carouselContainer) return;
    
        // Calculate top value based on screen width and padding-bottom of carousel container
        const carouselComputedStyle = window.getComputedStyle(carouselContainer);
        let carouselPaddingBottom = parseInt(carouselComputedStyle.getPropertyValue('padding-bottom').replace('px', ''));
    
        // Adjust carouselPaddingBottom for small screens
        if (screenWidth < 576) {
            carouselPaddingBottom *= 2; // Double the padding for screens smaller than 576px
        }
    
        // Calculate top value based on screen width
        const difference = 1920 - 375;
        const ratio = (1920 - screenWidth) / difference; // Inverse ratio for smooth transition
        topValue = `calc(50% + ${ratio * 50}% - ${carouselPaddingBottom / 2}px)`; // Interpolated value between 50% and 100%
    
        if (carouselElement) {
            carouselElement.style.top = topValue;
        }
    }

window.addEventListener('load', carouselDecorPosition);
window.addEventListener('resize', carouselDecorPosition);
window.addEventListener('orientationchange', carouselDecorPosition);


function carouselDecorButtonPosition() {
    const screenWidth = window.innerWidth;
    let rightValue;
    let carouselButton = document.querySelector('.decor-slide__button');

    // Calculate right value based on screen width
    if (screenWidth >= 768) {
        rightValue = '7%'; // Initial value
    } else if (screenWidth <= 375) {
        rightValue = '49%'; // Adjusted value
    } else {
        const difference = 768 - 375;
        const ratio = (768 - screenWidth) / difference; // Inverse ratio for smooth transition
        rightValue = `${7 + ratio * 40}%`; // Interpolated value between 8% and 49%
    }

    if (carouselButton) {
        carouselButton.style.right = rightValue;
    }
}

window.addEventListener('load', carouselDecorButtonPosition);
window.addEventListener('resize', carouselDecorButtonPosition);
window.addEventListener('orientationchange', carouselDecorButtonPosition);

// ======================
if (document.querySelector(".shop__items")) {
    const productsSlider = new Swiper(".shop__items", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        // loop: true,
    });
}
// ============================================


});