let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf"
var x = 75;


class Ball {
<<<<<<< HEAD
    constructor(xpoint,ypoint,raduis,color,moove){
=======
    constructor(xpoint,ypoint,raduis,color){
>>>>>>> mooving ball
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.raduis = raduis;
        this.color = color;
<<<<<<< HEAD
        this.dx = 1*this.moove;
        this.dy = 1*this.moove
=======
        this.dx = 1;
        this.dy = 1
>>>>>>> mooving ball
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.xpoint,this.ypoint,this.raduis,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
<<<<<<< HEAD
    }

    update(){
        this.draw(ctx);
        this.xpoint += this.dx;
        this.ypoint += this.dy;
    }


}
let ballon = new Ball(100,200,100,'red');
ballon.draw(ctx);

let anim = function(){
    requestAnimationFrame(anim)
    ballon.update()
        console.log(this.xpoint)
    }

let ballon = new Ball(100,200,100,'red');


const update=()=>{
    ballon.draw(ctx);
    ballon.xpoint += ballon.dx;
}
let anim = function(){
    update()
    // setInterval(update,100)
    // clearInterval(update,1000)
}
anim()

