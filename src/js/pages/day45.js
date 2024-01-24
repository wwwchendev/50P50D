import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day45.scss';

const day45 = () => {
  projectSlider(45);
  const openBtn = document.querySelector('.open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const nav = document.querySelectorAll('.nav');

  openBtn.addEventListener('click', () => {
    nav.forEach((navEl) => navEl.classList.add('visible'));
  });

  closeBtn.addEventListener('click', () => {
    nav.forEach((navEl) => navEl.classList.remove('visible'));
  });
};

export default day45;
