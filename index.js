 let timeInterval;
 let timerValue =0 ;
 let running = false;

function startTimer(){
    if(!running){
        running =true;
        
        timeInterval =setInterval(updateTimer, 10);
    }
  }


 function pauseTimer(){
    if(running){
        running = false;
        clearInterval(timeInterval);
    }
 }

 function resetTimer(){
    pauseTimer();
    timerValue = 0;
    updateDisplay();
    

 }

 function updateTimer(){
    timerValue ++;
    updateDisplay();

 }

 function updateDisplay(){
    const hours = Math.floor(timerValue/3600000);
    const minute = Math.floor((timerValue%360000)/6000);
    const second = Math.floor((timerValue%6000)/100);
    const hundredths = timerValue % 100;

    const formattedTime = 
            String(hours).padStart(2,'0')+ ":" +
            String(minute).padStart(2,'0')+ ":" +
            String(second).padStart(2,'0')+ ":" +
            String(hundredths).padStart(2,'0');

    document.getElementById("timer").textContent = formattedTime;

 }