class ClasseES6 {
    constructor() {
        this.largura = '370px';
        this.altura = '210px';
        this.url = 'img/foto1.jpg';
        this.urlLista =['img/foto1.jpg','img/foto1.jpg','img/foto1.jpg','img/foto1.jpg','img/foto1.jpg','img/foto1.jpg'];
    }
    
    criarFoto() {
        document.write("<img src='" + this.url + "' style='width:" + this.largura + "; height:" + this.altura + "'/>");
    }

    criarGaleria() {
        for(let j = 0; j < this.urlLista.length; j++) {
            document.write("<img src='" + this.urlLista[j] + "' style='width:" + this.largura + "; height:" + this.altura + ";border:7px solid rgba(0,0,0,.3); float:left; margin:10px;'/>");
        }
    }
}