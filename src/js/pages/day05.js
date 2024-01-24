import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day05.scss';

const day05 = () => {
  projectSlider(5);
  const loadingText = document.querySelector('.loading-text');
  const blur = document.querySelector('.blur');
  const title = document.querySelector('h1');

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

  // 透過線性映射(in範圍->out範圍)改變數值
  // 隨著 load 值的0到100範圍的改變，對應到透明度從完全不透明（1）逐漸減少到完全透明（0）的範圍改變。這可以用來創建一個漸進的載入文字效果，以指示載入進度。
  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

  setTimeout(() => {
    const video = document.querySelector('video');
    video.play();
  }, 2000);
};

export default day05;
