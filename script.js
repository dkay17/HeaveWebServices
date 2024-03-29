let body = document.getElementById('body');
let themeChanger = document.getElementById('themeButton');
let themeMode = document.getElementById('themeMode');
let themeBack = document.getElementById('button-background');


function changeTheme() {
    if(body.classList.contains('body1')){
        body.classList.remove('body1');
        body.classList.add('body2');
        themeBack.classList.remove('button-background');
        themeBack.classList.add('but-Back');
        themeChanger.classList.remove('themeButton');
        themeChanger.classList.add('but2');
        themeMode.innerHTML = 'Light mode';
    }
    else if(body.classList.contains('body2')){
        body.classList.remove('body2');
        body.classList.add('body1');
        themeBack.classList.remove('but-Back');
        themeBack.classList.add('button-background');
        themeChanger.classList.remove('but2');
        themeChanger.classList.add('themeButton');
        themeMode.innerHTML = 'Dark mode';
    }
}

