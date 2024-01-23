const projectSlider = () => {
  const sidebarItems = document.querySelectorAll('.sidebarItem');

  sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
      sidebarItems.forEach((i) => {
        i.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
};

export default projectSlider();
