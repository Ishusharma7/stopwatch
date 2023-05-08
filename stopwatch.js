// let time=document.getElementById("time");
let [seconds , minutes , hours] = [0,0,0];
// time.innerhtml = [hours + ':' +minutes  +':'  +seconds];
let running = "false";
let watch;
let time=document.querySelector('.timer');
const Table = document.getElementById('table');
// document.getElementById("start").onclick =start();
// document.getElementById("stop").onclick =stop();

function start(){
 watch =  setInterval(stopwatch,1000);
    function stopwatch(){
    running='true';
    seconds ++;
    if(seconds === 60){
       ++ minutes ;
       seconds = 0;
    }
    else 
    if(minutes === 60) {
       ++ hours;
       minutes = 0;
    }
    time.textContent =`${hours} : ${minutes} : ${seconds}`;
    if(running==='true'){document.getElementById("str").disabled = true;}
}
}

function stop(){
    running='false';
    clearInterval(watch);
    var row = Table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    if(running==='false'){document.getElementById("str").disabled = false;}
}
function reset(){
    running='false';
    clearInterval(watch);
    [seconds , minutes , hours] = [0,0,0];
    time.textContent = '00:00:00';
    if(running==='false'){document.getElementById("str").disabled = false;}
    while (Table.firstChild)
{
        Table.removeChild(Table.firstChild);
}
}