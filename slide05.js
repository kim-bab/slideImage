const innerWrap = document.querySelector('.inner-wrap');
const slideImg = document.querySelector('.inner-wrap ul');
const slideImgList = document.querySelectorAll('.inner-wrap ul li');
const btns = document.querySelector('.btn');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const dotsWrap = document.querySelector('.dots ul');
const dots = document.querySelectorAll('.dots ul li');


let num = 0;

const render = () => {
  btns.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'pre') {
      num--;

      if (num < 0) {
        num = slideImgList.length - 1;
      }
    }
    else if (e.target.className === 'next') {
      num++;
      if (num >= slideImgList.length) {
        num = 0;
      }
    }
    moveImg(num);
    activeDotSlide(num);
  })
}

render();

const moveImg = (num) => {
  slideImg.style.transition = `all .3s`;
    slideImg.style.transform = `translateX(${-innerWrap.offsetWidth * num}px)`;
}



dots.forEach((items, index) => {
  items.addEventListener('click', () => {
    moveImg(index);
    num = index;
    activeDotSlide(num);
  })
});


const activeDotSlide = (num) => {
  document.querySelectorAll('.dots ul li').forEach((element) => {
    element.classList.remove('li-active');
  });

  dots.forEach(() => {
    dots[num].classList.add('li-active');
  });
}