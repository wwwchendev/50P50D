const projectSlider = (currentProject) => {
  const sidebarItems = document.querySelectorAll('.sidebarItem');
  function scrollToProject(idx) {
    // 滾動到相應的專案區段
    const sidebar = document.getElementById('sidebar');
    const El = document.getElementById(`slide${idx + 1}`);
    sidebar.scrollTo({
      top: El.offsetTop - 200,
      behavior: 'smooth',
    });
  }
  function clearActive() {
    sidebarItems.forEach((i) => {
      i.classList.remove('active');
    });
  }
  function addActive(idx) {
    sidebarItems[idx].classList.add('active');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentProject !== 1) {
      currentProject -= 1;
    } else if (e.key === 'ArrowDown' && currentProject !== 50) {
      currentProject += 1;
    }
    if (currentProject < 10) {
      window.location.href = `#/0${currentProject}`;
    } else {
      window.location.href = `#/${currentProject}`;
    }
  });

  sidebarItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // 移除所有項目的 'active' 樣式
      clearActive();
      // 將當前點擊的項目添加 'active' 樣式
      addActive(idx);
      scrollToProject(idx);
    });

    // 如果是當前專案，一開始就添加 'active' 樣式
    if (idx === currentProject - 1) {
      clearActive();
      addActive(idx);
      scrollToProject(idx);
    }
  });
};

export default projectSlider;
