const calculateBtn = document.querySelector(".calculateBtn");
const billTotals = document.querySelector(".billTotal");
const billStringX = document.querySelector(".billString");
const billTotalE = document.querySelector(".total");

var billTotal = 0;

function usePhone() {

  function makeCall() {
    billTotal += 2.75;
  }

  function sendSms() {
    billTotal += 0.75;
  }

  function action(value) {
    if (value.includes("c")) {
      makeCall();
    } else if (value.includes("s")) {
      sendSms();
    }
  }

  function total(){
    billTotal.toFixed(2);
  }

  return {
    makeCall,
    sendSms,
    action,
    total
  }
}

const calculateBill = usePhone();

function calculateBtnClicked() {

  var billString = billStringX.value;
  var billE = billString.split(",");
  var billTotal = 0;

  for (var i = 0; i < billE.length; i++) {
    var bills = billE[i].trim();

    if (bills.includes("c")) {
      billTotal += 2.75;

    } else if (bills.includes("s")) {
      billTotal += 0.75;
    }
    calculateBill.action(bills);
  }

  var roundBillTotal = billTotal.toFixed(2);

  function styleRoundedBillTotal(roundBillTotal) {

    var Total = Number(roundBillTotal);

    billTotalE.classList.remove("danger");
    billTotalE.classList.remove("warning");

    if (Total > 30) {
      billTotalE.classList.add("danger");

    } else if (Total >= 20 && Total < 30) {
      billTotalE.classList.add("warning");

    }

  }
  billTotals.innerHTML = roundBillTotal;
  styleRoundedBillTotal(roundBillTotal);
}

calculateBtn.addEventListener("click", calculateBtnClicked);

