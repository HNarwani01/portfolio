let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function (event) {
        let tab = a.dataset.tab;
        if (tab !== null && tab !== active) {

            let activeOld = document.querySelector('.tab.active');
            if (activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})
let imageElement = document.querySelectorAll('#project .container .list .item img');
imageElement.forEach(element => {
    element.addEventListener('click', () => {
        let pageData = element.dataset.id;
        switch (pageData) {
            case 'pj-1':
                window.open('https://hnarwani01.github.io/Js-projects/SnakeGame/', '_blank');
                break;
            case 'pj-2':
                window.open('http://shikshaseshikhartak.org/', '_blank');
                break;
            case 'pj-3':

                window.open('https://hnarwani01.github.io/Js-projects/Card-Flip/', '_blank');
                break;
            case 'pj-4':
                window.open('https://hnarwani01.github.io/Js-projects/Tic-Tak-To/', '_blank');

                break;
            case 'pj-5':
                window.open('https://hnarwani01.github.io/Js-projects/rock-paper-scissor/', '_blank');

                break;
            case 'pj-6':

                window.open('https://hnarwani01.github.io/Frontend/', '_blank');
                break;

            default:
                break;
        }
    })
})
// https://hnarwani01.github.io/MAADHVIII-2.0/
// http://shikshaseshikhartak.org/
// https://hnarwani01.github.io/Js-projects/
// https://hnarwani01.github.io/Frontend/