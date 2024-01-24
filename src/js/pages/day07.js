import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day07.scss';

const day07 = () => {
  projectSlider(7);
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const container = document.querySelector('.container');

  left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
  });
  left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
  });
  right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
  });
  right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
  });
};

export default day07;
