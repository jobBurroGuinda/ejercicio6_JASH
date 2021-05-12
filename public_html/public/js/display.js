class Display {
    constructor(displayValorAnterior, displayValorActual, displayValorG){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorG = displayValorG;
        this.calcu = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.valorG = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: '*',
            restar: '-', 
            residuo: '%', 
            potencia: '^', 
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.valorG = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual += numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        this.displayValorG.textContent = this.valorG;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorG = this.valorAnterior.toString();
        if(this.tipoOperacion!=='fatorial' && this.tipoOperacion!=='logaritmo' && 
            this.tipoOperacion!=='logNatural' && this.tipoOperacion!=='raizCuadrada' && 
                                                    this.tipoOperacion!=='cuadrado'){
                    this.valorG += ' ' + `${this.signos[this.tipoOperacion] || ''}` + ' ' +
                                    this.valorActual.toString() + ' =';
        }
        this.valorActual = this.calcu[this.tipoOperacion](valorAnterior, valorActual);
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
                this.tipoOperacion = tipo;
        switch(this.tipoOperacion){
            case 'fatorial':
                this.valorAnterior = this.valorActual.toString() + '!';
                if(isNaN(this.valorActual)) return
                this.valorActual = this.calcu.factorial(this.valorActual);
                break;
            case 'logaritmo':
                this.valorAnterior = 'log(' + this.valorActual.toString() + ')';
                if(isNaN(this.valorActual)) return
                this.valorActual = this.calcu.logaritmo(this.valorActual);
                break;
            case 'logNatural':
                this.valorAnterior = 'ln(' + this.valorActual.toString() + ')';
                if(isNaN(this.valorActual)) return
                this.valorActual = this.calcu.logNatural(this.valorActual);
                break;   
            case 'raizCuadrada':
                this.valorAnterior = '√' + this.valorActual.toString();
                if(isNaN(this.valorActual)) return
                this.valorActual = this.calcu.raizCuadrada(this.valorActual);
                break;
            case 'cuadrado':
                this.valorAnterior = this.valorActual.toString() + '²';
                if(isNaN(this.valorActual)) return
                this.valorActual = this.calcu.cuadrado(this.valorActual);
                break;
            default:
                    this.valorAnterior = this.valorActual || this.valorAnterior;
                    this.valorActual = '';
                break;
        }
        
        this.imprimirValores();
    }
}

