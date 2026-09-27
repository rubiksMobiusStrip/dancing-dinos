const changeButton = document.getElementById('changeBtn');
const changeImg = document.getElementById('domospin')

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    
    document.documentElement.style.setProperty('--bgcolor', 'black');
    document.documentElement.style.setProperty('--btncolor', 'rgb(59, 59, 59)');
    document.documentElement.style.setProperty('--textcolor', 'white');        
    
    changeImg.src = 'https://bmami00.com/cdn/shop/files/Comp.gif?v=1755659587';

    changeButton.textContent = "☀"
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', 'disabled');

    document.documentElement.style.removeProperty('--bgcolor');
    document.documentElement.style.removeProperty('--btncolor');
    document.documentElement.style.removeProperty('--textcolor');

    changeImg.src = 'https://bmami00.com/cdn/shop/files/BLUE.gif?v=1753306168'

    changeButton.textContent = "⏾"
};

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

if (changeButton) {
    changeButton.addEventListener('click', () =>{
        const darkMode = localStorage.getItem('darkMode');

        if (darkMode !== 'enabled'){
            enableDarkMode();
        } else {
            disableDarkMode();           
        }
    });
}

window.addEventListener('storage', (event) => {
    if(event.key === 'darkMode'){
        if (event.newValue === 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
});