function sumar() {
    var a = document.getElementById("numero1").value;
    var b = document.getElementById("numero2").value;       
    var r = parseFloat(a) + parseFloat(b);
    if(a=="" && b==""){
        document.getElementById("result").innerHTML="Debe llenar los dos campos";
    }else if (a=="") {
        document.getElementById("result").innerHTML="Debe llenar el campo a";
    } else if(b==""){
        document.getElementById("result").innerHTML="Debe llenar el campo b";
    }else
    document.getElementById("result").innerHTML= r;
}



function restar() {
    var a = document.getElementById("numero1").value;
    var b = document.getElementById("numero2").value;
    var r = a - b;
    if(a=="" && b==""){
        document.getElementById("result").innerHTML="Debe llenar los dos campos";
    }else if (a=="") {
        document.getElementById("result").innerHTML="Debe llenar el campo a";
    } else if(b==""){
        document.getElementById("result").innerHTML="Debe llenar el campo b";
    }else{
        document.getElementById("result").innerHTML= r;
    }
    
}


function multiplicar() {
    var a = document.getElementById("numero1").value;
    var b = document.getElementById("numero2").value;
    var r = a * b;
    if(a=="" && b==""){
        document.getElementById("result").innerHTML="Debe llenar los dos campos";
    }else if (a=="") {
        document.getElementById("result").innerHTML="Debe llenar el campo a";
    } else if(b==""){
        document.getElementById("result").innerHTML="Debe llenar el campo b";
    }else
    document.getElementById("result").innerHTML= r;
}



function dividir() {
    var a = document.getElementById("numero1").value;
    var b = document.getElementById("numero2").value;
    if(a=="" && b==""){
        document.getElementById("result").innerHTML="Debe llenar los dos campos";
    }else if (a=="") {
        document.getElementById("result").innerHTML="Debe llenar el campo a";
    } else if(b==""){
        document.getElementById("result").innerHTML="Debe llenar el campo b";
    }else if(b == 0){
        document.getElementById("result").innerHTML= "No se puede dividir por cero";
    } else {
        var r = a / b;
        document.getElementById("result").innerHTML= r;
    }
}