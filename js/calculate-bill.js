//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotals = document.querySelector(".billTotal");

//get a reference to the billString
const billStringX = document.querySelector(".billString");

//get a reference to the billString
const billTotalE = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
function calculateBtnPressed() {

//  * this function should read the string value entered - split it on a comma.
var billString = billStringX.value;
var billE = billString.split(",");
var billTotal = 0;

//  * loop over all the entries in the the resulting list
for (var i = 0; i < billE.length; i++) {

var bills = billE[i].trim();

//  * check if it is a call or an sms and add the right amount to the overall total

if(bills.includes("c")) {
  billTotal += 2.75;
} else if (bills.includes("s")) {
  billTotal += 0.75;
}
}

//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var roundBillTotal = billTotal.toFixed(2);

//link the function to a click event on the calculate button
function styleRoundedBillTotal(roundBillTotal) {

  var Total = Number(roundBillTotal);

    billTotalE.classList.remove("danger");
    billTotalE.classList.remove("warning");

  if(Total > 30) {
      billTotalE.classList.add("danger");
  } else if (Total >= 20 && Total < 30) {
    billTotalE.classList.add("warning");

  }
  
}
billTotals.innerHTML = roundBillTotal;
  styleRoundedBillTotal(roundBillTotal);
}

calculateBtn.addEventListener("click", calculateBtnPressed);


