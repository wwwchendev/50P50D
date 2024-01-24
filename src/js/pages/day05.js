import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day05.scss';

const day05 = () => {
  projectSlider(5);
  const loadingText = document.querySelector('.loading-text');
  const blur = document.querySelector('.blur');
  const title = document.querySelector('#day05Title');

  let load = 0;
  function showTitle() {
    title.classList.remove('hidden');
    title.classList.add('typing');
  }
  const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
  let int;
  function blurring() {
    load += 1;
    loadingText.textContent = `${load}%`;
    if (load > 99) {
      clearInterval(int);
      showTitle();
    }
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    blur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }
  int = setInterval(blurring, 30);

  // 確認檔案加載完畢才撥放
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const video = document.querySelector('video');
      if (video) {
        video.play();
      }
    }, 2000);
  });
};

export default day05;
