const review = document.getElementById('review_clients')
const message = [
    {
        title: 'Как же удобно!',
        text: 'В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально- европейского типа политической культуры, будутпреданы социально - демократической анафеме.',
        avatar: './review_svg/woman.png',
        name: 'Анна Купер',
        link: 'romashka.ru'
    },
    {
        title: 'Теперь мы идем в ногу со временем',
        text: 'А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.',
        avatar: './review_svg/man.png',
        name: 'Андрей Васильев',
        link: 'samogon-ont.ru'
    },
    {
        title: 'Теперь мы идем в ногу со временем',
        text: 'А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.',
        avatar: './review_svg/man.png',
        name: 'Андрей Васильев',
        link: 'samogon-ont.ru'
    }
];

let revieMessage = '';

for (var i = 0; i < message.length; i++) {
    revieMessage += `
<div class="review">
    <div class="review_message">
        <svg width="580" height="272" viewBox="0 0 580 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_1185)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M26 10C22.6863 10 20 12.6863 20 16V224C20 227.314 22.6863 230 26 230H278.843L287.67 240.886C288.87 242.367 291.13 242.367 292.33 240.886L301.157 230H554C557.314 230 560 227.314 560 224V16C560 12.6863 557.314 10 554 10H26Z"
                    fill="white" />
            </g>
            <defs>
                <filter x="0" y="0" width="580" height="271.997" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix type="matrix"
                        values="0 0 0 0 0.160784 0 0 0 0 0.160784 0 0 0 0 0.164706 0 0 0 0.07 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1185" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1185"
                        result="shape" />
                </filter>
            </defs>
        </svg>
        <h3>${message[i].title}</h3>
        <p>${message[i].text}</p>
    </div>
    <div class="review_avatar">
        <img src="${message[i].avatar}" alt="avatar">
            <div class="review_name">
                <h4>${message[i].name}</h4>
                <p>${message[i].link}</p>
            </div>
    </div>
 </div>`
}

review.innerHTML = revieMessage



/*********************************** */




const loginCont = document.getElementById('enterance');
const registerCont = document.getElementById('register');
const menu = document.getElementById('menu_itm');
const registerButton = document.getElementById('register_button');
const registBackground = document.getElementById('enter-register');
const loginButton = document.getElementById('login_button');
const logregdiv = document.getElementById('login');
const enteranceButton = document.getElementsByClassName('enterance_button')
const exit = document.getElementById('exit');
const burger = document.getElementById('burger');
const crosses = document.getElementsByClassName('cross');
let isLoggined = false;


function backAppear() {
    registBackground.style.display = 'block';
}

function backDisappear() {
    registBackground.style.display = 'none';
}

function movedown(element) {
    element.style.top = '50%';
}

function moveleft(element) {
    element.style.left = '50%';
}

function returnBack(element) {
    element.style.removeProperty('left');
    element.style.removeProperty('top');
}

function removeLoreg() {
    returnBack(logregdiv);
        returnBack(loginCont);
        returnBack(registerCont);
        returnBack(menu);
}


function loginned() {
    backDisappear();
    logregdiv.style.display = 'none';
    menu.style.display = 'flex';
    isLoggined = true;
}

function unlog() {
    isLoggined = false;
}



loginButton.onclick = function () {
    backAppear();
    movedown(loginCont);
    if (window.innerWidth <= 700) {
        returnBack(logregdiv);
    }
}

registerButton.onclick = function () {
    backAppear();
    movedown(registerCont);
    if (window.innerWidth <= 700) {
        returnBack(logregdiv);
    }
}

for (let i = 0; i < enteranceButton.length; i++) {
    enteranceButton[i].onclick = function () {
        loginned();
        removeLoreg();
    }
}



for (let i = 0; i < crosses.length; i++) {
    crosses[i].onclick = function () {
        removeLoreg();
        backDisappear(); 
    }
}

exit.onclick = function () {
    unlog();
}

burger.onclick = function () {
    if (isLoggined) {
        backAppear();
        moveleft(menu);
    } else {
        backAppear();
        moveleft(logregdiv);
    }
}



