import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day39.scss';

const day39 = () => {
  projectSlider(39);
  const password = document.getElementById('password');
  const background = document.getElementById('background');

  password.addEventListener('input', (e) => {
    const input = e.target.value;
    const { length } = input;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
  });
};

export default day39;
