let body = document.getElementById('body');
let themeChanger = document.getElementById('themeButton');
let themeMode = document.getElementById('themeMode');
let themeBack = document.getElementById('button-background');
let barMenu = document.getElementById('barMenu');
let iconContainer = document.getElementById('iconContainer');
let icon = document.getElementById('fa-solid')
let closeMen = document.getElementById('closeMenu')
let currentWebWidth = document.documentElement.clientWidth

console.log(currentWebWidth)
function changeTheme() {
    // Checks if the current theme is in dark mode and changes to light mode
    if(body.classList.contains('body1')){
        body.classList.remove('body1');
        body.classList.add('body2');
        themeBack.classList.remove('button-background');
        themeBack.classList.add('but-Back');
        themeChanger.classList.remove('themeButton');
        themeChanger.classList.add('but2');
        themeMode.innerHTML = 'Light mode';
        icon.style.color = '#fff';
        if(icon.classList.contains('fa-moon')){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-bars');
        }
    }
    // Checks if the current theme is in loght mode and changes to dark mode
    else if(body.classList.contains('body2')){
        body.classList.remove('body2');
        body.classList.add('body1');
        themeBack.classList.remove('but-Back');
        themeBack.classList.add('button-background');
        themeChanger.classList.remove('but2');
        themeChanger.classList.add('themeButton');
        themeMode.innerHTML = 'Dark mode';
        icon.style.color = 'black';
        if(icon.classList.contains('fa-bars')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-moon');
        }
    }
}

// This code is incomplete(what's left: color change when theme is changed)
window.addEventListener('resize', function(){
    if(window.innerWidth > 630){
        if(barMenu.classList.contains('menuIsActive') || iconContainer.style.color =='transparent' ){
            barMenu.classList.remove('menuIsActive');
            barMenu.classList.add('barMenu');
            iconContainer.style.color = '#fff';
        }

        window.addEventListener('resize', function(){
            if(window.innerWidth <= 630){
                this.location.reload();
            }
        })
    }
    // this.location.reload()
})


function openOptions() {
    if(currentWebWidth <= 630){
        iconContainer.style.color = 'transparent';
        barMenu.classList.remove('barMenu');
        barMenu.classList.add('menuIsActive');
    }
}

// This code is incomplete(what's left: color change when theme is changed)
function closeMenu() {
    if(currentWebWidth <= 630){
        barMenu.classList.remove('menuIsActive');
        barMenu.classList.add('barMenu');
        iconContainer.style.color = '#fff';
    }
}

// setInterval(function() {
//     location.reload();
// }, 5000);

// transition: all 500ms ease-in-out;


