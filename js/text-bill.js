// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");

//get a reference to the add button
var addToBillBtnElem = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOneElem = document.querySelector(".callTotalOne");
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne")

var callsTotal = 0;
var smsTotal = 0;

//create a function that will calculate the total bill
function textBillTotal(){
    //trim the spaces that might occur

    var billTypeEntered = billTypeTextElem.value.trim();

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
if (billTypeEntered === "call"){
    callsTotal += 2.75;
}
else if (billTypeEntered === "sms"){
    smsTotal += 0.75;
}
// * add the appropriate value to the running total
callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElem.innerHTML = totalCost.toFixed(2);

// * add nothing for invalid values that is not 'call' or 'sms'.
if (totalCost > 50){

    //display red when total cost is greater than 50
    totalOneElem.classList.add("danger");
}

//display orange when total cost is less than 50 or greater equal 30 
else if (totalCost >= 30 && totalCost < 50){
    totalOneElem.classList.add("warning");
}
}

//add an event listener for when the add button is pressed
addToBillBtnElem.addEventListener('click', textBillTotal);