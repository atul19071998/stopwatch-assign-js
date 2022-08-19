//js code starts here.
//window on load event is fire. 
window.onload = function () {
    let seconds = 00;///declare a variable.
    let minutes = 00;///declare another variable.
    let EgMinutes = document.getElementById("minutes");//declare function to call id.
    let EgSeconds = document.getElementById("seconds");//declare function to call id.
    let btnStart = document.getElementById('start');//declare function to call id.
    let btnStop = document.getElementById('stop');//declare function to call id.
    let btnreset = document.getElementById('reset');//declare function to call id.
    let Interval ;//declare another variable.
  
    btnStart.onclick = function() {//onclick event on button start.
       clearInterval(Interval);//call back function are used.
       Interval = setInterval(startTimer, 1000);//set interval function is executed after a given time interval.
    }
    
      btnStop.onclick = function() {//onclick event on button stop.
         clearInterval(Interval);//clearInterval event are used .
    }
   
    btnreset.onclick = function() {//onclick event on button reset to value becomes zero.
       clearInterval(Interval);
      minutes = "00";//declare minutes.
      seconds = "00";//declare seconds.
      EgMinutes.innerHTML = minutes;
      EgSeconds.innerHTML = seconds;
    }
     
    function startTimer () {///call a function start timer .
    
      seconds++;
      ///conditional statements are executed if ,else.
      if(seconds <= 9){//seconds are less than or equal to 9seconds.
        EgSeconds.innerHTML = "0" + seconds;
      }
      
      if (seconds > 9){ //seconds are greater than 9 seconds.
        EgSeconds.innerHTML = seconds;
      }
    
      if (seconds > 59) {
         
        minutes++;
        EgMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        EgSeconds.innerHTML = "0" + 0;
      }
      if (minutes > 9){//minutes are greater than 9 seconds.
        EgMinutes.innerHTML = minutes;
      }
    }
  }
  //js code ends here.