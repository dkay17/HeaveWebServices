let body = document.getElementById('body');
let themeChanger = document.getElementById('themeButton');
let themeMode = document.getElementById('themeMode');
let themeBack = document.getElementById('button-background');
let barMenu = document.getElementById('barMenu');
let iconContainer = document.getElementById('iconContainer');
let icon = document.getElementById('fa-solid')
let currentWebWidth = document.documentElement.clientWidth

console.log(currentWebWidth)
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


window.addEventListener('resize', function(){
    if(window.innerWidth > 630){
        if(barMenu.classList.contains('menuIsActive') || iconContainer.style.color =='transparent' ){
            barMenu.classList.remove('menuIsActive');
            barMenu.classList.add('barMenu');
            iconContainer.style.color = '#fff';
        }
    }
    // else if(window.innerWidth <= 630){
    //     if(barMenu.classList.contains('barMenu')){
    //         barMenu.classList.add('menuIsActive');
    //         barMenu.classList.remove('barMenu')
    //     }
    // }
})


function openOptions() {
    if(currentWebWidth <= 630){
        iconContainer.style.color = 'transparent';
        barMenu.classList.remove('barMenu');
        barMenu.classList.add('menuIsActive');
    }
}

// setInterval(function() {
//     location.reload();
// }, 5000);

// transition: all 500ms ease-in-out;


