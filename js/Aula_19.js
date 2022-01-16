/* Classes */

/* Galeria de Fotos *
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
};*/
/*
let pessoa = new ClasseSimples('Bianca', 35, 'Japao');
pessoa.fala();

let pessoa2 = new PessoaDados('Bianca', 35, 'Japao');
pessoa2.fala();
*/

let galeriaAntiga = new ClasseAntiga();
galeriaAntiga.criarGaleria();

let galeriaES6 = new ClasseES6();
galeriaES6.criarGaleria();










