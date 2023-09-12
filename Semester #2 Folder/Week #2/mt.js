function myFun()
            {
                var x = document.getElementById("txt1").value;
                x = parseInt(x);
                var y = document.getElementById("txt2").value;
                y = parseInt(y);
                var result = x + y;
                document.getElementById("demo").innerHTML = result;
            }