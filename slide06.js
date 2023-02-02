const innerWrap = document.querySelector('.inner-wrap');
const slideImg = document.querySelector('.inner-wrap ul');
const slideImgList = document.querySelectorAll('.inner-wrap ul li');
const btns = document.querySelector('.btn');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const dotsWrap = document.querySelector('.dots ul');
const dots = document.querySelectorAll('.dots ul li');
const play = document.querySelector('.play');

let num = 0;
let stop;

let clickBtn = 0;

play.addEventListener('click', (e) => {
  e.preventDefault();
  clickBtn++;

  if(clickBtn % 2 == 1){
    document.querySelector('.play').classList.add('stop');
    clearInterval(stop);
  }
  else if(clickBtn % 2 == 0){
    document.querySelector('.play').classList.remove('stop');
    auto();
  }
})


const auto = () => {
  stop = setInterval(() => {
    num++;
    if(num == 0){
      num = slideImgList.length - 1;
    }
    else if(num >= slideImgList.length){
      num = 0;
    }
    
    slideImg.style.transition = `all .3s`;
    slideImg.style.transform = `translateX(${-innerWrap.offsetWidth * num}px)`;
    activeDotSlide(num);
  }, 1700)
}
auto();


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