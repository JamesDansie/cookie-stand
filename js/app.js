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
var formEl = document.getElementById('cookieForm');
var time = ['6 AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
//*****************Constructor********************

function CookieLocation(name, customerMinPerHour, customerMaxPerHour, cookieAverage){
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
CookieLocation.prototype.getRandomInt = function(min, max) {
  return Math.round(Math.random() * (max-min+1)) + min;
};

//make a cookie count
CookieLocation.prototype.cookieCount = function(){
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

//Render method for tables
CookieLocation.prototype.renderTable = function(){
  this.cookieCount();

  //declaring elements
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //Writing the first element with the name
  addElement('th', this.name, trEl);

  //looping through the sale array
  for(var index = 0; index < time.length; index++){
    addElement('td', this.locSalesArr[index], trEl);
  }

  //Adding the total at the end
  addElement('td', this.cookieTotalNum, trEl);
};

//*************Helper Functions */

//Add element function
function addElement(childElType, childText, ParentEl){
  var childEl = document.createElement(childElType);
  childEl.textContent = childText;
  ParentEl.appendChild(childEl);
}

//Makes the Header
function makeHeader(){
  //declaring elements
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //Writing the first element with 'location'
  addElement('th', 'Location', trEl);

  //Writing the time stample for the rest of the header
  for(var i = 0; i < time.length; i++){
    addElement('th', time[i], trEl);
  }

  // //Writing the total at the end
  addElement('th', 'Total', trEl);
}

//Makes the Footer
function makeFooter(){
  //declaring elements
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  //Writing the first element with 'Sum'
  addElement('th', 'Hourly Total', trEl);

  //Writing the time stample for the rest of the header
  for(var i = 0; i < time.length; i++){
    var locSum = 0;
    for(var loc = 0; loc < locationsArr.length; loc++){
      locSum += locationsArr[loc].locSalesArr[i];
    }
    addElement('td', locSum, trEl);
  }

  //Writing the total at the end
  var totSum = 0;
  for(var loc = 0; loc < locationsArr.length; loc++){
    totSum += locationsArr[loc].cookieTotalNum;
  }
  addElement('td', totSum, trEl);
}

//***********Event Handler*************** */
//***********************Executable Code********************/

new CookieLocation('1st and Pike', 23, 65, 6.3);
new CookieLocation('SeaTac', 3, 24, 1.2);
new CookieLocation('Seattle Center', 11, 38, 3.7);
new CookieLocation('Capital Hill', 20, 38, 2.3);
new CookieLocation('Alki', 2, 16, 4.6);

formEl.addEventListener('submit', function(e){
  e.preventDefault();
  var username = e.target.cookieStandName.value;
  var custMin = e.target.customersMinPerHour.value;
  var custMax = e.target.customersMaxPerHour.value;
  var cookieAvg = e.target.cookieAvgPerSale.value;

  custMin = Number(custMin);
  custMax = Number(custMax);
  cookieAvg = Number(cookieAvg);

  var i = tableEl.rows.length;
  console.log(i-1);
  tableEl.deleteRow(i-1);

  new CookieLocation(username, custMin, custMax, cookieAvg);
  var j = tableEl.rows.length;
  locationsArr[j-1].renderTable();
  makeFooter();

});

console.log(locationsArr);

//Make the header
makeHeader();

//Make the Body
for(var index = 0; index < locationsArr.length; index++){
  locationsArr[index].renderTable();
}

//if ambitious make the footer
makeFooter();
