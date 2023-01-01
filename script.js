var i = 0;
var txt = "CEO @ Yellow Studio";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
