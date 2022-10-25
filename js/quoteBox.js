document.getElementById("green").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "rgb(50, 199, 50)";
    document.getElementById("quote").style.color = "red";
    document.getElementById("box").style.borderColor = "blue";
});

document.getElementById("yellow").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "rgb(236, 236, 61)";
    document.getElementById("quote").style.color = "blue";
    document.getElementById("box").style.borderColor = "green";
});

document.getElementById("blue").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "rgb(99, 99, 241)";
    document.getElementById("quote").style.color = "yellow";
    document.getElementById("box").style.borderColor = "red";
});


document.getElementById("orange").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("quote").style.color = "green";
    document.getElementById("box").style.borderColor = "rgb(64,224,208)";
});
