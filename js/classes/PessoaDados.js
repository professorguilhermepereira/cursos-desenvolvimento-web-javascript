class PessoaDados {
    
    constructor(nome, idade, pais) {
        this.nome = nome;
        this.idade = idade + ' anos';
        this.pais = pais;
    }
    
    fala() {
        document.write("<h1>Meu nome e " + this.nome + "</h1>");
        this.minhaIdadeE();
    }
    
    minhaIdadeE() {
        document.write("<h1>Minha idade e " + this.idade + "</h1>");
    }
}