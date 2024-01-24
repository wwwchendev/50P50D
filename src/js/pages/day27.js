import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day27.scss';

const day27 = () => {
  projectSlider(27);
  const button = document.getElementById('button');
  const toasts = document.getElementById('toasts');

  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ];

  const types = ['info', 'success', 'error'];
  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
  }
  function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type || getRandomType());

    notif.innerText = message || getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  }
  button.addEventListener('click', () => createNotification());
};

export default day27;
