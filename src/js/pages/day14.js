import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day14.scss';

const day14 = () => {
  projectSlider(14);
  const toggle = document.getElementById('toggle');
  const nav = document.getElementById('nav');

  toggle.addEventListener('click', () => nav.classList.toggle('active'));
};

export default day14;
