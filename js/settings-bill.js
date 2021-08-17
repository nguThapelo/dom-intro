// get a reference to the sms or call radio buttons
//const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
//const totalSettings = document.querySelector(".totalSettings");

const setting = document.querySelector(".setting");

const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");

const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const addButton = document.querySelector(".addButton");

//get a reference to the 'Update settings' button
const updateSetting = document.querySelector(".updateSettings");

// create a variables that will keep track of all totals.
var callTotal = 0;
var smsTotal = 0;

// create a variables that will keep track of all the settings
var callSettingCost = 0;
var smsSettingCost = 0;

var warningLevel = 0;
var criticalLevel = 0;

//Update Settings function
function updateSettingF() {

    setting.classList.remove("warning");
    setting.classList.remove("danger");

    var callCost = Number(callCostSetting.value);
    if(callCost != 0) {
        callSettingCost = callCost;
        callTotal = 0;
    }

    var smsCost = Number(smsCostSetting.value);
    if(smsCost != 0) {
        smsSettingCost = smsCost;
        smsTotal = 0;
        }

    var warning = Number(warningLevelSetting.value);
    if(warning != callSettingCost - smsSettingCost) {
        warningLevel = warning;
        }

    var critical = Number(criticalLevelSetting.value);
    if(critical != callSettingCost - smsSettingCost) {
        criticalLevel = critical;
        } 
}

//add an event listener for when the 'Update settings' button is pressed
updateSetting.addEventListener('click', updateSettingF);

// add button functionality 

function Button() {
    //in the event listener get the value from the billItemTypeRadio radio buttons
    const billItemTypeWithRadio = document.querySelector(".billItemTypeWithSettings:checked");
    var billItem =  billItemTypeWithRadio.value;

    if (billItem == "call") {
        callTotal += callSettingCost;

    } else if (billItem == "sms") {
        smsTotal += smsSettingCost;
    }
callTotalSettings.innerHTML = callTotal.toFixed(2);
smsTotalSettings.innerHTML = smsTotal.toFixed(2);

// * display the latest total on the screen.
    var totalCosts = callTotal + smsTotal;
    var roundedTotal = totalCosts.toFixed(2);

// * check the value thresholds and display the total value in the right color.
    if(totalCosts >= warningLevel && totalCosts < criticalLevel) {
        setting.classList.add("warning");

    } else if (totalCosts >= criticalLevel) {
    setting.classList.add("danger");
    roundedTotal = criticalLevel;
    }
    setting.innerHTML = "R"+roundedTotal;
   
}
//add an event listener for when the add button is pressed
 addButton.addEventListener('click', Button);



