// get a reference to the sms or call radio buttons
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo")

//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalSmses = 0;

//create the function that will calculate total bill when the bill type button is pressed
function totalBill(){

//in the event listener get the value from the billItemTypeRadio radio buttons
var getValue = document.querySelector("input[name='billItemTypeRadio']:checked");

// * add the appropriate call value to the total
if (getValue){
    if (getValue.value.includes("c")){
        totalCalls += 2.75;
    }
    // * add the appropriate sms value to the total

    else if (getValue.value.includes("s")){
        totalSmses += 0.75;
    } 
}

// * add nothing for invalid values that is not 'call' or 'sms'.
callTotalTwo.innerHTML = totalCalls.toFixed(2);
smsTotalTwo.innerHTML = totalSmses.toFixed(2);
//declaire
var TotalCost = totalCalls + totalSmses;

totalTwo.innerHTML = TotalCost.toFixed(2);

    // to display red when cost if greater than 50
if (TotalCost > 50){
    totalTwo.classList.add("danger");
}

    // to display orange when cost if greater or equal 30 and less than 50
    else if (TotalCost >= 30 && TotalCost < 50){
    totalTwo.classList.add("warning");
}
}
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener('click', totalBill);