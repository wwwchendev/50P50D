// router.js
import { match } from 'path-to-regexp';
// pages
import NotFound from '../html/pages/NotFound.ejs';
import Home from '../html/pages/Home.ejs';
import Day01 from '../html/pages/Day01.ejs';
import Day02 from '../html/pages/Day02.ejs';
import Day03 from '../html/pages/Day03.ejs';
import Day04 from '../html/pages/Day04.ejs';
import Day05 from '../html/pages/Day05.ejs';
import Day06 from '../html/pages/Day06.ejs';
import Day07 from '../html/pages/Day07.ejs';
import Day08 from '../html/pages/Day08.ejs';
import Day09 from '../html/pages/Day09.ejs';
import Day10 from '../html/pages/Day10.ejs';
import Day11 from '../html/pages/Day11.ejs';
import Day12 from '../html/pages/Day12.ejs';
import Day13 from '../html/pages/Day13.ejs';
import Day14 from '../html/pages/Day14.ejs';
import Day15 from '../html/pages/Day15.ejs';
import Day16 from '../html/pages/Day16.ejs';
import Day17 from '../html/pages/Day17.ejs';
import Day18 from '../html/pages/Day18.ejs';
import Day19 from '../html/pages/Day19.ejs';
import Day20 from '../html/pages/Day20.ejs';
import Day21 from '../html/pages/Day21.ejs';
import Day22 from '../html/pages/Day22.ejs';
import Day23 from '../html/pages/Day23.ejs';
import Day24 from '../html/pages/Day24.ejs';
import Day25 from '../html/pages/Day25.ejs';
import Day26 from '../html/pages/Day26.ejs';
import Day27 from '../html/pages/Day27.ejs';
import Day28 from '../html/pages/Day28.ejs';
import Day29 from '../html/pages/Day29.ejs';
import Day30 from '../html/pages/Day30.ejs';
import Day31 from '../html/pages/Day31.ejs';
import Day32 from '../html/pages/Day32.ejs';
import Day33 from '../html/pages/Day33.ejs';
import Day34 from '../html/pages/Day34.ejs';
import Day35 from '../html/pages/Day35.ejs';
import Day36 from '../html/pages/Day36.ejs';
import Day37 from '../html/pages/Day37.ejs';
import Day38 from '../html/pages/Day38.ejs';
import Day39 from '../html/pages/Day39.ejs';
import Day40 from '../html/pages/Day40.ejs';
import Day41 from '../html/pages/Day41.ejs';
import Day42 from '../html/pages/Day42.ejs';
import Day43 from '../html/pages/Day43.ejs';
import Day44 from '../html/pages/Day44.ejs';
import Day45 from '../html/pages/Day45.ejs';
import Day46 from '../html/pages/Day46.ejs';
import Day47 from '../html/pages/Day47.ejs';
import Day48 from '../html/pages/Day48.ejs';
import Day49 from '../html/pages/Day49.ejs';
import Day50 from '../html/pages/Day50.ejs';
// script
import home from './pages/home';
import day01 from './pages/day01';
import day02 from './pages/day02';
import day03 from './pages/day03';
import day04 from './pages/day04';
import day05 from './pages/day05';
import day06 from './pages/day06';
import day07 from './pages/day07';
import day08 from './pages/day08';
import day09 from './pages/day09';
import day10 from './pages/day10';
import day11 from './pages/day11';
import day12 from './pages/day12';
import day13 from './pages/day13';
import day14 from './pages/day14';
import day15 from './pages/day15';
import day16 from './pages/day16';
import day17 from './pages/day17';
import day18 from './pages/day18';
import day19 from './pages/day19';
import day20 from './pages/day20';
import day21 from './pages/day21';
import day22 from './pages/day22';
import day23 from './pages/day23';
import day24 from './pages/day24';
import day25 from './pages/day25';
import day26 from './pages/day26';
import day27 from './pages/day27';
import day28 from './pages/day28';
import day29 from './pages/day29';
import day30 from './pages/day30';
import day31 from './pages/day31';
import day32 from './pages/day32';
import day33 from './pages/day33';
import day34 from './pages/day34';
import day35 from './pages/day35';
import day36 from './pages/day36';
import day37 from './pages/day37';
import day38 from './pages/day38';
import day39 from './pages/day39';
import day40 from './pages/day40';
import day41 from './pages/day41';
import day42 from './pages/day42';
import day43 from './pages/day43';
import day44 from './pages/day44';
import day45 from './pages/day45';
import day46 from './pages/day46';
import day47 from './pages/day47';
import day48 from './pages/day48';
import day49 from './pages/day49';
import day50 from './pages/day50';
// 定义路由规则
const routes = [
  { path: '/', title: 'Home | 50P50D', component: 'Home' },
  { path: '/01', title: '01-expanding-cards | 50P50D', component: 'Day01' },
  { path: '/02', title: '02-progress-steps | 50P50D', component: 'Day02' },
  { path: '/03', title: '03-rotating-navigation | 50P50D', component: 'Day03' },
  { path: '/04', title: '04-hidden-search | 50P50D', component: 'Day04' },
  { path: '/05', title: '05-blurry-loading | 50P50D', component: 'Day05' },
  { path: '/06', title: '06-scroll-animation | 50P50D', component: 'Day06' },
  { path: '/07', title: '07-Split-Landing-Page | 50P50D', component: 'Day07' },
  { path: '/08', title: '08-form-wave | 50P50D', component: 'Day08' },
  { path: '/09', title: '09-Sound-Board | 50P50D', component: 'Day09' },
  { path: '/10', title: '10-Dad-Jokes | 50P50D', component: 'Day10' },
  { path: '/11', title: '11-Event-Keycodes | 50P50D', component: 'Day11' },
  { path: '/12', title: '12-Faq-Collapse | 50P50D', component: 'Day12' },
  {
    path: '/13',
    title: '13-Random-Choice-Picker | 50P50D',
    component: 'Day13',
  },
  { path: '/14', title: '14-Animated-Navigation | 50P50D', component: 'Day14' },
  {
    path: '/15',
    title: '15-Incrementing-Counter | 50P50D',
    component: 'Day15',
  },
  { path: '/16', title: '16-drink-water | 50P50D', component: 'Day16' },
  { path: '/17', title: '17-Movie-App | 50P50D', component: 'Day17' },
  { path: '/18', title: '18-Background-Slider | 50P50D', component: 'Day18' },
  { path: '/19', title: '19-Theme-Clock | 50P50D', component: 'Day19' },
  {
    path: '/20',
    title: '20-Button-Ripple-Effect | 50P50D',
    component: 'Day20',
  },
  { path: '/21', title: '21-Drag-N-Drop | 50P50D', component: 'Day21' },
  { path: '/22', title: '22-Drawing-App | 50P50D', component: 'Day22' },
  { path: '/23', title: '23-Kinetic-Loader | 50P50D', component: 'Day23' },
  { path: '/24', title: '24-Content-Placeholder | 50P50D', component: 'Day24' },
  { path: '/25', title: '25-Sticky-Navbar | 50P50D', component: 'Day25' },
  {
    path: '/26',
    title: '26-Double-Vertical-Slider | 50P50D',
    component: 'Day26',
  },
  { path: '/27', title: '27-Toast-Notification | 50P50D', component: 'Day27' },
  { path: '/28', title: '28-Github-Profiles | 50P50D', component: 'Day28' },
  { path: '/29', title: '29-Double-Click-Heart | 50P50D', component: 'Day29' },
  { path: '/30', title: '30-Auto-Text-Effect | 50P50D', component: 'Day30' },
  { path: '/31', title: '31-Password-Generator | 50P50D', component: 'Day31' },
  { path: '/32', title: '32-Good-Cheap-Fast | 50P50D', component: 'Day32' },
  { path: '/33', title: '33-Notes-App | 50P50D', component: 'Day33' },
  { path: '/34', title: '34-Animated-Count-down | 50P50D', component: 'Day34' },
  { path: '/35', title: '35-Image-Carousel | 50P50D', component: 'Day35' },
  { path: '/36', title: '36-Hoverboard | 50P50D', component: 'Day36' },
  { path: '/37', title: '37-Pokedex | 50P50D', component: 'Day37' },
  {
    path: '/38',
    title: '38-Mobile-Tab-Navigation | 50P50D',
    component: 'Day38',
  },
  {
    path: '/39',
    title: '39-Password-Strength-Backgrounds | 50P50D',
    component: 'Day39',
  },
  { path: '/40', title: '40-3d-Background-Boxes | 50P50D', component: 'Day40' },
  { path: '/41', title: '41-Verify-Account-Ui | 50P50D', component: 'Day41' },
  { path: '/42', title: '42-Live-User-Filter | 50P50D', component: 'Day42' },
  { path: '/43', title: '43-Feedback-Ui-Design | 50P50D', component: 'Day43' },
  { path: '/44', title: '44-Custom-Range-Slider | 50P50D', component: 'Day44' },
  {
    path: '/45',
    title: '45-Netflix-Mobile-Navigation | 50P50D',
    component: 'Day45',
  },
  { path: '/46', title: '46-Quiz-App | 50P50D', component: 'Day46' },
  {
    path: '/47',
    title: '47-Testimonial-Box-Switcher | 50P50D',
    component: 'Day47',
  },
  { path: '/48', title: '48-Random-Image-Feed | 50P50D', component: 'Day48' },
  { path: '/49', title: '49-Todo-List | 50P50D', component: 'Day49' },
  { path: '/50', title: '50-Insect-Catch-Game | 50P50D', component: 'Day50' },
];

