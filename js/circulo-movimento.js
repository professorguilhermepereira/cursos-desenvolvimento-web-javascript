let canvas = document.querySelector("#canvas");
canvas.style.border = "1px solid rgb(0,0,0)";
canvas.style.borderWidth="1";
canvas.style.margin="20px 100px";
canvas.width=700;
canvas.height=500;
let context = canvas.getContext("2d");
var angle = 0;
var delayAnimation = 0;

playAnimation();


//toRadiano(360);
function toRadiano(angulo) {
    let rad = (angulo/180);
    //let rad = (angulo/180) * Math.PI;
    return rad;
    //console.log(angulo+"º = " + rad + " x pi");
}
function playAnimation() {
    let ct = 200
    let r = 10;
    context.clearRect(0,0,1000,1000);
    context.beginPath();
    context.strokeStyle="#00ffff";
    context.arc(ct+10,ct+10,100,0,2*Math.PI, false);
    context.moveTo(ct*2, ct);
    context.arc(ct*2+10,ct+10,100,0,2*Math.PI, false);
    context.stroke();
    context.closePath();
    
    /*for(let j=0; j<=360; j++) {
        let ang = j;
        let raio = 100;
        console.log(toRadiano(ang));
        let x = raio * Math.cos(ang);
        let y = raio * Math.sin(ang);
        drawBall(context,ct+x, ct+y, r);
    }*/
    let raio = ct/2;
    let x = Math.cos(angle) * raio;
    let y = Math.sin(angle) * raio;
    drawBall(context, (raio*2 + x), (raio*2 + y), r);
    if(angle < 360) {

        angle+=0.1; 
    } else {  
        angle = 0;
    }
    
    x = Math.cos((-1)*angle) * raio;
    y = Math.sin((-1)*angle) * raio;
    drawBall(context, (raio*4 + x), (raio*2 + y), r);
    
    //console.log("ok");
    requestAnimationFrame(playAnimation);
}

function drawBall(context,x,y,r, fillCircle = true) {
    context.beginPath();
    context.fillStyle="#0077ff";
    context.arc(x+10,y+10,r,0,2*Math.PI, fillCircle);
    context.fill();
    context.closePath();
}