const slides = document.querySelectorAll(".slide");
     /*추가*/
     const slider = document.querySelector("#brand_slider");//수정
const floatingImage = document.querySelector(".floating-image");
/*함수 전체수정*/
function getFinalRect(index){
    const sliderWidth = slider.clientWidth;
    const sliderHeight = slider.clientHeight;

    const activeFlex = 3;
    const normalFlex = 1;
    const totalFlex = activeFlex + normalFlex * (slides.length - 1);

    let beforeFlex = 0;

    for(let i = 0; i < index; i++){
        beforeFlex += normalFlex;
    }

    const left = sliderWidth * (beforeFlex / totalFlex);
    const width = sliderWidth * (activeFlex / totalFlex);

    return {
        left: left,
        width: width,
        bottom: sliderHeight
    };
}

/*함수 전체 수정*/
function moveFloatingImage(index){
    const slide = slides[index];
    const rect = getFinalRect(index);

    const xPercent = Number(slide.dataset.x || 0);
    const bottomGap = Number(slide.dataset.bottom || 0);

    let left = rect.left + rect.width * (xPercent / 100);

    const imgWidth = floatingImage.offsetWidth;

    if(xPercent <= 0){
        left = 0;
    }

    if(xPercent >= 100){
        left = slider.clientWidth;
    }

    floatingImage.style.left = left + "px";
    floatingImage.style.top = (rect.bottom - bottomGap) + "px";
    floatingImage.style.transform = getImageAnchor(xPercent);
}

/*추가*/
function getImageAnchor(xPercent){
    if(xPercent <= 0){
        return "translate(0,-100%)";
    }

    if(xPercent >= 100){
        return "translate(-100%,-100%)";
    }

    return "translate(-50%,-100%)";
}

function moveFloatingImage(index){
    const slide = slides[index];
    const rect = getFinalRect(index);

    // [수정 가능] HTML의 data-x, data-bottom 값을 읽어옵니다.
    const xPercent = Number(slide.dataset.x || 0);
    const bottomGap = Number(slide.dataset.bottom || 30);

    floatingImage.style.left = (rect.left + rect.width * (xPercent / 100)) + "px";
    floatingImage.style.top = (rect.bottom - bottomGap) + "px";

    // [추가된 부분] data-x 값에 따라 이미지 기준점 변경
    floatingImage.style.transform = getImageAnchor(xPercent);
}

window.addEventListener("load",()=>{
    const activeIndex = [...slides].findIndex(slide => slide.classList.contains("active"));
    moveFloatingImage(activeIndex);
});

window.addEventListener("resize",()=>{
    const activeIndex = [...slides].findIndex(slide => slide.classList.contains("active"));
    moveFloatingImage(activeIndex);
});
     /*추가 끝*/
      slides.forEach((slide, index)=>{//수정
        slide.addEventListener("mouseenter",()=>{
            slides.forEach(item=>{
                item.classList.remove("active");
            });
            slide.classList.add("active");
            // [추가된 부분] active slide 기준 위치로 이미지 이동
            moveFloatingImage(index);
        });
     });

     AOS.init();