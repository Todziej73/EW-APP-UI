// ! ELEMENTS


//* PAGES
const headPanel = document.querySelector('.page1');
const transactionList = document.querySelector('.page2');
const form = document.querySelector('.page3');
const pagesArr = [];
pagesArr.push(headPanel, transactionList, form);

//* ELEMENTS
const pageTitle = document.querySelector('.topBar h1');

//*BUTTONS
const navBarElements = Array.from(document.querySelectorAll('.sideBarEl'));


navBarElements.forEach(function(el, i){
  el.setAttribute('onclick', `openTab(${i+1})`)
});

const openTab = function(tabNr){
  pagesArr.forEach(el => el.classList.add('closed'));

  if(tabNr <= pagesArr.length){
    pagesArr[tabNr - 1].classList.remove('closed');

    switch(tabNr){
      case 1:
        pageTitle.textContent = 'Panel Główny';
        break;
      case 2:
        pageTitle.textContent = 'Nowa Transakcja';
        break;
      case 3:
        pageTitle.textContent = 'Transakcje';
        break;
    }
  }
}






