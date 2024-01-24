import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day24.scss';

const day24 = () => {
  projectSlider(24);
  const header = document.getElementById('day24Header');
  const title = document.getElementById('day24Title');
  const excerpt = document.getElementById('day24Excerpt');
  const profileImg = document.getElementById('day24Profile_img');
  const name = document.getElementById('day24Name');
  const date = document.getElementById('day24Date');

  const animatedBgs = document.querySelectorAll('.animated-bg');
  const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

  function getData() {
    header.innerHTML =
      '<img src="https://images.unsplash.com/photo-1697441642505-0f4ce8fbe98a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shibuya, Tokyo, Japan">';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    profileImg.innerHTML =
      '<img src="https://randomuser.me/api/portraits/men/11.jpg" alt="">';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
  }
  // 模擬非同步操作：2.5秒後替換檔案內容並移除漸層動畫效果
  setTimeout(getData, 2500);
};
export default day24;
