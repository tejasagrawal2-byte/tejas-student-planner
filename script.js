const navItems = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('.tab');
const subjectTabs = document.querySelectorAll('.subject-tab');
const days = document.querySelectorAll('.day');
const switchButtons = document.querySelectorAll('.switch-btn');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
});

subjectTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    subjectTabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
});

days.forEach((day) => {
  day.addEventListener('click', () => {
    days.forEach((item) => item.classList.remove('active'));
    day.classList.add('active');
  });
});

switchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switchButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
