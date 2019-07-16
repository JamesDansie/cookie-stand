'use strict';

//**********Given Store data********* */
// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

//psuedo code
//in: customer min/max and avg cookie
//out: list of cookies per hour and a total

// total = 0
// locSales = [];
// for index 6am to 8pm
//   # sales/hr = random(min, max)
//   #cookie/hr = # sales/hr * avg cookies/sale
//  total += cookie/hr
//  add cookie/hr to locSales

// 1st and Pike	23	65	6.3
var pike = {
  ulEl: document.getElementById('pike'),
  custMin: 23,
  custMax: 65,
  cookieAvg: 6.3,
  cookieTotal: 0,
  locSales: [],
  time: ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (max-min+1)) + min;
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
      console.log(salesHr);
    }
  },

  render: function(){
    for(var index = 0; index < this.time.length; index++){
      // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');

      // 2. give it content - name
      liEl.textContent = `${this.time[index]}: ${this.locSales[index]} cookies`;

      // 3. append it to the DOM
      this.ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `Total cookes: ${this.cookieTotal}`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  },
};

// SeaTac Airport	3	24	1.2
var sea = {
  ulEl: document.getElementById('sea'),
  custMin: 3,
  custMax: 24,
  cookieAvg: 1.2,
  cookieTotal: 0,
  locSales: [],
  time: ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (max-min+1)) + min;
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
      console.log(salesHr);
    }
  },

  render: function(){
    for(var index = 0; index < this.time.length; index++){
      // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');

      // 2. give it content - name
      liEl.textContent = `${this.time[index]}: ${this.locSales[index]} cookies`;

      // 3. append it to the DOM
      this.ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `Total cookes: ${this.cookieTotal}`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  },
};

// Seattle Center	11	38	3.7
var center = {
  ulEl: document.getElementById('center'),
  custMin: 11,
  custMax: 38,
  cookieAvg: 3.7,
  cookieTotal: 0,
  locSales: [],
  time: ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (max-min+1)) + min;
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
      console.log(salesHr);
    }
  },

  render: function(){
    for(var index = 0; index < this.time.length; index++){
      // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');

      // 2. give it content - name
      liEl.textContent = `${this.time[index]}: ${this.locSales[index]} cookies`;

      // 3. append it to the DOM
      this.ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `Total cookes: ${this.cookieTotal}`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  },
};

// Capitol Hill	20	38	2.3
var capHill = {
  ulEl: document.getElementById('capHill'),
  custMin: 20,
  custMax: 38,
  cookieAvg: 2.3,
  cookieTotal: 0,
  locSales: [],
  time: ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (max-min+1)) + min;
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
      console.log(salesHr);
    }
  },

  render: function(){
    for(var index = 0; index < this.time.length; index++){
      // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');

      // 2. give it content - name
      liEl.textContent = `${this.time[index]}: ${this.locSales[index]} cookies`;

      // 3. append it to the DOM
      this.ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `Total cookes: ${this.cookieTotal}`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  },
};

// Alki	2	16	4.6
var alki = {
  ulEl: document.getElementById('alki'),
  custMin: 2,
  custMax: 16,
  cookieAvg: 4.6,
  cookieTotal: 0,
  locSales: [],
  time: ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (max-min+1)) + min;
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
      console.log(salesHr);
    }
  },

  render: function(){
    for(var index = 0; index < this.time.length; index++){
      // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');

      // 2. give it content - name
      liEl.textContent = `${this.time[index]}: ${this.locSales[index]} cookies`;

      // 3. append it to the DOM
      this.ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `Total cookes: ${this.cookieTotal}`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  },
};

var stores = [pike, sea, center, capHill, alki];
for(var index = 0; index < stores.length; index++){
  stores[index].cookieCount();
  stores[index].render();
}

