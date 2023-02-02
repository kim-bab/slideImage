const innerWrap = document.querySelector('.inner-wrap');
const slideImg = document.querySelector('.inner-wrap ul');
const slideImgList = document.querySelectorAll('.inner-wrap ul li');


let num = 0;
  const render = () => {
    setInterval(() => {
        num++;
        if(num == slideImgList.length){
          num = 0;
          slideImg.style.transform = `translateX(0)`;
        }
        slideImg.style.transform = `translateX(${-innerWrap.offsetWidth*num}px)`;

      }, 1700);
}

render();
