let canvas = document.getElementById("canvas");
canvas.width=1000;
canvas.height=570;
canvas.style.border = "1px solid rgb(0,0,0)";
let ctx = canvas.getContext("2d");

let x = 75; y = 275;
let directionX = 1;
let directionY = 1;

let pInicial = 100;
let pFinal = 400;
function drawCircle(x,y,r = 40) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}/*
let iY = Math.PI, iX = 0;
let moveY = 0;
let aceleracao = 0.2;
/*function anima() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.rect(25,25,500,500);
    ctx.stroke();
    drawCircle(x,y);
    
    x += (iX);
    y += (iY*2);
    
    if(x <= 275) {
        iX += aceleracao;
        iY = -(moveY);
    } else if(x > 275 ) {
        iX -= aceleracao;
        iY = (moveY);
    }
    
    if(( y > 475) || ( y < 75 ) ) {
        //iY *= -1;
    }
    
    
    //console.log(x, directionX, iX);
    
    
    requestAnimationFrame(anima);
}

requestAnimationFrame(anima);*/

requestAnimationFrame(animacao);

function drawLine(ctx){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.strokeRect(pInicial,pInicial,pFinal,pFinal);
    
    ctx.beginPath();
    ctx.moveTo(pFinal/2 + pInicial, pInicial);
    ctx.lineTo(pFinal/2 + pInicial, pFinal+pInicial);
    ctx.moveTo(pInicial, pFinal/2 + pInicial);
    ctx.lineTo(pFinal+pInicial, pFinal/2 + pInicial);
    
    ctx.strokeStyle="blue";
    
    ctx.stroke();
}

function animacao() {
    drawLine(ctx);
    
    let n = 100;
    
    /*let aceleracao = 12;
    let aceleracaoX = 0;
    let fator = aceleracao * 1.5;
    let style="blue";*/
    let raio = (pFinal-pInicial)/n;
    let aY = raio;
    let aX = raio;
    console.log(raio, aX,aY);
    
    let py = pFinal/2 + pInicial + raio/2;
    let px = raio + pInicial;
    console.log(px, py);
    for(let j = 1; j < n; j++ ) {
        //if( j> n/1.1) continue;
        criarBolas(px, py, raio,j,n);
        aX = movimentoHorizontal(px, aX,raio);
        aY = movimentoVertical(py, aY,raio);
        
        px += aX;
        py += aY;
        console.log(px);
        /*if(j < 12) {
            aceleracaoX += fator/12;
        } else if( j>=12 && j<36) {
            aceleracaoX -= fator/12;
        } else if( j>=36 && j<48) {
            aceleracaoX += fator/12;
        }
        if(j<= 12) {
            aceleracao -= (5*Math.PI)/fator;
        } else if(j > 12 && j < 24 ) {
            aceleracao -= (5*Math.PI)/fator;
            style="black";
        }   else if(j >= 24 && j <36 ) {
            aceleracao += (5*Math.PI)/fator;
            style="green";
        }  else if(j >= 36 && j < 48 ) {
            aceleracao += (5*Math.PI)/fator;
            style="black";
        } 
        py += aceleracao;
        px += aceleracaoX;
        switch(j) {
                case 12-1:
                case 23:
                case 35:
                case 47:
                console.log("aceleracao: "+aceleracao + " py: " + py);
                break;
        }*/
    }
    
    //requestAnimationFrame(animacao);
}

function movimentoHorizontal(px, aceleracao, raio) {
    let limiteInicio = pInicial;
    let limiteFim = pFinal;
    let fator = raio*Math.PI/1.17;
    
    if(px + 2 * raio > limiteFim + limiteInicio || px - raio < limiteInicio) {
        directionX *= -1;
    }
    
    /*
    if( px < limiteFim/2 + limiteInicio) {
       aceleracao += (fator * directionX);
    } else if(px - raio > limiteFim/2 + limiteInicio ) {
        aceleracao -= (fator * directionX);
    }*/
    aceleracao = (directionX * fator);
    
    return aceleracao;
}
function movimentoVertical(py, aceleracao, raio) {
    let limiteInicio = pInicial;
    let limiteFim = pFinal;
    let fator = raio*Math.PI/1.15;
    
    if(py + raio * 2 > limiteFim + limiteInicio || py - raio *2 < limiteInicio) {
        directionY *= -1;
    }
    /*
    if( py + raio < limiteFim/2 + limiteInicio ) {
       aceleracao += (fator * directionY);
    } else if(py + raio > limiteFim/2 + limiteInicio ) {
        aceleracao += (fator * directionY);
    }*/
    aceleracao = (fator * directionY);
    return aceleracao;
}

function criarBolas(x,y,r = 5, numero, total) {
    ctx.beginPath();
    
    style = ["#0077ff","#00ffff","#00ff77","#0000ff"];
    
    if( numero <= total / 4 ) {ctx.fillStyle=style[0];}
    else if(numero > total / 4 && numero <= total / 2) {ctx.fillStyle=style[1];}
    else if(numero > total / 2 && numero <= total / (4/3)) {ctx.fillStyle=style[2];}
    else if(numero > total / (4/3)) {ctx.fillStyle=style[3];}
    
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
}