/* Objetos: Um tipo de Array Melhorado?... */
let frutas = ['maca','pera','melancia','morango'];

/* 
    Fora do objeto
    > Variaveis,
    > Funçoes
    
    Dentro de um objetos
    > Propriedades = Variaveis,
    > Metodos = Funçao

let cestaDeFrutas = {
    nome : 'Cesta de Frutas',
    frutas : ['maca','pera','melancia','morango'],
    listaFrutas : function() {
        document.write("<h1>" + this.nome + "</h1>");
        document.write("<p>");
        for(let j = 0; j < this.frutas.length; j++) {
            document.write( this.frutas[j] + "<br />");
        }
        
        document.write("</p>");
    },
    contaFrutas : function() {
        document.write("A quantidade de e: " + this.frutas.length);
    }
}

cestaDeFrutas.contaFrutas();
*/

/* Galeria de Fotos */
let galeria = {
    largura : '370px',
    altura : '210px',
    url : 'img/foto1.jpg',
    urlLista : ['img/foto.jpg','img/foto.jpg','img/foto.jpg','img/foto.jpg','img/foto.jpg','img/foto.jpg'],
    criarFoto : function() {
        document.write("<img src='" + this.url + "' style='width:" + this.largura + "; height:" + this.altura + "'/>");
    },
    criarGaleria : function() {
        for(let j = 0; j < this.urlLista.length; j++) {
            document.write("<img src='" + this.urlLista[j] + "' style='width:" + this.largura + "; height:" + this.altura + ";border:7px solid rgba(0,0,0,.3); float:left; margin:10px;'/>");
        }
    }
};

galeria.criarGaleria();

galeria.criarGaleria();












