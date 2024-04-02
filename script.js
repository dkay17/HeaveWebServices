let body = document.getElementById('body');
let themeChanger = document.getElementById('themeButton');
let themeMode = document.getElementById('themeMode');
let themeBack = document.getElementById('button-background');
let barMenu = document.getElementById('barMenu');
let iconContainer = document.getElementById('iconContainer');
let icon = document.getElementById('fa-solid')
let closeMen = document.getElementById('closeMenu')
let head = document.getElementById('head')
let projectsAndContact = document.getElementById('projects_contact')
let projects = document.getElementById('projects-container')
let contact = document.getElementById('contact-container')
let videos = document.querySelectorAll('video')
let button = document.getElementById('button')

let currentWebWidth = document.documentElement.clientWidth

let currentVideoIndex = 0;
let invalid ;

function playNextVideo() {
videos[currentVideoIndex].pause();
videos[currentVideoIndex].style.display = 'none';
currentVideoIndex = (currentVideoIndex + 1) % videos.length;
videos[currentVideoIndex].style.display = 'block';
videos[currentVideoIndex].play();
}

function startVideoAnimation() {
videos[currentVideoIndex].style.display = 'block';
videos[currentVideoIndex].play();
invalid = setInterval(playNextVideo, 5000); // Change video every 5 seconds (5000 milliseconds)
}
startVideoAnimation();

function changeTheme (){
    if(body.classList.contains('body1')){
        themeBack.classList.remove('button-background')
        themeBack.classList.add('but-Back');
        body.classList.remove('body1');
        body.classList.add('body2');
        themeMode.innerHTML = 'Light mode';
        themeChanger.classList.remove('themeButton');
        themeChanger.classList.add('but2');
        head.classList.remove('head1');
        head.classList.add('head2');
        projectsAndContact.classList.remove('projects_contact1');
        projectsAndContact.classList.add('projects_contact2');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-bars');
        icon.style.color = '#fff';
    }
    else{
        themeBack.classList.remove('but-Back')
        themeBack.classList.add('button-background');
        body.classList.remove('body2');
        body.classList.add('body1');
        themeMode.innerHTML = 'Dark mode';
        themeChanger.classList.remove('but2');
        themeChanger.classList.add('themeButton');
        head.classList.remove('head2');
        head.classList.add('head1');
        projectsAndContact.classList.remove('projects_contact2');
        projectsAndContact.classList.add('projects_contact1');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-moon');
        icon.style.color = 'black';
    }
}

function openOptions() {
    if(currentWebWidth <= 630){
        iconContainer.style.color = 'transparent';
        barMenu.classList.remove('barMenu');
        barMenu.classList.add('menuIsActive');
        body.classList.add('disabledBody')
        clearTimeout(invalid)
        videos[currentVideoIndex].pause()
    }
}


// This code is incomplete(what's left: color change when theme is changed)
function closeMenu() {
    if(currentWebWidth <= 630){
        barMenu.classList.remove('menuIsActive');
        barMenu.classList.add('barMenu');
        iconContainer.style.color = '#fff';
        body.classList.remove('disabledBody')
        videos[currentVideoIndex].play()
        startVideoAnimation()
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


// setInterval(function() {
//     location.reload();
// }, 5000);

// transition: all 500ms ease-in-out;


