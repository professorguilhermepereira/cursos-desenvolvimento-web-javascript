function logg( valor ) {
   console.log(valor);
}
let elementoID = document.getElementById("titulo");
let elementoClasse = document.getElementsByClassName('linha-par');
let elementoTagName = document.getElementsByTagName('h1');
let elementoName = document.getElementsByName('tabela');

let elementoConsulta = document.querySelector('[data-banner-meu-site*=info]');
let elementosConsulta = document.querySelectorAll('tr');

for(let j = 0; j < elementosConsulta.length; j++) {
   logg(elementosConsulta[j]);
}