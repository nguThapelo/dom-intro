//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//get a reference to the Total
const billTotalSpanElement = document.querySelector(".Total");

//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {

//  * this function should read the string value entered - split it on a comma.
  var billString = billStringElement.value;
  var billItems = billString.split(",");
  var billTotal = 0;

//  * loop over all the entries in the the resulting list
for (var i = 0; i < billItems.length; i++) {

  //trim the spaces that might occur
    var billItem = billItems[i].trim();

//  * check if it is a call or an sms and add the right amount to the overall total
if (billItem.includes("c")) {
      billTotal += 2.75;

} else if (billItem.includes("s")) {
      billTotal += 0.75;
    }
  }

//  * once done looping over all the entries - display the total onto the screen in the billTotal element
  var roundedBillTotal = billTotal.toFixed(2);

  //link the function to a click event on the calculate button
  function styleTotalColor(roundedBillTotal) {

    const currentTotal = Number(roundedBillTotal);

    //remove class
    billTotalSpanElement.classList.remove("danger");
    billTotalSpanElement.classList.remove("warning");

        // to display red when cost if greater or equal 30
    if (currentTotal >= 30) {
      billTotalSpanElement.classList.add("danger");
    } 
        // to display orange when cost if greater or equal 20 and less than 30
    else if (currentTotal >= 20 && currentTotal < 30) {
      billTotalSpanElement.classList.add("warning");
    }
  }
  billTotalElement.innerHTML = roundedBillTotal;
  styleTotalColor(roundedBillTotal);
}
//event listener 
calculateBtn.addEventListener("click", calculateBtnClicked);

