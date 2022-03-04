canvas = document.getElementById('Mycanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";





function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
        rover_imgTag.src =rover_image;
}



function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x, rover_y, rover_width, rover_height);

}








window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    ascii = e.keyCode;

    if (ascii == '38') {
        up();

    }
    if (ascii == '40') {
    down()

    }
    if (ascii == '37') {
        left();

    }
    if (ascii == '39') {
     right()


    }
}
function up() {
    rover_y=rover_y-10
    uploadrover()
    uploadbackground()
}
function down() {
    rover_y=rover_y+10
    uploadrover()
    uploadbackground()
}
function left() {
    rover_x=rover_x-10
    uploadrover()
    uploadbackground()
}
function right() {
    rover_x=rover_x+10
    uploadrover()
    uploadbackground()
}