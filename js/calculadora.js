
    function sumar() {
        var a = document.getElementById("numero1").value;
        var b = document.getElementById("numero2").value;
        var r = parseInt(a) + parseInt(b);
        document.getElementById("result").innerHTML= r;
    }



    function restar(a, b) {
        var a = document.getElementById("numero1").value;
        var b = document.getElementById("numero2").value;
        var r = a - b;
        document.getElementById("result").innerHTML= r;
    }


    function multiplicar(a, b) {
        var a = document.getElementById("numero1").value;
        var b = document.getElementById("numero2").value;
        var r = a * b;
        document.getElementById("result").innerHTML= r;
    }



    function dividir(a, b) {
        var a = document.getElementById("numero1").value;
        var b = document.getElementById("numero2").value;
        if(b == 0){
            document.getElementById("result").innerHTML= "No se puede dividir por cero";
        }else {
            var r = a / b;
            document.getElementById("result").innerHTML= r;
        }
    }
