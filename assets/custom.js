document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".carousel__slider")) {
        const carousel = new Swiper(".carousel__slider", {
            slidesPerView: 'auto',
            pagination: {
                el: ".swiper-pagination",
              },
        });
    }
});