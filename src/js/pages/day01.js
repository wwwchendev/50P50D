import '../../stylesheet/_reset.scss';
import '../../stylesheet/page/_day01.scss';

const day01 = () => {
  const panels = document.querySelectorAll('.panel');
  // console.log(panels);

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
