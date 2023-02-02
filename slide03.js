const innerWrap = document.querySelector('.inner-wrap');
const slideImg = document.querySelector('.inner-wrap ul');
const slideImgList = document.querySelectorAll('.inner-wrap ul li');


let num = 0;

let addNode = slideImg.firstElementChild.cloneNode(true);
slideImg.appendChild(addNode);

const render = () => {
  num++;
  slideImg.style.transition = `all 0.3s`;
  slideImg.style.transform = `translateX(${-innerWrap.offsetWidth * num}px)`;
  
  if (num == slideImgList.length) {
    setTimeout(() => {
      slideImg.style.transition = `0s`;
      slideImg.style.transform = `translateX(0px)`;
    },300);
    num = 0;
  }
}
setInterval(render,1700);
