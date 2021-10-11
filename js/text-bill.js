const billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne")
    
    var totalCalls = 0;
    var totalSmses = 0;

function totalBill() {

    function makeCall() {
        totalCalls += 2.75;
    };

    function sendSms() {
        totalSmses += 0.75;
    };

    function totalCost() {
        return totalCalls + totalSmses;
    };

    function action(value) {
        if (value.includes("c")) {
            makeCall();

        } else if (value.includes("s")) {
            sendSms();
        }
    };
    return {
        makeCall,
        sendSms,
        totalCost,
        action
    };
};

const textBill = totalBill();

addToBillBtn.addEventListener('click', function(){
    var billTypeEntered = billTypeText.value.trim();
textBill.action(billTypeEntered);

callTotalOne.innerHTML = totalCalls.toFixed(2);
smsTotalOne.innerHTML = totalSmses.toFixed(2);

var totalCost = totalCalls + totalSmses;
totalOne.innerHTML = totalCost.toFixed(2);

if (totalCost >= 50) {
    totalOne.classList.add("danger");
} else if (totalCost >= 30) {
    totalOne.classList.add("warning");
} 

});


