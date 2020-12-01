let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf"
var x = 75;


class Ball {
    constructor(xpoint,ypoint,raduis,color,moove){
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.raduis = raduis;
        this.color = color;
        this.dx = 1*this.moove;
        this.dy = 1*this.moove
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.xpoint,this.ypoint,this.raduis,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
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
}
anim()

