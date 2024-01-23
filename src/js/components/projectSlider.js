const projectSlider = (currentProject) => {
  const sidebarItems = document.querySelectorAll('.sidebarItem');
  sidebarItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      sidebarItems.forEach((i) => {
        i.classList.remove('active');
      });
    });
    if (idx === currentProject - 1) {
      item.classList.add('active');
    }
  });
};

export default projectSlider;
