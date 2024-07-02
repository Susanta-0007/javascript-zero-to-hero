/*
! setTimeout , setInterval are used for time execution of code within a specific interval .
* setTimeout() : clearTimeout()
  ! Syntex :   setTimeout(function(), miliseconds, param1, param2, ...)

  ! Example : (returns after 3 seconds )
            setTimeout(()=>{
                console.log("Hello");
            },3000)

* setInterval() : clearInterval()
  ! Syntex : setInterval(function, miliseconds, param1, param2)

  ! Example : (returns every 3 seconds)
            setInterval(()=>{
                console.log("Hello");
            },3000)
*/


//! Explantaion : clearTimeout()

let counter=0;

const counterInterval=setInterval(count,3000);
function count(){
    console.log(counter++);
    if(counter>5){
        clearInterval(counterInterval)
    }
}