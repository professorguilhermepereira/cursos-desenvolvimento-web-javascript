/* TRABALHANDO COM PILHAS: Array */
/*
    Turma de alunos: Joao, Maria, Ana, Joaquina, Beatriz, Francisco
*/
/*
let aluno1 = 'Joao';
let aluno2 = 'Maria';
let aluno3 = 'Ana';
let aluno4 = 'Joaquina';
let aluno5 = 'Beatriz';
let aluno6 = 'Francisco';

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
console.log(aluno5);
console.log(aluno6);
*/
/*
let alunos = ['Joao', 'Maria', 'Ana', 'Joaquina', 'Beatriz', 'Francisco', 'Bianca', 'Julia', 'Stephanye'];

for(let j = 0; j < alunos.length; j++) {
    document.write("<h1>" + alunos[j] + '</h1>');
}
//document.write("<h1>" + alunos + '</h1>');
*/

let clientes = [
    ['Guilherme', 28, 'Brasil'],
    ['Joao', 45, 'Inglaterra']
];

for(let j = 0; j < clientes.length; j++) {
    document.write("<h1>"+ clientes[j][0] +"</h1>");
    document.write("<p>Idade: " +  clientes[j][1] + "<br />");
    document.write("Pais: " + clientes[j][2] + "</p>");
}












