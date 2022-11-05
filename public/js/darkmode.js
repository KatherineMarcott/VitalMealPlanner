let darkMode = localStorage.getItem('darkMode');
let headerElement = document.getElementById('header');
let loginContainer = document.querySelector('.main-login-container');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    headerElement.classList.add('darkmode-dark'); 
    loginContainer.classList.add('darkmode-dark');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    headerElement.classList.remove('darkmode-dark'); 
    loginContainer.classList.remove('darkmode-dark');
    localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})