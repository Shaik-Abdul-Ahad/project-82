canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_posttion_of_x , last_posttion_of_y;
color = "red";
width_of_line =1;



    canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e) {
    mouseEvent="mouseUP";
}

    canvas.addEventListener("mouseleave" , my_mouseleave)

function my_mouseleave (e) {
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent="mouseDown";
   }

    canvas.addEventListener("mousemove" , my_mousemove)

function my_mousemove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown") {
        console.log("current position of x and y cordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2 * Math.PI );
        ctx.stroke();
    }

    last_posttion_of_x=current_position_of_mouse_x;
    last_posttion_of_y=current_position_of_mouse_y;
}

function clearArea() {
   ctx.clearRect(0,0,canvas.width,canvas.height)   
}