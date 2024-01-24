import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day11.scss';

const day11 = () => {
  projectSlider(11);
  const insert = document.getElementById('insert');
  window.addEventListener('keydown', (e) => {
    // console.log(e); // KeyboardEvent
    insert.innerHTML = `
    <div class="key">
       ${e.key === ' ' ? 'Space' : e.key} 
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode(淘汰)</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>    
    `;
  });
};

export default day11;
