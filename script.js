let start = document.querySelector(".start")

let stop = document.querySelector(".stop")

let reset = document.querySelector(".reset")

let timeInterval = 0;

let timerDisplay = document.querySelector("h1");

let msec = 0;
let sec = 0;
let min = 0;

function formatTime(number){
    if (number<10){
        return `0${number}`;
    }
    else{
        return `${number}`;
    }
}


start.addEventListener("click",()=>{
    if(!timeInterval){
    timeInterval = setInterval(updateTime,10);
    }
})

updateTime = ()=>{
    
        msec++;
        
        if (msec>=99){
            msec = 0;
            sec++;
            if(sec>=59){
                sec = 0;
                min++;
            }
        }
        timerDisplay.textContent = `${formatTime(min)}:${formatTime(sec)}:${formatTime(msec)}`;
    
}



stop.addEventListener("click",()=>{
    clearInterval(timeInterval)
    timeInterval = 0;
})


reset.addEventListener("click",()=>{
    clearInterval(timeInterval)
    timeInterval = 0;
    min = 0;
    sec = 0;
    msec = 0;
    timerDisplay.textContent = "00:00:00"
})