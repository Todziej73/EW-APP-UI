// ! ELEMENTS

//* ELEMENTS

// Tabs
const tabsArr = Array.from(document.querySelectorAll('.tab'));

const pageTitle = document.querySelector('.topBar h1');

//acc window
const addAccWindow = document.querySelector('.addAccWindow');
const overlay = document.querySelector('.overlay');
const openAccWindowBtn = document.querySelector('.openAccWindowBtn');
const closeAccWindowBtn = document.querySelector('.closeWindowBtn');
const colorSelector = document.querySelector('.ColorSelect');
const addAccBtn = document.querySelector('.addAccBtn');

//sideBar
const sideBarBtns = document.querySelectorAll('.sideBarEl');

//dropDown accounts
const dropDownAcc = document.querySelector('.accountContainer');
const acclist = document.querySelector('.accounts');

//Buttons
const navBarElements = Array.from(document.querySelectorAll('.sideBarEl'));
const [openHeadPanelBtn, openFormBtn, openListBtn] = [...navBarElements]


//* OPENING / CLOSING TABS

navBarElements.forEach(function (el, i) {
  el.setAttribute('onclick', `openTab(${i+1})`)
});

const openTab = function (tabNr) {
  tabsArr.forEach(el => el.classList.remove('open'));
  sideBarBtns.forEach(el => el.classList.remove('active'));

  if (tabNr <= tabsArr.length && !tabsArr[tabNr - 1].classList.contains('open')) {
    tabsArr[tabNr - 1].classList.add('open');
    sideBarBtns[tabNr - 1].classList.add('active');
    switch (tabNr) {
      case 1:
        pageTitle.textContent = 'Panel Główny';
        break;
      case 2:
        pageTitle.textContent = 'Nowa Transakcja';
        break;
      case 3:
        pageTitle.textContent = 'Transakcje';
        break;
      case 4:
        pageTitle.textContent = 'Podsumowanie';
        break;
      case 5:
        pageTitle.textContent = 'Ustawienia';
        break;
    }

  }
}


//* OPENING DROPDOWN MENU  - ACCOUNTS

const toggleAccDropDown = function(){
  acclist.classList.toggle('flex');
}

dropDownAcc.addEventListener('click', function(){
  toggleAccDropDown();
});





//* OPENING ACC WINDOW 

//HANDELING COLORS

const updateAccColor = function () {
  switch (colorSelector.value) {
    case 'red':
      addAccBtn.style.backgroundColor = '#fa5252';
      break;
    case 'green':
      addAccBtn.style.backgroundColor = '#099268';
      break;
    case 'purple':
      addAccBtn.style.backgroundColor = '#be4bdb';
      break;
    case 'blue':
      addAccBtn.style.backgroundColor = '#228be6';
      break;
  }
}



const openAccWindow = function () {
  addAccWindow.style.animationName = 'appear';
  addAccWindow.classList.add('open');
  overlay.classList.add('open');

  colorSelector.selectedIndex = 0;
  updateAccColor();
}

const closeAccWindow = function () {
  addAccWindow.style.animationName = 'vanish';

  setTimeout(() => {
    addAccWindow.classList.remove('open');
    overlay.classList.remove('open');
  }, 1000);
}

// OPENING WINDOW
openAccWindowBtn.addEventListener('click', openAccWindow)

//CLOSING WINDOW
closeAccWindowBtn.addEventListener('click', closeAccWindow);
overlay.addEventListener('click', closeAccWindow)

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && addAccWindow.classList.contains('open')) {
    closeAccWindow();
  }
});


