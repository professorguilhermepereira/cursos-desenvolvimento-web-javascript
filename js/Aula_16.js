/* Funções: Trabalhe com Praticidade, Minimize Esforço! */
/*
for(let j = 1, indice = 1; j <= 10; j++) {
    
document.write(indice + " x " + j + " = " + (indice*j) + "<br />");
    
}
*/
/* nomeDaMinhaFuncao: Camel Case *
function nomeDaFuncao() {
    document.write("<h1>Minha Funcao</h1>");
    document.write("<p>Conteudo do minha funcao!</p>");
}

nomeDaFuncao();
nomeDaFuncao();
*/
function tabuada(indice) {
    document.write("<div style='width=100px; float:left; margin:10px; padding:10px; border: 1px solid rgba(0,0,0,0.3);'>");
    
    for(let j = 1; j <= 4; j++) {
        document.write(indice + " x " + j + " = " + (indice*j));
        document.write("<br />");
    }
    
    document.write("</div>");
}

//tabuada(1);
for(let n = 1; n <= 20; n++) {
    tabuada(n);
}





