document.querySelector("#btn").addEventListener("click", leer)

let texto = ""

function leer(){

    texto = document.querySelector("#inputTXT").value
    alert(texto)

}


//----------------------------------------------------------


document.querySelector("#btnAceptar").addEventListener("click", escribir)

let palabra = ""

function escribir(){

    palabra = document.querySelector("#inputTXT").value
    document.querySelector("#parrafo").innerHTML = palabra

}


//doc...
let num = 0

//function --- (){

    //num = document.querySelector
    if(num%2 === 0){
        alert("Es par")
    }else{
        alert("Es impar")
    }
    
//}

