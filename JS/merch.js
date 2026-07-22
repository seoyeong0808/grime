var swiper = new Swiper('.collection_img', {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 3000, // 3초마다 자동으로 넘어감
        // disableOnInteraction: false, // 사용자가 슬라이드를 넘겨도 자동재생 계속
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  });

  function drawSvg(selector){
    const paths = document.querySelectorAll(`${selector} path`);
    paths.forEach(path => {
        const length = path.getTotalLength();
        gsap.set(path,{
            strokeDasharray:length,
            strokeDashoffset:length
        });
        gsap.to(path,{
            strokeDashoffset:0,
            duration:2,
            ease:"power2.out",
            scrollTrigger:{
                trigger:selector,
                start:"top 70%",
                toggleActions:"play none none none"
            }
        });
    });
}
drawSvg(".icon1");
drawSvg(".icon2");
drawSvg(".icon3");

AOS.init({
    duration:800,
});