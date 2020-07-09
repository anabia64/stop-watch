var milsec=0;
var sec=0;
var min=0;
var milsecHead=document.getElementById("milsec");
var secHead=document.getElementById("sec");
var minHead=document.getElementById("min");

var interval;
function timer(){
    milsec++;
    milsecHead.innerHTML=milsec;
    if(milsec>=100){
        sec++;
        secHead.innerHTML=sec;
        milsec=0;
    }else if(sec>=60){
        min++;
        minHead.innerHTML=min;
        sec=0;

    }
    }
    
function start() {
    interval=setInterval(timer,10);
    document.getElementById("strdis").disabled = true;
}

function pause() {
    clearInterval(interval);
}
function reset(){
    milsec=0;
    sec=0;
    min=0;
    milsecHead.innerHTML=milsec;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
    pause();
    document.getElementById("strdis").disabled=false;

}
