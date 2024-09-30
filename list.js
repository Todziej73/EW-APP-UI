'use strict';

//* ELEMENTS 

const containerList = document.querySelector('.list');
const selectElArr = document.querySelectorAll('.filterRow select');
const resetFiltersBtn = document.querySelector('.resetBtn');
const openFilterBtn = document.querySelector('.openFilters');
const filterRow = document.querySelector('.filterRow')
let transactionCount = 1;

const addTransaction = function (htmlType, htmlAcc, htmlMovType, htmlCurrency, accName, date, typeOfMov, type, count, price, currency) {
  const html = `
  <div class="listEl kind--${htmlType} acc--${htmlAcc} mov--${htmlMovType} currency--${htmlCurrency}">
        <div class="data">${transactionCount++}</div>
        <div class="data">${date}</div>
        <div class="data">${accName}</div>
        <div class="data">${typeOfMov}</div>
        <div class="data">${type}</div>
        <div class="data">${currency}</div>
        <div class="data">${count}</div>
        <div class="data">${price}</div>
      </div>
    </div>
  `;
  containerList.insertAdjacentHTML('beforeend', html);
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
  addTransaction('stock', 'acc1', 'buy', 'usd', 'konto1', '05-09-2023', 'zakup', 'akcja', '200', '2500', 'USD');
  addTransaction('crypto', 'acc2', 'buy', 'pln', 'konto2', '19-07-2023', 'zakup', 'bitcoin', '0.1', '12000', 'PLN');
  addTransaction('bond', 'acc3', 'sell', 'eur', 'konto3', '07-11-2023', 'sprzedaż', 'obligacja', '300', '35000', 'EUR');
  addTransaction('realEstate', 'acc4', 'buy', 'pln', 'konto4', '25-06-2023', 'zakup', 'działka', '1', '150000', 'PLN');
  addTransaction('commodity', 'acc5', 'buy', 'usd', 'konto5', '13-08-2023', 'zakup', 'platyna', '15', '35000', 'USD');
  addTransaction('stock', 'acc1', 'sell', 'eur', 'konto1', '02-03-2023', 'sprzedaż', 'akcja', '75', '9000', 'EUR');
  addTransaction('crypto', 'acc2', 'sell', 'usd', 'konto2', '09-04-2023', 'sprzedaż', 'ethereum', '5', '8000', 'USD');
  addTransaction('bond', 'acc3', 'buy', 'pln', 'konto3', '21-05-2023', 'zakup', 'obligacja', '150', '15000', 'PLN');
  addTransaction('realEstate', 'acc4', 'sell', 'eur', 'konto4', '15-12-2023', 'sprzedaż', 'biuro', '1', '1200000', 'EUR');
  addTransaction('commodity', 'acc5', 'sell', 'pln', 'konto5', '27-10-2023', 'sprzedaż', 'złoto', '3', '90000', 'PLN');
  addTransaction('bond', 'acc5', 'buy', 'eur', 'konto5', '12-01-2023', 'zakup', 'obligacja', '500', '50000', 'EUR');
  addTransaction('realEstate', 'acc1', 'buy', 'usd', 'konto1', '18-06-2023', 'zakup', 'biuro', '1', '1000000', 'USD');
  addTransaction('stock', 'acc1', 'buy', 'pln', 'konto1', '12-03-2023', 'zakup', 'akcja', '300', '12000', 'PLN');
  addTransaction('crypto', 'acc2', 'sell', 'eur', 'konto2', '23-06-2023', 'sprzedaż', 'dogecoin', '10000', '3000', 'EUR');
addTransaction('bond', 'acc3', 'buy', 'usd', 'konto3', '04-01-2023', 'zakup', 'obligacja', '500', '25000', 'USD');
addTransaction('realEstate', 'acc4', 'sell', 'pln', 'konto4', '17-02-2023', 'sprzedaż', 'dom', '1', '500000', 'PLN');
addTransaction('commodity', 'acc5', 'buy', 'eur', 'konto5', '30-07-2023', 'zakup', 'srebro', '25', '4500', 'EUR');
addTransaction('stock', 'acc1', 'sell', 'usd', 'konto1', '05-10-2023', 'sprzedaż', 'akcja', '150', '5000', 'USD');
addTransaction('crypto', 'acc2', 'buy', 'pln', 'konto2', '16-04-2023', 'zakup', 'litecoin', '25', '12000', 'PLN');
addTransaction('bond', 'acc3', 'sell', 'eur', 'konto3', '09-09-2023', 'sprzedaż', 'obligacja', '200', '18000', 'EUR');
addTransaction('realEstate', 'acc4', 'buy', 'usd', 'konto4', '28-08-2023', 'zakup', 'apartament', '1', '900000', 'USD');
addTransaction('commodity', 'acc5', 'sell', 'pln', 'konto5', '19-11-2023', 'sprzedaż', 'platyna', '10', '70000', 'PLN');
addTransaction('stock', 'acc1', 'buy', 'eur', 'konto1', '22-07-2023', 'zakup', 'akcja', '50', '5000', 'EUR');
addTransaction('crypto', 'acc2', 'sell', 'usd', 'konto2', '10-05-2023', 'sprzedaż', 'bitcoin', '0.25', '7000', 'USD');
addTransaction('bond', 'acc3', 'buy', 'pln', 'konto3', '14-06-2023', 'zakup', 'obligacja', '300', '20000', 'PLN');
addTransaction('realEstate', 'acc4', 'sell', 'eur', 'konto4', '29-03-2023', 'sprzedaż', 'biuro', '1', '1400000', 'EUR');
addTransaction('commodity', 'acc5', 'buy', 'usd', 'konto5', '11-12-2023', 'zakup', 'złoto', '7', '35000', 'USD');

}


addAllTransactions();
let transactions = [];

let filters = {
  acc: '',
  mov: '',
  kind: '',
  currency: '',
  
  clear: function(){
    this.acc = '';
    this.mov = '';
    this.kind = '';
    this.currency = '';
  }
}



for(const el of document.querySelectorAll('.listEl')){
  transactions.push(el);
}



function refreshList() {
  containerList.innerHTML = '';
  const transactionsFiltered = transactions
    .filter(el => filters.acc == '' || el.classList.contains(`acc--${filters.acc}`))
    .filter(el => filters.mov == '' || el.classList.contains(`mov--${filters.mov}`))
    .filter(el => filters.kind == '' || el.classList.contains(`kind--${filters.kind}`))
    .filter(el => filters.currency == '' || el.classList.contains(`currency--${filters.currency}`));

  transactionsFiltered.forEach(function (el) {
    const html = el;
    console.log(html);
    containerList.innerHTML += el.outerHTML;
  });


}

const filter = function (selectEl, type) {
  const currentValue = document.querySelector(`.${selectEl}`).value;
  filters[type] = currentValue == 'all' ? '' : currentValue;
  console.log(filters);

  refreshList();
}




openFilterBtn.addEventListener('click', function(){
  console.log(1);
  filterRow.classList.toggle('grid');
  filterRow.style.animation = 'showRow 2s linear 1';
  filterRow.style.opacity = '100';
});

resetFiltersBtn.addEventListener('click', function(){
  filters.clear();
  refreshList();
  for(const el of selectElArr){
    el.selectedIndex = 0;
  }
});


// showRow 1.5s linear 1;

openFilterBtn.addEventListener('click', function(){
  console.log(1);
  filterRow.style.display = 'grid';
  filterRow.style.animation = 'showRow 2  s linear 1';
  filterRow.style.opacity = '100';
});

