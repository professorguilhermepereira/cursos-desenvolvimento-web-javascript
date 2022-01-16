function ClasseSimples(nome, idade, pais) {
    this.nome = nome;
    this.idade = idade + ' anos';
    this.pais = pais;
}
ClasseSimples.prototype = {
    fala : function() {
        document.write("<h1>Meu nome e " + this.nome + "</h1>");
        this.minhaIdadeE();
    },
    minhaIdadeE : function() {
        document.write("<h1>Minha idade e " + this.idade + "</h1>");
    }
}