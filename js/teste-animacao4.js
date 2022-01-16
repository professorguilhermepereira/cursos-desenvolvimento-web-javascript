let canvas = document.getElementById("canvas");
canvas.style.border = "1px solid rgb(0,0,0)";
canvas.style.borderWidth="1";
canvas.style.margin="20px 100px";
canvas.width=700;
canvas.height=500;

let px = 0;
let py = 0;
let direcaoX = 0.05;
let direcaoY = 0.05;
let aceleracaoX = 0.05;
let aceleracaoY = 0.05;

const CTX = canvas.getContext("2d");

requestAnimationFrame(anima);

function anima() {
    makeGrid();
    
    aceleracaoX += movimentoEmArco(aceleracaoX, direcaoX);
    aceleracaoY += movimentoEmArco(aceleracaoY, direcaoY);
    console.log(direcaoX,aceleracaoX,direcaoY,aceleracaoY);
    makeBola(px+aceleracaoX,py+aceleracaoY);
    
    //console.log(px, py);
    requestAnimationFrame(anima);
}

function movimentoEmArco(aceleracao, direcao) {
    if(aceleracao < 1) {
        aceleracao += (direcao);
    } else {
        aceleracao -= (direcao);
    }
    //console.log(aceleracao);
    return aceleracao;
}


function makeBola(x, y, r=10) {
    CTX.beginPath();
    CTX.fillStyle = "#0077ff";
    CTX.arc(x,y,r,0,Math.PI * 2);
    CTX.fill();
    CTX.closePath();
}

function makeGrid() {
    CTX.clearRect(0,0,canvas.width,canvas.height);
    
}