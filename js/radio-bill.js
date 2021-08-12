// get a reference to the sms or call radio buttons
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo")

//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalSms = 0;

//create the function that will calculate total bill when the bill type button is pressed
function textBillTotal(){

//in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtnElement = document.querySelector("input[name='billItemType']:checked");

// * add the appropriate call value to the total
if (checkedRadioBtnElement){
    if (checkedRadioBtnElement.value === "call"){
        totalCalls += 2.75;
    }
    // * add the appropriate sms value to the total

    else if (checkedRadioBtnElement.value === "sms"){
        totalSms += 0.75;
    } 
}

// * add nothing for invalid values that is not 'call' or 'sms'.
callTotalTwoElement.innerHTML = totalCalls.toFixed(2);
smsTotalTwoElement.innerHTML = totalSms.toFixed(2);
//declaire
var TotalCost = totalCalls + totalSms;

totalTwoElement.innerHTML = TotalCost.toFixed(2);

    // to display red when cost if greater than 50
if (TotalCost > 50){
    totalTwoElement.classList.add("danger");
}

    // to display orange when cost if greater or equal 30 and less than 50
    else if (TotalCost >= 30 && TotalCost < 50){
    totalTwoElement.classList.add("warning");
}
}
//add an event listener for when the add button is pressed
radioBillAddBtnElement.addEventListener('click', textBillTotal);