// 更新Active連結樣式
function updateActiveLink(currentPath) {
  // console.log(currentPath);
  const linksArray = document.querySelectorAll('header nav a');

  linksArray.forEach((link) => {
    const linkPath = `/${link.getAttribute('href').split('/')[1]}`;
    const correspondingLi = link.parentElement;
    // console.log(currentPath, linkPath);
    if (correspondingLi) {
      correspondingLi.classList.toggle(
        'active',
        currentPath.split('/')[1] === linkPath.split('/')[1],
      );
    }
  });
}

function renderComponent(component) {
  // console.log(`渲染組件: ${component}`);
  const mainContainer = document.getElementById('root');
  // 清空容器
  if (mainContainer) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  } else {
    console.error('mainContainer is null or undefined');
  }
  // 示例组件渲染函数
  function render(container, inner = '') {
    const wrap = document.createElement('div');
    wrap.innerHTML = inner;
    container.appendChild(wrap);
  }

  // 创建或加载对应组件
  switch (component) {
    case 'Home':
      render(mainContainer, Home);
      home();
      break;
    case 'Day01':
      render(mainContainer, Day01);
      day01();
      break;
    case 'Day02':
      render(mainContainer, Day02);
      day02();
      break;
    case 'Day03':
      render(mainContainer, Day03);
      day03();
      break;
    case 'Day04':
      render(mainContainer, Day04);
      day04();
      break;
    case 'Day05':
      render(mainContainer, Day05);
      day05();
      break;
    case 'Day06':
      render(mainContainer, Day06);
      day06();
      break;
    case 'Day07':
      render(mainContainer, Day07);
      day07();
      break;
    case 'Day08':
      render(mainContainer, Day08);
      day08();
      break;
    case 'Day09':
      render(mainContainer, Day09);
      day09();
      break;
    case 'Day10':
      render(mainContainer, Day10);
      day10();
      break;
    case 'Day11':
      render(mainContainer, Day11);
      day11();
      break;
    case 'Day12':
      render(mainContainer, Day12);
      day12();
      break;
    case 'Day13':
      render(mainContainer, Day13);
      day13();
      break;
    case 'Day14':
      render(mainContainer, Day14);
      day14();
      break;
    case 'Day15':
      render(mainContainer, Day15);
      day15();
      break;
    case 'Day16':
      render(mainContainer, Day16);
      day16();
      break;
    case 'Day17':
      render(mainContainer, Day17);
      day17();
      break;
    case 'Day18':
      render(mainContainer, Day18);
      day18();
      break;
    case 'Day19':
      render(mainContainer, Day19);
      day19();
      break;
    case 'Day20':
      render(mainContainer, Day20);
      day20();
      break;
    case 'Day21':
      render(mainContainer, Day21);
      day21();
      break;
    case 'Day22':
      render(mainContainer, Day22);
      day22();
      break;
    case 'Day23':
      render(mainContainer, Day23);
      day23();
      break;
    case 'Day24':
      render(mainContainer, Day24);
      day24();
      break;
    case 'Day25':
      render(mainContainer, Day25);
      day25();
      break;
    case 'Day26':
      render(mainContainer, Day26);
      day26();
      break;
    case 'Day27':
      render(mainContainer, Day27);
      day27();
      break;
    case 'Day28':
      render(mainContainer, Day28);
      day28();
      break;
    case 'Day29':
      render(mainContainer, Day29);
      day29();
      break;
    case 'Day30':
      render(mainContainer, Day30);
      day30();
      break;
    case 'Day31':
      render(mainContainer, Day31);
      day31();
      break;
    case 'Day32':
      render(mainContainer, Day32);
      day32();
      break;
    case 'Day33':
      render(mainContainer, Day33);
      day33();
      break;
    case 'Day34':
      render(mainContainer, Day34);
      day34();
      break;
    case 'Day35':
      render(mainContainer, Day35);
      day35();
      break;
    case 'Day36':
      render(mainContainer, Day36);
      day36();
      break;
    case 'Day37':
      render(mainContainer, Day37);
      day37();
      break;
    case 'Day38':
      render(mainContainer, Day38);
      day38();
      break;
    case 'Day39':
      render(mainContainer, Day39);
      day39();
      break;
    case 'Day40':
      render(mainContainer, Day40);
      day40();
      break;
    case 'Day41':
      render(mainContainer, Day41);
      day41();
      break;
    case 'Day42':
      render(mainContainer, Day42);
      day42();
      break;
    case 'Day43':
      render(mainContainer, Day43);
      day43();
      break;
    case 'Day44':
      render(mainContainer, Day44);
      day44();
      break;
    case 'Day45':
      render(mainContainer, Day45);
      day45();
      break;
    case 'Day46':
      render(mainContainer, Day46);
      day46();
      break;
    case 'Day47':
      render(mainContainer, Day47);
      day47();
      break;
    case 'Day48':
      render(mainContainer, Day48);
      day48();
      break;
    case 'Day49':
      render(mainContainer, Day49);
      day49();
      break;
    case 'Day50':
      render(mainContainer, Day50);
      day50();
      break;
    case 'NotFound':
      render(mainContainer, NotFound);
      break;
    default:
      console.error(`Unknown component: ${component}`);
  }
}

// 路由處理
function handleRouteChange() {
  const currentPath = window.location.hash.substring(1);
  const route = routes.find((item) => match(item.path)(currentPath));
  if (route) {
    document.title = route.title || 'Default Title';
  } else if (route === undefined) {
    document.title = routes.find(() => match('/')).title;
  } else {
    document.title = '404 - Page Not Found';
  }

  if (currentPath === '') {
    renderComponent('Home');
    updateActiveLink('/home');
  } else if (route) {
    // console.log(route.component, currentPath);
    // 渲染对应组件
    renderComponent(route.component); // Courses
    // 标记当前页面为 active
    updateActiveLink(currentPath); // /courses
  } else {
    // 处理未匹配的路由，例如显示 404 页面
    renderComponent('NotFound');
  }
  // console.log('params', JSON.stringify(params));
  // console.log('currentPath', currentPath);
}

// 导航函数
function navigateTo(path) {
  window.location.hash = path;
  handleRouteChange();
}

// 初始化路由
function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
}

export { navigateTo, initRouter };
