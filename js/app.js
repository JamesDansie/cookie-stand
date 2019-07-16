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

var locationsArr = [];
var tableEl = document.getElementById('table');
var time = ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
//*****************Constructor********************

function Location(name, customerMinPerHour, customerMaxPerHour, cookieAverage){
  this.name = name;
  this.customerMinPerHourNum = customerMinPerHour;
  this.customerMaxPerHourNum = customerMaxPerHour;
  this.cookieAverageNum = cookieAverage;
  this.cookieTotalNum = 0;
  this.locSalesArr = [];
  this.ulEl = document.getElementById(this.name);
  locationsArr.push(this);
}

//**************** Prototype Stuff*****************
//random number generator
Location.prototype.getRandomInt = function(min, max) {
  return Math.round(Math.random() * (max-min+1)) + min;
};

//make a cookie count
Location.prototype.cookieCount = function(){
  for(var index = 0; index < time.length; index++) {
    //get random number
    var customersPerHourNum = this.getRandomInt(this.customerMinPerHourNum, this.customerMaxPerHourNum);

    //cookies = customers * cookie average
    var cookiesPerHourNum = Math.round(customersPerHourNum * this.cookieAverageNum);

    //assigning values to arrays
    this.cookieTotalNum += cookiesPerHourNum;
    this.locSalesArr.push(cookiesPerHourNum);
  }
};

//Render method for lists
Location.prototype.renderList = function(){
  this.cookieCount();
  for(var index = 0; index < time.length; index++){
    //got this layout from today's notes
    // render function
    // three things
    // 1. create an element - li
    var liEl = document.createElement('li');

    // 2. give it content - name
    liEl.textContent = `${time[index]}: ${this.locSalesArr[index]} cookies`;

    // 3. append it to the DOM
    this.ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');

  // 2. give it content - name
  liEl.textContent = `Total cookes: ${this.cookieTotalNum}`;

  // 3. append it to the DOM
  this.ulEl.appendChild(liEl);


};

//Render method for tables
Location.prototype.renderTable = function(){
  //declaring elements
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //Writing the first element with the name
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  //looping through the sale array
  for(var index = 0; index < time.length; index++){
    thEl = document.createElement('th');
    thEl.textContent = this.locSalesArr[index];
    trEl.appendChild(thEl);
  }
};

//*************Helper Functions */
//Makes the Header
function makeHeader(){
  //declaring elements
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //Writing the first element with 'location'
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  //Writing the time stample for the rest of the header
  for(var i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);
  }
}

new Location('pike', 23, 65, 6.3);
new Location('sea', 3, 24, 1.2);
new Location('center', 11, 38, 3.7);
new Location('capHill', 20, 38, 2.3);
new Location('alki', 2, 16, 4.6);


makeHeader();

for(var index = 0; index < locationsArr.length; index++){
  locationsArr[index].renderList();
  locationsArr[index].renderTable();
}