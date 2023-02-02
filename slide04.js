const innerWrap = document.querySelector('.inner-wrap');
const slideImg = document.querySelector('.inner-wrap ul');
const slideImgList = document.querySelectorAll('.inner-wrap ul li');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');

let num = 0;

pre.addEventListener('click', () => {
  num--;
  console.log(num);

  if(num < 0){
    num = slideImgList.length-1;
  }
  slideImg.style.transform = `translateX(${-innerWrap.offsetWidth*num}px)`;

})

next.addEventListener('click', () => {
  num++;
  console.log(num);
  if(num >= slideImgList.length){
    num = 0;
  }
  slideImg.style.transform = `translateX(${-innerWrap.offsetWidth*num}px)`;
})