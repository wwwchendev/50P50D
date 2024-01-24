import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day20.scss';

const day20 = () => {
  projectSlider(20);
  const buttons = document.querySelectorAll('.ripple');
  console.log(buttons);

  // 在滑鼠點擊按鈕的地方增加一個會變大的圓圈
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // 取得事件座標
      const x = e.clientX;
      const y = e.clientY;

      // HTML元素屬性 offsetTop/offsetLeft
      // 元素距離視窗邊界的位置
      const buttonTop = e.target.offsetTop;
      const buttonLeft = e.target.offsetLeft;

      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;

      // 在按钮上添加span.circle元素及设置元素位置
      const circle = document.createElement('span');
      circle.classList.add('circle');
      circle.style.top = `${yInside}px`;
      circle.style.left = `${xInside}px`;

      // 使用箭头函数确保正确的this绑定
      button.appendChild(circle);

      // 500毫秒后移除元素
      setTimeout(() => circle.remove(), 500);
    });
  });
};

export default day20;
