import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day06.scss';

const day06 = () => {
  projectSlider(6);
  const articles = document.querySelectorAll('article');
  const wrap = document.querySelector('.day06');

  function checkElements() {
    // 宣告變數`trigger`=預定觸發時會顯示元素的視窗高度
    // 用window.innerHeight乘上某個比例，
    // 例如十分之九，用於後續比較。
    const trigger = (window.innerHeight / 10) * 9;

    // 判斷articles陣列元素是否在可視範圍內
    articles.forEach((element) => {
      // 用`.getBoundingClientRect().top`
      // 獲取元素頂部到視窗頂部的距離
      const { top } = element.getBoundingClientRect();
      // 當元素到視窗頂部的距離<預定觸發高度 設置為show
      if (top < trigger) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }
  // 監聽捲動事件
  wrap.addEventListener('scroll', checkElements);
  // 初始化目前視窗內的元素位置
  checkElements();
};

export default day06;
