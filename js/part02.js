//Hero Converter Min Max

const chg = document.getElementById("innumb");

chg.addEventListener("input", chnage);

function chnage() {
  //Take input and convert in to array

  var calcvalue = document.getElementById("innumb").value;
  let calculateArray = calcvalue.split(",");
  calculateArray = calculateArray.filter((n) => n);

  //Call Functions
  console.log(Math.max(...calculateArray));
  document.getElementById("max").innerHTML = Math.max(
    ...calculateArray
  );

  console.log(Math.min(...calculateArray));
  document.getElementById("min").innerHTML = Math.min(
    ...calculateArray
  );

  console.log(sum(calculateArray));
  document.getElementById("sum").innerHTML = sum(calculateArray);

  console.log(avg(calculateArray));
  document.getElementById("avg").innerHTML = avg(calculateArray);

  console.log(calculateArray.reverse().join(","));
  document.getElementById("rev").innerHTML = calculateArray
    .reverse()
    .join(",");
  rev(calculateArray);
}

//sum
function sum(calculateArray) {
  var sum = 0;
  for (var i = 0; i < calculateArray.length; i++) {
    sum += parseFloat(calculateArray[i]);
  }
  return sum;
}

//Average
function avg(calculateArray) {
  var sum = 0;
  for (var i = 0; i < calculateArray.length; i++) {
    sum += parseFloat(calculateArray[i]);
  }
  return sum / calculateArray.length;
}

//Revarse
function rev(calculateArray) {
  calculateArray.reverse();
  for (var i = 0; i < calculateArray.length; i++) {
    calculateArray[i] = ` ${calculateArray[i]}`;
  }
  document.getElementById("rev").innerHTML = calculateArray;
}