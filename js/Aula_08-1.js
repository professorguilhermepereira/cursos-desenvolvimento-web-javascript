/* 
    OPERADORES LÓGICOS
    &&  : E lógico
    ||  : Ou lógico
    
    situacaoA  situacaoB
    true       true
*/

let raio1 = 10;
let raio2 = 5;

let diametro1 = raio1 * 2;
let diametro2 = raio2 * 2;

const PI = 3.14;
/*
document.write("<h1>Resultado: ");
document.write( (raio1 < raio2) || (diametro1 < diametro2));
//document.write( diametro1 > diametro2 );
document.write("</h1>");

*/
/*
if( (raio1 > raio2) && (raio1 == diametro2) ) {
    document.write("Raio1 e Grande Mesmo!");
} else {
    document.write("Raio1 nao e tao grande Assim");
}
*/

let imagem;
let title = "Minha foto";
let largura = "390px";
let altura;

if( imagem != null && imagem != '' ) {
    
    if( largura != null || altura != null) {
       document.write('<img src="'+ imagem +'" style="width:' + largura +'; height:'+ altura +'" title="' + title + '"/>');
    } else {
        document.write("Defina um tamanho para sua imagem...");
    }
} else {
    document.write("Nao tem foto...: " + imagem);
}


