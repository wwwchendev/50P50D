import axios from 'axios';
import projectSlider from '../components/projectSlider';
import '../../stylesheet/page/_day28.scss';

const day28 = () => {
  projectSlider(28);

  // 1.監聽form元素
  const main = document.getElementById('main');
  const form = document.querySelector('#form');
  const search = document.querySelector('#search');

  // 2.宣告變數用於存儲 API根路徑
  const APIURL = `https://api.github.com/users/`;

  // 3.用axios網路請求+ 使用async/await異步操作 + 使用try/catch(err)錯誤處理
  // (1) 創建獲取user的方法並給定參數
  // (2) (非必要)用變數res存取axios.get發送的網路請求回傳結果(axios會返回一個promise)
  //     可以在console查看res內的資訊
  // (3) 解構賦值-宣告{data}將 axios.get 傳回的物件中的 data 屬性提取出來，並將其賦值給名為 data
  // (4) 使用 try/catch(err) 進行成功與錯誤機制處理

  // 更新卡片介面--查找用戶存在的情況
  function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div class="imgwrap">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>   
    `;
    main.innerHTML = cardHTML;
  }

  // 增加數據庫到卡片內
  function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.slice(0, 5).forEach((repo) => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_blank';
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    });
  }

  // 查無該用戶的情況
  function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
  }
  // 更新卡片介面-數據庫
  async function getRepos(username) {
    try {
      // 取得資料 -- 依建立時間排序
      const { data } = await axios(`${APIURL + username}/repos?sort=created`);
      // 更新介面
      addReposToCard(data);
    } catch (err) {
      createErrorCard('取得儲存庫時出現問題');
    }
  }
  // 獲取用戶資料
  async function getUser(username) {
    try {
      // 取得網路請求回傳數據
      // const res = await axios.get(APIURL+username)
      const { data } = await axios.get(APIURL + username);
      // console.log(data)
      // {login: 'octocat', id: 583231, node_id: 'MDQ6VXNlcjU4MzIzMQ==', avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4', gravatar_id: '',…}
      createUserCard(data); // 更新卡片介面-用戶
      getRepos(username); // 更新卡片介面-數據庫
    } catch (err) {
      // 查看錯誤回報訊息
      console.log(err.response);
      // 如果網路請求返回的狀態碼為404表示
      if (err.response.status === 404) {
        createErrorCard('查無該用戶');
      }
    }
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
      // 獲取用戶資料
      getUser(user);
      // 清空搜尋列
      search.value = ``;
    }
  });
};
export default day28;
