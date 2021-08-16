// get refences to all the settings fields
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");

//get a reference to the add button
var primary = document.querySelector(".addBtn");

//get references for the setting cost
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");

//
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get a reference to the Update settings button
var updateSettingsElem = document.querySelector(".updateSettings");


var callTotalSetting = 0;
var smsTotalSetting = 0;
var totalSetting = 0;

//
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;

function updateSetting() {
  callCostSetting = Number(callCostSettingElem.value);
  smsCostSetting = Number(smsCostSettingElem.value);
  warningLevelSetting = (warningLevelSettingElem.value);
  criticalLevelSetting = (criticalLevelSettingElem.value);
  colorBehaviour();

}

//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener("click", updateSetting);

function billSettingTotal() {
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var billItemTypeWithSettingsElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (billItemTypeWithSettingsElem) {
    if (totalSetting < criticalLevelSetting) {
      var checkBtn = billItemTypeWithSettingsElem.value;

      if (checkBtn === 'call') {
        callTotalSetting += callCostSetting;

      } else if (checkBtn === 'sms') {
        smsTotalSetting += smsCostSetting;
      }
    }
  }
  // * add the appropriate value to the call / sms total
  callTotalSettingsElem.innerHTML = callTotalSettings.toFixed(2);
  smsTotalSettingsElem.innerHTML = smsTotalSettings.toFixed(2);

  // * add correct value to the overall total
  totalSetting = callTotalSetting + smsTotalSetting;
  totalSettingsElem.innerHTML = totalSetting.toFixed(2);

  // * add nothing for invalid values that is not 'call' or 'sms'.
  colorBehaviour();

// * check the value thresholds and display the total value in the right color.
function colorBehaviour() {
  if (totalSetting >= criticalLevelSetting) {

    //remove style class "orange"
    totalSettingsElem.classList.remove("warning")
    //add style class "red"
    totalSettingsElem.classList.add("danger")
  } else if (totalSetting >= warningLevelSetting && totalSettings < criticalLevelSetting) {

    //remove style class "red"
    totalSettingsElem.classList.remove("danger")
    //add style class "orange"

    totalSettingsElem.classList.add("warning")

  }
      //remove style class

  else {
    totalSettingsElem.classList.remove("danger")
    totalSettingsElem.classList.remove("warning")
  }
}primary.addEventListener("click", billSettingTotal)

};
//add an event listener for when the add button is pressed


