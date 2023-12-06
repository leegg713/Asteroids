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


class Player {
    //Method in the class
    //Order does not matter if you make constructor one object
    constructor({ position, velocity }) {
        this.position = position; //X and Y position {X,Y}
        this.velocity = velocity;
        this.rotation = 0;
    }
    //Method in the player class to draw player
    draw() {
        c.save()
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.translate(-this.position.x, -this.position.y);
        c.beginPath();
        c.moveTo(this.position.x + 30, this.position.y);
        c.lineTo(this.position.x - 10, this.position.y - 10);
        c.lineTo(this.position.x - 10, this.position.y + 10);
        c.closePath();

        c.strokeStyle = 'white';
        c.stroke();
        c.restore();
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y
    }
}

const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
});

player.draw();

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false
    }
}

const SPEED =3;
const ROTATIONSPEED =0.05;
const FRICTION =0.95
function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

    player.velocity.x = 0;
    player.velocity.y = 0;

    if (keys.w.pressed) {
        player.velocity.x = Math.cos(player.rotation) *SPEED;
        player.velocity.y = Math.sin(player.rotation)*SPEED;
    }
    else if(!keys.w.pressed){
        player.velocity.x *=FRICTION;
        player.velocity.y *= FRICTION;
    }
    if (keys.d.pressed) player.rotation +=  ROTATIONSPEED;
    else if (keys.a.pressed) player.rotation -=  ROTATIONSPEED;
}
animate();
window.addEventListener('keydown', function (event) {

    switch (event.code) {

        case 'KeyW':
            keys.w.pressed = true;
            break;
        case 'KeyA':
            keys.a.pressed = true;
            break;
        case 'KeyD':
            keys.d.pressed = true;
            break;




    }



})

window.addEventListener('keyup', function (event) {

    switch (event.code) {

        case 'KeyW':
            keys.w.pressed = false;
            break;
        case 'KeyA':
            keys.a.pressed = false;
            break;
        case 'KeyD':
            keys.d.pressed = false;
            break;




    }



})


