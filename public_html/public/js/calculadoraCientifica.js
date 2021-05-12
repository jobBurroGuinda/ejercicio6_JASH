//Variables que usemos en todas las funciones
class Calculadora {
    sumar(num1, num2){
        return num1+num2;
    }
    restar(num1, num2){
        return num1-num2;
    }
    dividir(num1, num2){
        return num1/num2;
    }
    multiplicar(num1, num2){
        return num1*num2;
    }
    potencia(num1, num2){
        return Math.pow(num1, num2);
    }
    residuo(num1, num2){
        return num1 % num2;
    }
    factorial(num1){
        if(num1 == 0){
            return 1;
        }
        return num1 * this.factorial(num1-1);
    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    cuadrado(num1){
        return num1*num1;
    }
    logaritmo(num1){
        return Math.log10(num1);
    }
    logNatural(num1){
        return Math.log(num1);
    }
}



/* viejos
function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="0";
}
*/