function cambio(){
    document.getElementById("fondo").classList.add("rojo");
}


function textos(){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";

}

function verificarN(){

    const numero=document.getElementById("numero").value;
    if(numero>=10){
        alert("El numero es mayor o igual a 10");
    }
   

}


var usuario={
    nombre:"david",
    edad:160,
    correo:"david@gmail.com"
}
function miobjeto(){
    

    document.getElementById("datos").innerHTML=`nombre:${usuario.nombre},
    edad:${usuario.edad}, correo:${usuario.correo}`

}

function lista(){
    var notas=["miguel","luis","daniel","juan",usuario.nombre];
    for(var i=0;i<notas.length;i++){
        document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
    }
}


