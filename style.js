
const realTime = () => {

let cc = new Date();

let time = document.getElementById("time");


setTimeout(() => {
    time.innerHTML = cc.toLocaleTimeString();
    
}, 1000);



}

realTime();

setInterval(realTime,1000)
