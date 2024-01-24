import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day35.scss';

const day35 = () => {
  projectSlider(35);
  const imgs = document.getElementById('imgs');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');

  const img = document.querySelectorAll('#imgs img');
  const imgSize = 400;

  let idx = 0;

  function changeImage() {
    if (idx > img.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * imgSize}px)`;
  }
  function run() {
    idx += 1;
    changeImage();
  }

  let interval = setInterval(run, 2000);

  function init() {
    idx = 3;
    changeImage();
  }

  init();

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }

  rightBtn.addEventListener('click', () => {
    idx += 1;
    changeImage();
    resetInterval();
  });

  leftBtn.addEventListener('click', () => {
    idx -= 1;
    changeImage();
    resetInterval();
  });
};

export default day35;
