'use strict';

//* ELEMENTS 

const containerList = document.querySelector('.list');
const selectElArr = document.querySelectorAll('.filterRow select');
// const [selectAcc, selectMovType, selectType, selectCurrency] = selectElArr;



const addTransaction = function (htmlType, htmlAcc, htmlMovType, htmlCurrency, accName, date, typeOfMov, type, count, price, currency) {
  const html = `
  <div class="listEl type--${htmlType} acc--${htmlAcc} mov--${htmlMovType} currency--${htmlCurrency}">
        <div class="data">${accName}</div>
        <div class="data">${date}</div>
        <div class="data">${typeOfMov}</div>
        <div class="data">${type}</div>
        <div class="data">${count}</div>
        <div class="data">${price}</div>
        <div class="data">${currency}</div>
      </div>
    </div>
  `;
  containerList.insertAdjacentHTML('afterbegin', html);
}


const addAllTransactions = function () {
  addTransaction('stock', 'acc1', 'sell', 'usd', 'konto1', '26-08-2023', 'sprzedaż', 'akcja', '20', '120', 'USD');
  addTransaction('crypto', 'acc2', 'buy', 'eur', 'konto2', '12-07-2023', 'zakup', 'bitcoin', '0.5', '15000', 'EUR');
  addTransaction('bond', 'acc3', 'sell', 'pln', 'konto3', '15-05-2023', 'sprzedaż', 'obligacja', '100', '10000', 'PLN');
  addTransaction('realEstate', 'acc4', 'buy', 'usd', 'konto4', '01-06-2023', 'zakup', 'mieszkanie', '1', '350000', 'USD');
  addTransaction('commodity', 'acc5', 'sell', 'usd', 'konto5', '28-09-2023', 'sprzedaż', 'złoto', '5', '20000', 'USD');
  addTransaction('stock', 'acc1', 'buy', 'pln', 'konto1', '11-11-2023', 'zakup', 'akcja', '50', '600', 'PLN');
  addTransaction('crypto', 'acc2', 'sell', 'eur', 'konto2', '20-10-2023', 'sprzedaż', 'ethereum', '2', '4000', 'EUR');
  addTransaction('stock', 'acc3', 'buy', 'usd', 'konto3', '03-03-2023', 'zakup', 'akcja', '100', '500', 'USD');
  addTransaction('realEstate', 'acc4', 'sell', 'pln', 'konto4', '10-12-2023', 'sprzedaż', 'dom', '1', '750000', 'PLN');
  addTransaction('commodity', 'acc5', 'buy', 'eur', 'konto5', '05-07-2023', 'zakup', 'srebro', '50', '1000', 'EUR');
  addTransaction('bond', 'acc1', 'buy', 'usd', 'konto1', '16-09-2023', 'zakup', 'obligacja', '200', '20000', 'USD');
  addTransaction('crypto', 'acc2', 'sell', 'pln', 'konto2', '22-08-2023', 'sprzedaż', 'litecoin', '10', '5000', 'PLN');
  addTransaction('stock', 'acc3', 'sell', 'eur', 'konto3', '08-04-2023', 'sprzedaż', 'akcja', '150', '7500', 'EUR');
  addTransaction('commodity', 'acc4', 'sell', 'pln', 'konto4', '14-02-2023', 'sprzedaż', 'ropa', '100', '60000', 'PLN');
  addTransaction('bond', 'acc5', 'buy', 'eur', 'konto5', '12-01-2023', 'zakup', 'obligacja', '500', '50000', 'EUR');
  addTransaction('realEstate', 'acc1', 'buy', 'usd', 'konto1', '18-06-2023', 'zakup', 'biuro', '1', '1000000', 'USD');
}
addAllTransactions();
const listHtmlEl = document.querySelectorAll('.listEl')


const enableElements = function (array) {
  for (const el of array) {
    el.classList.remove('none');
  }
}

const filter = function (selectEl, type) {
  enableElements(listHtmlEl);

  const currentValue = document.querySelector(`.${selectEl}`).value;
  console.log(currentValue);
  if (currentValue === 'all') {
    enableElements(listHtmlEl);
  } else {
    const notMatchArr = document.querySelectorAll(`.listEl:not(.${type}--${currentValue})`);
    for (const el of notMatchArr) {
      el.classList.add('none');
    }
  }

}