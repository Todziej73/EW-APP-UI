// ! ELEMENTS


//* PAGES

// const headPanel = document.querySelector('.page1');
// const transactionList = document.querySelector('.page2');
// const form = document.querySelector('.page3');
const tabsArr = Array.from(document.querySelectorAll('.tab'));

//* ELEMENTS
const pageTitle = document.querySelector('.topBar h1');

//*BUTTONS
const navBarElements = Array.from(document.querySelectorAll('.sideBarEl'));
const [openHeadPanelBtn, openFormBtn, openListBtn] = [...navBarElements]





//* OTWIERANIE / ZMIANA ZAKŁADKI

navBarElements.forEach(function(el, i){
  el.setAttribute('onclick', `openTab(${i+1})`)
});

const openTab = function(tabNr){
  tabsArr.forEach(el => el.classList.remove('open'));

  if(tabNr <= tabsArr.length && !tabsArr[tabNr - 1].classList.contains('open')){
      tabsArr[tabNr - 1].classList.add('open');

    switch(tabNr){
      case 1:
        pageTitle.textContent = 'Panel Główny';
        break;
      case 2:
        pageTitle.textContent = 'Nowa Transakcja';
        break;
      case 3:
        pageTitle.textContent = 'Transakcje';
        // document.querySelector('.listBody').style.animation = 'openList 1.5s forwards';
        break;
    }
    
  }
}


//* DODAWANIE KONTA






