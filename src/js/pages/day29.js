import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day29.scss';

const day29 = () => {
  projectSlider(29);
  const loveMe = document.querySelector('.loveMe');
  const times = document.querySelector('#times');

  let clickTime = 0;
  let timesClicked = 0;

  const createHeart = (e) => {
    // 創建包含.fas.fa-heart兩個類別的i元素
    const el = document.createElement('div');
    el.classList.add('fas');
    el.classList.add('fa-heart');

    // 獲取滑鼠點擊位置
    const x = e.clientX;
    const y = e.clientY;
    // 被點擊元素相對於其父元素邊界偏移量
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    // 計算"滑鼠點擊位置"相對於"被點擊元素(loveMe圖片)"的內部位置
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    // 設定樣式:定位
    el.style.position = `absolute`;
    el.style.top = `${yInside - 20}px`;
    el.style.left = `${xInside - 250}px`;
    el.style.animation = `grow 0.6s linear;`;
    el.style.position = `absolute`;

    // 在loveMe圖片內生成Heart
    loveMe.appendChild(el);
    // 前置遞增運算子 先增加變數再賦值
    // eslint-disable-next-line no-plusplus
    times.innerHTML = ++timesClicked;
    // 1秒後移除元素
    setTimeout(() => el.remove(), 1000);
  };
  // 判斷雙擊
  loveMe.addEventListener('click', (e) => {
    // 如果clickTime === 0先記錄我們第一次點擊事件的時間
    if (clickTime === 0) {
      clickTime = new Date().getTime();
      // "Sat Oct 21 2023 19:13:12 GMT+0800 (台北標準時間)".getTime()
      // console.log(clickTime);//1697886779456
    } else {
      // clickTime>0
      // 如果800ms內按下第二次視為雙擊： 呼叫createHeart(e)創建愛心
      // eslint-disable-next-line no-lonely-if
      if (new Date().getTime() - clickTime < 800) {
        createHeart(e);
        clickTime = 0;
      } else {
        // 逾時則覆寫點擊事件的時間
        clickTime = new Date().getTime();
      }
    }
  });
};

export default day29;
