        //clear it button function
        function clearit() {
            document.getElementById("magic-input").value = "";
          }
  
          //Capital And Small Letter button function
          function capitalze() {
            var uptxt = document.getElementById("magic-input").value;
  
            if (document.getElementById("capitalzer").value == "NO") {
              document.getElementById("magic-input").value = uptxt.toUpperCase();
              document.getElementById("capitalzer").value = "YES";
              console.log("yO Capital Done");
            } else {
              document.getElementById("magic-input").value = uptxt.toLowerCase();
              document.getElementById("capitalzer").value = "NO";
              console.log("yO Smaller Done");
            }
          }
  
          //Sort button function
          function sortinput() {
            if (document.getElementById("sortinput").value == "NO") {
              //line gula re sort
              document.getElementById("sortinput").value = "YES";
  
              var forsort = document.getElementById("magic-input").value;
              var inputarray = forsort.split("\n");
              var newarray = "";
              inputarray.sort();
              for (var i = 0; i < inputarray.length; i++) {
                //newarray = newarray + inputarray[i];
                if (i != inputarray.length - 1) {
                  newarray = newarray + inputarray[i] + "\n";
                } else {
                  newarray = newarray + inputarray[i];
                }
              }
              document.getElementById("magic-input").value = newarray;
              console.log("line gula re sort");
            } else {
              // line er modday sort
              var forsort = document.getElementById("magic-input").value;
              var inputarray = forsort.split("\n");
              var array = "";
  
              for (let i = 0; i < inputarray.length; i++) {
                var newarray = inputarray[i].split("");
                var arrayLettar = "";
                newarray.sort();
                for (let j = 0; j < newarray.length; j++) {
                  arrayLettar = arrayLettar + newarray[j];
                  console.log(arrayLettar + " " + j);
                }
                array = array + arrayLettar + "\n";
  
                console.log(array + " " + i);
              }
              document.getElementById("magic-input").value = array;
              console.log("line er modday sort");
            }
          }
  
          //Reversae button function
          function reverse() {
            var forsort = document.getElementById("magic-input").value;
            var inputarray = forsort.split("\n");
            var newarray = "";
            inputarray.reverse();
            for (var i = 0; i < inputarray.length; i++) {
              //newarray = newarray + inputarray[i];
              if (i != inputarray.length - 1) {
                newarray = newarray + inputarray[i] + "\n";
              } else {
                newarray = newarray + inputarray[i];
              }
            }
            document.getElementById("magic-input").value = newarray;
            console.log("line gula re reverse");
          }
  
          // button function
          function blank() {
            var forsort = document.getElementById("magic-input").value;
            var inputarray = forsort.split("\n");
            var anotherarray = "";
  
            inputarray.forEach((magicline) => {
              if (magicline === "") {
                return;
              }
              anotherarray += magicline.trim() + "\n";
            });
  
            document.getElementById("magic-input").value = anotherarray;
          }
          function addnumb() {
            var forsort = document.getElementById("magic-input").value;
            var inputarray = forsort.split("\n");
            var newarray = "";
  
            for (var i = 0; i < inputarray.length; i++) {
              //newarray = newarray + inputarray[i];
              if (i != inputarray.length - 1) {
                newarray += i + 1 + ") " + inputarray[i] + "\n";
              } else {
                newarray += i + 1 + ") " + inputarray[i];
              }
            }
            document.getElementById("magic-input").value = newarray;
            console.log("line gula re reverse");
          }
          function shuffle() {
            var forsort = document.getElementById("magic-input").value;
            var inputarray = forsort.split("\n");
            var newarray = "";
            inputarray.sort(function (a, b) {
              return 0.5 - Math.random();
            });
            for (var i = 0; i < inputarray.length; i++) {
              //newarray = newarray + inputarray[i];
              if (i != inputarray.length - 1) {
                newarray = newarray + inputarray[i] + "\n";
              } else {
                newarray = newarray + inputarray[i];
              }
            }
            document.getElementById("magic-input").value = newarray;
            console.log("Random");
          }