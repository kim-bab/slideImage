const innerWrap1 = document.querySelector('#slide-wrap1 .inner-wrap');
const slideImg1 = document.querySelector('#slide-wrap1 .inner-wrap ul');
const slideImgList1 = document.querySelectorAll('#slide-wrap1 .inner-wrap ul li');

const innerWrap2 = document.querySelector('#slide-wrap2 .inner-wrap');
const slideImg2 = document.querySelector('#slide-wrap2 .inner-wrap ul');
const slideImgList2 = document.querySelectorAll('#slide-wrap2 .inner-wrap ul li');

let num1 = 0;

const transactionMove = () => {
    setInterval(() => {
      num1++;
      if(num1 == slideImgList1.length){
        num1 = 0;
        slideImg1.style.transform = `translateY(0)`;
      }
      slideImg1.style.transition = `all .3s`;
      slideImg1.style.transform = `translateY(${-innerWrap1.offsetHeight*num1}px)`;
      
    }, 1700);
  }
  transactionMove();
  


  let num2 = 0;
  let a = slideImg2.firstElementChild.cloneNode(true);
  slideImg2.appendChild(a);

    const infiniteMove = () => {
        num2++;
        slideImg2.style.transition = `all 0.3s`;
        slideImg2.style.transform = `translateY(${-innerWrap2.offsetHeight*num2}px)`;
        if(num2 == slideImgList2.length){
          setTimeout(() => {
            slideImg2.style.transition = `0s`;
            slideImg2.style.transform = `translateY(0)`;
        }, 500);
        num2 = 0;
        }
    }

    setInterval(infiniteMove,1700);

