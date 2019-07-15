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
//  locSales.push(#cookies/hr);

//From this source; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values


var pike = {
  custMin: 23,
  custMax: 65,
  cookieAvg: 6.3,
  cookieTotal: 0,
  locSales: [],
  time: [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],

  getRandomInt: function(min, max){
    return Math.round(Math.random() * (min - max)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  cookieCount: function(){
    for(var index = 0; index < this.time.length; index++){
      var salesHr = this.getRandomInt(this.custMin, this.custMax);
      var cookieHr = Math.round(salesHr * this.cookieAvg);
      this.cookieTotal += cookieHr;
      this.locSales.push(cookieHr);
    }
  }
};

pike.cookieCount();
