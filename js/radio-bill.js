const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo")
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var totalCalls = 0;
var totalSmses = 0;

function totalBill() {

    function makeCall() {
        totalCalls += 2.75;
    }

    function sendSms() {
        totalSmses += 0.75;
    }

    function totalCost() {
        totalCalls + totalSmses
    }

    function action(value) {
        if (value.includes("c")) {
            makeCall();
        } else if (value.includes("s")) {
            sendSms();
        }

    }
    return {
        makeCall,
        sendSms,
        action,
        totalCost
    }
}
const radio = totalBill();

radioBillAddBtn.addEventListener('click', function () {
    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billtype = checkedRadioBtn.value;
    radio.action(billtype);


    callTotalTwo.innerHTML = totalCalls.toFixed(2);
    smsTotalTwo.innerHTML = totalSmses.toFixed(2);

    var TotalCost = totalCalls + totalSmses;
    totalTwo.innerHTML = TotalCost.toFixed(2);

    if (TotalCost > 50) {
        totalTwo.classList.add("danger");
    }
    else if (TotalCost >= 30 && TotalCost < 50) {
        totalTwo.classList.add("warning");
    }
});
