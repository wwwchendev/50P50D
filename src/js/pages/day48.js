import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day48.scss';

const day48 = () => {
  projectSlider(48);
  const container = document.querySelector('.container');
  const unsplashURL = 'https://source.unsplash.com/random/';
  const rows = 5;
  const columns = 3;
  function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
  }
  function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
    // `325x361`
  }

  // 迴圈產生 rows * columns數量的圖片元素
  for (let i = 0; i < rows * columns; i += 1) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }
};

export default day48;
