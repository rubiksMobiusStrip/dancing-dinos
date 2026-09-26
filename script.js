const changeButton = document.getElementById('changeBtn');
const changeImg = document.getElementById('domospin')

let isDarkMode = false;

changeButton.addEventListener('click', () =>{
    isDarkMode = !isDarkMode;

    if (isDarkMode){
        document.documentElement.style.setProperty('--bgcolor', 'black');
        document.documentElement.style.setProperty('--btncolor', 'rgb(59, 59, 59)');
        document.documentElement.style.setProperty('--textcolor', 'white');
        
        changeImg.src = 'https://bmami00.com/cdn/shop/files/Comp.gif?v=1755659587';

        changeButton.textContent = "☀"
    } 
    else{
        document.documentElement.style.removeProperty('--bgcolor');
        document.documentElement.style.removeProperty('--btncolor');
        document.documentElement.style.removeProperty('--textcolor');

        changeImg.src = 'https://bmami00.com/cdn/shop/files/BLUE.gif?v=1753306168'

        changeButton.textContent = "⏾"
    }
});