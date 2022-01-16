/* TESTE CONDICIONAIS COM SWITCH */

/*
    COMIDAS:
    > Saudaveis: maça, uva, laranja, arroz, feijao, batata, 
    > Nao Saudaveis: hamburguer, batata frita, refrigerante, sorvete
*/

/*
let comida = "maça";

if( comida == "maça" ) {
   console.log("Saudavel");
} else if( comida == "uva" ) {
   console.log("Saudavel");   
} else if( comida == "laranja" ) {
   console.log("Saudavel"); 
} else if( comida == "hamburguer" ) {
   console.log("Nao Saudavel"); 
} else if( comida == "batata frita" ) {
   console.log("Nao Saudavel");
} else {
   console.log("Nao Saudavel"); 
}
*/
/*
    > Saudaveis: maça, uva, laranja, arroz, feijao, batata, 
    > Nao Saudaveis: hamburguer, batata frita, refrigerante, sorvete
*/
let comida = "batata";
switch( comida ) {
    case "maça" :
    case "uva" :
    case "laranja" :
    case "arroz" :
    case "feijao" :
    case "batata" :
        console.log("Saudavel");
        break;
    case "hamburguer":
    case "batata frita":
    case "refrigerante":
    case "sorvete":
        console.log("Nao Saudavel");
        break;
    default :
        console.log("Nao e Saudavel");
}












