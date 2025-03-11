function mostrarBinario(){
    let arreglo ="";
    arreglo = document.getElementById("binario").value;
    document.getElementById("bin").innerHTML = "El número binario es " + arreglo.charCodeAt(0);
    // guardar el resultado en una variable
    let resultado = arreglo.charCodeAt(0);
    // mostrarlo 
    console.log(resultado);

    // se crea el for para recorrer el arreglo y combertirlo a binario
    for (let i = 0; i < arreglo.length; i++) {
        let binario = arreglo.charCodeAt(i).toString(2);
        // se imprime el resultado
        console.log(binario);
    }
    // imprimir el binario 
    document.getElementById("bin").innerHTML = "El número binario es " + resultado.toString(2);
    // se imprime el resultado  
    console.log(resultado.toString(2));
}

function mostrarBinario2() {
        let binario = document.getElementById("binario2").value;
        let suma = 0;
        let caracter = "";
    
        // Dividir el binario en grupos de 8 bits
        for (let i = 7; i >= 0; i --) {
            if( binario[7-i] =="1"){
                suma = suma + 2**i;
            }
        }
        
        caracter = String.fromCharCode(suma);
        document.getElementById("bin2").innerHTML = "El caracter es " + caracter;
}
  

 










