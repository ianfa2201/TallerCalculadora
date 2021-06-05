(function() {
    $("#suma").click(function() {
        var a = $("#numero1").val();
        var b = $("#numero2").val();   
        if(a=="" && b==""){
            $("#result").html("Debe llenar los dos campos");
        } else if (a=="") {
            $("#result").html("Debe llenar el campo a");
        } else if(b==""){
            $("#result").html("Debe llenar el campo b");
        }else{
            var r = parseFloat(a) + parseFloat(b);
            $("#result").html(r);
        }   
    });

    $("#resta").click(function() {
        var a = $("#numero1").val();
        var b = $("#numero2").val();   
        if(a=="" && b==""){
            $("#result").html("Debe llenar los dos campos");
        } else if (a=="") {
            $("#result").html("Debe llenar el campo a");
        } else if(b==""){
            $("#result").html("Debe llenar el campo b");
        }else{
            var r = a - b;
            $("#result").html(r);
        } 
    });


    $("#multiplicacion").click(function() {
        var a = $("#numero1").val();
        var b = $("#numero2").val();   
        if(a=="" && b==""){
            $("#result").html("Debe llenar los dos campos");
        } else if (a=="") {
            $("#result").html("Debe llenar el campo a");
        } else if(b==""){
            $("#result").html("Debe llenar el campo b");
        }else{
            var r = a * b;
            $("#result").html(r);
        } 
    });

    $("#division").click(function() {
        var a = $("#numero1").val();
        var b = $("#numero2").val();   
        if(a=="" && b==""){
           $("#result").html("Debe llenar los dos campos");
        }else if (a=="") {
           $("#result").html("Debe llenar el campo a");
        } else if(b==""){
            $("#result").html("Debe llenar el campo b");
        }else if(b == 0){
            $("#result").html("No se puede dividir por cero");
        } else {
            var r = a / b;
            $("#result").html(r);
        }
    }); 
})()