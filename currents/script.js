const changeButton = document.getElementById('changeBtn');

let isDarkMode = false;

changeButton.addEventListener('click', () =>{
    isDarkMode = !isDarkMode;

    if (isDarkMode){
        document.documentElement.style.setProperty('--bgcolor', 'black');
        document.documentElement.style.setProperty('--btncolor', 'gray');
        document.documentElement.style.setProperty('--textcolor', 'white');

        changeButton.textContent = "☀"
    } 
    else{
        document.documentElement.style.removeProperty('--bgcolor');
        document.documentElement.style.removeProperty('--btncolor');
        document.documentElement.style.removeProperty('--textcolor');

        changeButton.textContent = "⏾"
    }
});