let canvas = document.getElementById("canvas");
canvas.style.border = "1px solid rgb(0,0,0)";
canvas.style.borderWidth="1";
canvas.style.margin="20px 100px";
canvas.width=700;
canvas.height=500;

let ctx = canvas.getContext("2d");

let posI = 100;
let posF = 300;

let positionX = [posI,posF-posI/2,posF+posI,posF-posI/2];
let positionY = [posF/2,posF,posF/2,0];
console.log(positionX);
let pxAtual = positionX[0];
let pyAtual = positionY[0];

if(ctx != null) {
   requestAnimationFrame(animacao);
}

function animacao() {
    makeGrid(ctx);
    let total = 96;
    let px;
     for(let j = 1; j <= total; j++) {
         pxAtual += getPositionX(j, total,positionX);
         pyAtual += getPositionY(j, total,positionY);
         console.log(pyAtual);
         makeBola(ctx,pxAtual,pyAtual+posI,5,j);
         
     }
    
    //requestAnimationFrame(animacao);
}
function getPositionY(numero, total,positionY) {
    let y1 = positionY[0];
    let y2 = positionY[1];
    let y3 = positionY[2];
    let y4 = positionY[3];
    
    let d1 = y2-y1;
    let d2 = y3-y2;
    let d3 = y4-y3;
    let d4 = y1-y4;
    
    let quartoDistancia = total/4;
    
    if( numero <= total*0.25 ) { py = d1/quartoDistancia; }
    else if(numero > total*0.25 && numero <= total*0.5) { py = d2/quartoDistancia;}
    else if(numero > total*0.5 && numero <= total*0.75) { py = d3/quartoDistancia; }
    else if(numero > total*0.75) { py = d4/quartoDistancia; }
    
    return py;
}

function getPositionX(numero, total,positionX) {
    let x1 = positionX[0];
    let x2 = positionX[1];
    let x3 = positionX[2];
    let x4 = positionX[3];
    
    let d1 = x2-x1;
    let d2 = x3-x2;
    let d3 = x4-x3;
    let d4 = x1-x4;
    
    let quartoDistancia = total/4;
    
    if( numero <= total*0.25 ) { px = d1/quartoDistancia; }
    else if(numero > total*0.25 && numero <= total*0.5) { px = d2/quartoDistancia;}
    else if(numero > total*0.5 && numero <= total*0.75) { px = d3/quartoDistancia; }
    else if(numero > total*0.75) { px = d4/quartoDistancia; }
    
    return px;
}

function makeBola(ctx, x, y, r = 5, styleIndex) {
    style = ["#0077ff","#00ff77","#ff7700","#330033"];
    let diametro = r*2;
    
    styleIndex %=4;
    
    ctx.beginPath();
    ctx.fillStyle = style[styleIndex];
    ctx.arc(x,y,r,0, 2*Math.PI);
    ctx.fill();
}

function makeGrid(ctx) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(posI,posI,posF,posF,);
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.moveTo(posF/2+posI, posI);
    ctx.lineTo(posF/2+posI, posF+posI);
    ctx.moveTo(posI, posF/2+posI);
    ctx.lineTo(posF+posI,posF/2+posI);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(posF/4+posI, posI);
    ctx.lineTo(posF/4+posI, posF+posI);
    
    ctx.moveTo(posF*0.75+posI, posI);
    ctx.lineTo(posF*0.75+posI, posF+posI);
    
    ctx.moveTo(posI, posF/4+posI);
    ctx.lineTo(posF+posI,posF/4+posI);
    
    ctx.moveTo(posI, posF*0.75+posI);
    ctx.lineTo(posF+posI,posF*0.75+posI);
    ctx.strokeStyle="#0077ff";
    
    ctx.stroke();
    
}