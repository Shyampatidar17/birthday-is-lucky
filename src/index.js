import "./styles.css";

var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");

function checkBirthdayIsLucky() {
  // console.log(dateOfBirth.value, luckyNumber.value );
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  console.log(sum);
}
function calculateSum(dob) {
  // return 12;
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.lenth; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthdayIsLucky);
