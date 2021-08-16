// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne")

//create a variable that will keep track of the total bill

var totalCalls = 0;
var totalSmses = 0;

//create a function that will calculate the total bill
function totalBill(){

    //trim 
    var billTypeEntered = billTypeText.value.trim();

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
if (billTypeEntered.includes("c")){
    totalCalls += 2.75;
}
else if (billTypeEntered.includes("s")){
    totalSmses += 0.75;
}
// * add the appropriate value to the running total
callTotalOne.innerHTML = totalCalls.toFixed(2);
    smsTotalOne.innerHTML = totalSmses.toFixed(2);

    var totalCost = totalCalls + totalSmses;
    totalOne.innerHTML = totalCost.toFixed(2);

// * add nothing for invalid values that is not 'call' or 'sms'.
if (totalCost > 50){

    //display red when total cost is greater than 50
    totalOne.classList.add("danger");
}

//display orange when total cost is less than 50 or greater equal 30 
else if (totalCost >= 30 && totalCost < 50){
    totalOne.classList.add("warning");
}
}

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', totalBill);