var swiper = new Swiper(".event", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
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
    drawSvg(".camera");
    drawSvg(".person");
    drawSvg(".bird");
    drawSvg(".boat");
       
            gsap.fromTo(".star1",
    {
        opacity:0.2,
        scale:0.8
    },
    {
        opacity:1,
        scale:1,
        duration:1.5,
        repeat:-1,
        yoyo:true,
        ease:"power1.inOut",
        scrollTrigger:{
            trigger:"#review",
            start:"top 70%"
        }
    });
    gsap.fromTo(".star2",
    {
        opacity:0.2,
        scale:0.8
    },
    {
        opacity:1,
        scale:1,
        duration:1.8,
        repeat:-1,
        yoyo:true,
        ease:"power1.inOut",
        scrollTrigger:{
            trigger:"#review",
            start:"top 70%"
        }
    });


    var swiper = new Swiper(".introduction_slide", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
    });
    
    AOS.init({
        duration:800,
    });