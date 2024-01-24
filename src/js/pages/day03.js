import '../../stylesheet/page/_day03.scss';
import projectSlider from '../components/projectSlider';

const day03 = () => {
  projectSlider(3);
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const container = document.getElementById('day03');

  open.addEventListener('click', () => container.classList.add('show-nav'));

  close.addEventListener('click', () => container.classList.remove('show-nav'));
};

export default day03;
