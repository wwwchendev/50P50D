import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day18.scss';

const day18 = () => {
  projectSlider(18);
  const body = document.querySelector('#day18');
  const slides = document.querySelectorAll('.slide');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');

  let activeSlide = 0;

  function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  }

  function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
  }

  rightBtn.addEventListener('click', () => {
    activeSlide += 1;
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }
    setBgToBody(); // 設置背景
    setActiveSlide(); // 設置輪播照片
  });

  leftBtn.addEventListener('click', () => {
    activeSlide -= 1;
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
    setBgToBody(); // 設置背景
    setActiveSlide(); // 設置輪播照片
  });
};
export default day18;
