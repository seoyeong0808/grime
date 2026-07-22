var swiper = new Swiper('.tour', {
    spaceBetween: 30,
    centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
    
  });

  var swiper = new Swiper('.program_img', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000, // 3초마다 자동 이동
        disableOnInteraction: false, // 드래그 후에도 자동재생 유지
        pauseOnMouseEnter: true, // 마우스를 올리면 일시정지(선택)
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  AOS.init({
    duration:800,
});