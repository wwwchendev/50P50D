import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day25.scss';

const day25 = () => {
  projectSlider(25);
  const header = document.querySelector('header');

  function fixNav() {
    if (window.scrollY > header.offsetHeight + 150) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
  window.addEventListener('scroll', fixNav);
};

export default day25;
