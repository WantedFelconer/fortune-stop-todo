
let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let reset = document.getElementById("resetBtn");
let display = document.getElementById("timeDisplay");


let startTime;
let elapTime=0;
let myInvertal;
let isRunning = false;


start.addEventListener("click",()=>{
    console.log("the start button has been pressed");
    
    if(isRunning) return;

    isRunning=true;


    startTime = Date.now()-elapTime;

    myInvertal = setInterval(()=>{
        elapTime=Date.now() - startTime;
        console.log(elapTime + ' seconds have passed')
    display.textContent = Math.trunc(elapTime/1000);
        if (elapTime>=30000){
            clearInterval(myInvertal);
            isRunning=false;
        }

},3000);

})




stop.addEventListener("click",()=>{
    console.log("stop button has been pressed");
    if (!isRunning) return;
    clearInterval(myInvertal);
    isRunning=false;
})

reset.addEventListener("click",()=>{
        console.log("reset button has been pressed");
    clearInterval(myInvertal);
    display.textContent = 0;

    elapTime=0;
    isRunning=false;
})










        // // DOM Elements
        // const timeDisplay = document.getElementById('timeDisplay');
        // const startBtn = document.getElementById('startBtn');
        // const stopBtn = document.getElementById('stopBtn');
        // const resetBtn = document.getElementById('resetBtn');
        // const statusTag = document.getElementById('statusTag');

        // // State Variables
        // let time = 0;
        // let timerInterval = null;
        // const MAX_TIME = 30;
        // const TIME_STEP = 3;

        // // Function to start/resume the timer
        // function startTimer() {
        //     // Prevent multiple intervals running concurrently
        //     if (timerInterval) return;

        //     // If we are already at or past the limit, don't start unless reset
        //     if (time >= MAX_TIME) {
        //         statusTag.innerText = "Status: Limit Reached (Reset Required)";
        //         return;
        //     }

        //     statusTag.innerText = "Status: Running";
            
        //     // Set interval to trigger every 3000ms (3 seconds)
        //     timerInterval = setInterval(() => {
        //         time += TIME_STEP;
        //         timeDisplay.innerText = time;

        //         // Check for the auto-stop limit
        //         if (time >= MAX_TIME) {
        //             clearInterval(timerInterval);
        //             timerInterval = null;
        //             statusTag.innerText = "Status: Stopped (Reached 30s)";
        //         }
        //     }, 3000); // 3-second cycle matching requirement
        // }

        // // Function to pause the timer
        // function stopTimer() {
        //     if (timerInterval) {
        //         clearInterval(timerInterval);
        //         timerInterval = null;
        //         statusTag.innerText = "Status: Paused";
        //     }
        // }

        // // Function to reset the timer back to 0
        // function resetTimer() {
        //     clearInterval(timerInterval);
        //     timerInterval = null;
        //     time = 0;
        //     timeDisplay.innerText = time;
        //     statusTag.innerText = "Status: Idle";
        // }

        // // Event Listeners
        // startBtn.addEventListener('click', startTimer);
        // stopBtn.addEventListener('click', stopTimer);
        // resetBtn.addEventListener('click', resetTimer);