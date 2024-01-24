import '../../stylesheet/page/_day01.scss';
import projectSlider from '../components/projectSlider';

const day01 = () => {
  projectSlider(1);
  const panels = document.querySelectorAll('.panel');
  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }

  panels.forEach((e) => {
    e.addEventListener('click', () => {
      removeActiveClasses();
      e.classList.add('active');
    });
  });
};

export default day01;
