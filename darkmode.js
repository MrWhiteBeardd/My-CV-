// darkmode.js
const toggleSwitch = document.getElementById('toggle-mode');
toggleSwitch.addEventListener('change', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        header.classList.add('dark-mode');
        header.classList.remove('light-mode');
        sections.forEach(section => {
            section.classList.add('dark-mode');
            section.classList.remove('light-mode');
        });
        footer.classList.add('dark-mode');
        footer.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        header.classList.add('light-mode');
        header.classList.remove('dark-mode');
        sections.forEach(section => {
            section.classList.add('light-mode');
            section.classList.remove('dark-mode');
        });
        footer.classList.add('light-mode');
        footer.classList.remove('dark-mode');
    }
});
