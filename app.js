let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf"
var x = 75;


class Ball {
    constructor(xpoint,ypoint,raduis,color){
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.raduis = raduis;
        this.color = color;
        this.dx = 1;
        this.dy = 1
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.xpoint,this.ypoint,this.raduis,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }


}
let ballon = new Ball(100,200,100,'red');



const update=()=>{
    ballon.draw(ctx);
    ballon.xpoint += ballon.dx;
}
let anim = function(){
    
    setInterval(update,100)
}
anim()

