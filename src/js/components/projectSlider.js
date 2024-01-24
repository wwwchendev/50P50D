const projectSlider = (currentProject) => {
  const sidebarItems = document.querySelectorAll('.sidebarItem');
  console.log('currentProject', currentProject);
  // 滾動到相應的專案區段
  const projectSection = document.getElementById(`slide${currentProject}`);
  console.log('projectSection', projectSection);
  const sidebar = document.getElementById('sidebar');

  if (projectSection) {
    sidebar.scrollTo({
      top: projectSection.offsetTop - 100,
      behavior: 'smooth',
    });
  }
  sidebarItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // 移除所有項目的 'active' 樣式
      sidebarItems.forEach((i) => {
        i.classList.remove('active');
      });

      // 將當前點擊的項目添加 'active' 樣式
      item.classList.add('active');
    });

    // 如果是當前專案，一開始就添加 'active' 樣式
    if (idx === currentProject - 1) {
      item.classList.add('active');
    }
  });
};

export default projectSlider;
