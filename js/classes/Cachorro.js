class Cachorro extends Mamifero {
    
    constructor() {
        super();
    }
    
    setNumeroDePatas(numero) {
        if(numero <= 4) {
           super.setNumeroDePatas(numero);
        }
    }
    
    static latir() {
        console.log("Au au!");
    }
    
}