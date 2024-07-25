const square = document.getElementById('floating-square');
const squareSize = 100;
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
const speed = 1.7;
let vx = (Math.random() * 2 - 1) * speed;
let vy = (Math.random() * 2 - 1) * speed;
let angle = 0;
const rotationSpeed = 0.5;

function animate() {
    x += vx;
    y += vy;
    angle += rotationSpeed;

    if (x <= 0) {
        x = 0;
        vx = -vx;
    }
    if (x >= window.innerWidth - squareSize) {
        x = window.innerWidth - squareSize;
        vx = -vx;
    }
    if (y <= 0) {
        y = 0;
        vy = -vy;
    }
    if (y >= window.innerHeight - squareSize) {
        y = window.innerHeight - squareSize;
        vy = -vy;
    }

    square.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

    requestAnimationFrame(animate);
}

animate();
