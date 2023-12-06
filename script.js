const canvas = document.querySelector('canvas');
//C means context and using it a lot so going to name it c
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//First number is x coordinate of upper left corner of rec
//Second is y coordinate of upper left corner of rect
//Third number is the width
//Fourth number is the height
c.fillStyle = 'black'
c.fillRect(0, 0, canvas.width, canvas.height);
console.log(c);

class Player {
    //Method in the class
    //Order does not matter if you make constructor one object
    constructor({ position, velocity }) {
        this.position = position; //X and Y position {X,Y}
        this.velocity = velocity;
    }
    //Method in the player class to draw player
    draw() {
        c.moveTo(this.position.x+30, this.position.y);
        c.lineTo(this.position.x-10,this.position.y-10);
        c.lineTo(this.position.x-10,this.position.y+10);
        c.closePath();
        
        c.strokeStyle = 'white';
        c.stroke();
    }
}

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
});

player.draw();
console.log(player);

window.addEventListener('keydown')


