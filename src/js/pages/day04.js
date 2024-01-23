import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day04.scss';

const day04 = () => {
  projectSlider(4);
  const search = document.querySelector('.search');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');
  btn.addEventListener('click', () => {
    search.classList.toggle('active');
    // input.focus()展開的時候會自動聚焦在input輸入框
    input.focus();
  });
};

export default day04;
