// document.getElementById("btn-go").addEventListener('click', convert);


function convert(){
    var input = parseFloat(document.getElementById("input").value);
    
    var result = "";
    var selectedOption = document.getElementById("select").value;

    var unit = "";

    if(selectedOption == "lb to kg"){
        result = parseFloat(input * 0.453592);
        unit = "kg";
    }else if(selectedOption == "kg to lb"){
        result = parseFloat(input * 2.20462);
        unit = "lb";
    }

    document.getElementById("answer").innerHTML = result;
    document.getElementById("unit").innerHTML = unit;
}