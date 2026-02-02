const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
/*ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 60);
ctx.fillStyle ="blue";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "green";
ctx.fillRect(80, 10, 50, 50);

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle ="orange";
ctx.arc(100, 100, 40, 0, Math.PI * 2);
ctx.fill();


ctx.beginPath();
ctx.fillStyle ="purple";
ctx.arc(300, 150, 40, 0, Math.PI * 2);
ctx.fill();

ctx.font= "20px Arial";
ctx.fillText("hello", 50, 50);

function draw() {
    requestAnimationFrame(draw);
}
draw();
/*
let x = 0;

function draww() {
    ctx.clearRect (0,0,400, 300);
    ctx.fillRect(x, 100, 50,50);
    x +=1;

    requestAnimationFrame(draww);

    if(x > 400) x= 0;

   
}
draww();

document.addEventListener("keydown", () => {});
if (e.key === "ArrowRight") x += 10;

ctx.fillRect(playerX, playerY, 40, 40);

ctx.fillRect(enemyX, enemyY, 30, 30);

if (
    playerX < enemyX + 30 &&
    playerX + 40 > enemyX
)

ctx.fillStyle = "rgb(200, 0,0)";
ctx.fillRect(10, 10, 55, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 55, 50);

ctx.fillRect(25, 5, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.fill();


ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx,closePath();
ctx.stroke();
*/
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
 ctx.arc(75, 75, 35, 0, Math.PI * 2, false);
 ctx.moveTo(65, 65);
 ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
 ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 125);
ctx.quadraticCurveTo(25, 125, 25, 162.5);
ctx.quadraticCurveTo(25, 200, 50, 200);
ctx.quadraticCurveTo(50, 220, 30, 225);
ctx.quadraticCurveTo(60, 220, 65, 200);
ctx.quadraticCurveTo(125, 200, 125, 162.5);
ctx.quadraticCurveTo(125, 125, 75, 125);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(70, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62,5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();


const img = new Image();
img.src = "me.png";

img.onload = () => context.drawImage (img, 0, 0);


img.onload = () => {
    const pattern =   ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
};

img.onload = () => {
    ctx.globalALpha = 0.5;
    ctx.drawImage(img, 50, 50, 200, 150);
    ctx.globalALpha = 1;
}