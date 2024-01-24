import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day44.scss';

const day44 = () => {
  projectSlider(44);
  const range = document.getElementById('range');

  range.addEventListener('input', (e) => {
    // 將value轉為number型別
    const value = +e.target.value;
    // 顯示文字標籤指定為同層下一個元素的label
    const label = e.target.nextElementSibling;

    // 取得滑軌和標籤的寬度
    // getComputedStyle(e.target) 用於取得'range'樣式。
    // .getPropertyValue('width') 用於取得'range'樣式中 width屬性寬度值(string型別)。
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');
    // .substring(0, rangeWidth.length - 2) 用於截取字符串的子串，
    // 這裡是截去最後兩個字符，即 "px" 部分。這樣只剩下數字部分，比如 "100"。
    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    // 宣告變數存取input定義的最大值與最小值
    const max = +e.target.max;
    const min = +e.target.min;

    // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, inMin, inMax, outMin, outMax) => {
      return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };
    // 當前範圍值*(滑軌寬度/最大值) - (標籤寬度/2)
    // 舉例:
    // |--|-- |--|--|--|500px
    // 0--1--2--3--4--5
    // |--|-- |📍 left:2*(500/5)=200px
    // 此時標籤沒有置中 要減掉標籤寬度的一半
    // |--|--📍 left:200px - numLabelWidth / 2

    // 我們預期標籤和thumb總是置中，但左移thumb的時候會發現標籤會向左偏移(右移時向右)
    // 所以使用線性映射函數設置一個由正數~負數的偏移值進行left屬性值的位移微調
    // out_min, out_max值要設定多少要自己測試看看

    // 將 當前範圍值 在滑軌最小值到最大值的範圍 映射到 偏移值10~-10範圍中得到偏移量
    // 當數值<50 標籤會偏左，此時加上正數的偏移值調整標籤left定位
    // 當數值>50 標籤會偏右，此時加上負數的偏移值調整標籤left定位
    const left =
      value * (numWidth / max) -
      numLabelWidth / 2 +
      scale(value, min, max, 10, -10);
    // 設定標籤距離左邊界的距離
    label.style.left = `${left}px`;
    // 更新標籤文字
    label.innerHTML = value;
  });
};

export default day44;
