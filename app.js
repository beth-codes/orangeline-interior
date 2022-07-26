// DOM ELEMENTS
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu i');
const navDisplay = document.querySelector('.nav-cont');

menu.addEventListener('click', () => {
    // menu.style.backgroundColor = 'red';
    let menuAtt = menu.getAttribute('class');
    console.log(menuAtt)
    if (menuAtt === "fa-solid fa-bars") {
        console.log('true')
        navDisplay.style.display = 'block';
        menu.setAttribute('class', "fa-solid fa-x")
        logo.style.opacity = '0';

    } else {
        console.log('false')
        menu.style.zIndex = 10000;
        menu.style.justifyContent = 'end'
        navDisplay.style.display = 'none';
        logo.style.opacity = '100';
        menu.setAttribute('class', "fa-solid fa-bars");

    }
})

// Commercial page pop up js
const popupElement = document.querySelector('.product-img-display');
const bodyEl = document.querySelector('body');
const imgEl = document.querySelector('#popup-img');
const popupContentEl = document.querySelector('#popup-content');
const closeIconPopup = document.querySelector('.close-icon i')
const remainingEls = document.querySelectorAll('.toggle-for-popup');

console.log(closeIconPopup)

const openPopup = (imgSrc, content) => {
    // bodyEl.style.overflow = 'hidden';
    popupElement.style.display = 'flex';
    // set the popup image
    imgEl.src = imgSrc;
    // set the pop content
    popupContentEl.innerHTML = content;
    for (let el of remainingEls) {
        console.log("el", el);
        el.style.display = 'none';
    }
}

const closePopup = () => {
    // bodyEl.style.overflow = 'auto';
    popupElement.style.display = 'none';
    for (let el of remainingEls) {
        console.log("el", el);
        el.style.display = 'flex';
    }
}





