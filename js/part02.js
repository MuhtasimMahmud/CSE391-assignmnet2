document.getElementById("input").addEventListener("input", function(){

    var inputValues = document.getElementById("input").inputValues;
    inputValues = inputValues.replace(/\s+/g, "");
    var inputArray = inputValues.split(",");
    inputArray = calculateArray.filter((n) => n);


    var max = parseInt(Math.max(...inputArray));
    document.getElementById("max").innerHTML = Math.max(
      ...inputArray
    );

    // console.log(Math.min(...calculateArray));
    // document.getElementById("min").innerHTML = Math.min(
    //   ...calculateArray
    // );

    // console.log(sum(calculateArray));
    // document.getElementById("sum").innerHTML = sum(calculateArray);

    // console.log(avg(calculateArray));
    // document.getElementById("avg").innerHTML = avg(calculateArray);

    // console.log(calculateArray.reverse().join(","));
    // document.getElementById("rev").innerHTML = calculateArray
    //   .reverse()
    //   .join(",");
    // rev(calculateArray);

});