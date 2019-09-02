var txt= document.getElementById("txt")
document.getElementById("button").onclick= BOLD;
document.getElementById("it").onclick = ita;
document.getElementById("un").onclick = und;
function BOLD(){
    if (txt.style.fontWeight != 'bold'){
txt.style.fontWeight = 'bold';
}
else {
    txt.style.fontWeight = 'normal';
}
}


function ita(){
    if (txt.style.fontStyle != 'italic'){
        txt.style.fontStyle = 'italic'
    }
    else {
        txt.style.fontStyle = 'normal'
    }
}
function und(){
    if(txt.style.textDecoration != 'underline'){
        txt.style.textDecoration = 'underline'
    }
    else {
        txt.style.textDecoration = 'none'
    }
}

var sl = document.getElementById('sel');
sl.onchange = function () {
    txt.style.fontSize = this.value;
}
var fl = document.getElementById("fml");
fl.onchange = function () {
    txt.style.fontFamily = this.value;
}


