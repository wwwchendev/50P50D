import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day08.scss';

const day08 = () => {
  projectSlider(8);
  const labels = document.querySelectorAll('.form-control label');
  labels.forEach((label) => {
    const modifiedHTML = label.innerText
      .split('')
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`,
      )
      .join('');
    label.innerHTML = modifiedHTML;
  });
};

export default day08;
