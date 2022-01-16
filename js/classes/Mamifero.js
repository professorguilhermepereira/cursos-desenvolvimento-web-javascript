class Mamifero {
    
    // classe Mamifero: temPelo, numeroDePatas, tempoDeVida, ondeVive
    constructor() {
        this._temPelo = true;// positivo ou negativo
        this._numeroDePatas = 4;// numero: inteiro
        this._tempoDeVida = 5;// numero inteiro (anos, meses, dias)
        this._ondeVive = "floresta";// string: (floresta, mares, montanhas)
    }
    
    getTemPelo() {
        return this._temPelo;
    }
    
    setTemPelo(pelo) {
        if(pelo == true) {
            this._temPelo = pelo; 
        } else if( pelo == false ) {
            this._temPelo = pelo; 
        }
    }
    
    getNumeroDePatas() {
        return this._numeroDePatas;
    }
    
    setNumeroDePatas(numero) {
        if(numero > 0) {
           this._numeroDePatas = numero;
        }
    }
    
    getTempoDeVida() {
        return this._tempoDeVida;
    }
    
    setTempoDeVida(tempo) {
        if(tempo > 0) {
           this._tempoDeVida = tempo;
       }
    }
    
    getOndeVive() {
        return this._ondeVive;
    }
    
    setOndeVive(lugar) {
        if( typeof lugar == 'string' ) {
           this._ondeVive = lugar;
        }
    }
}







