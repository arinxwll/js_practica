const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
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
){
    alert("столкновение")
}
