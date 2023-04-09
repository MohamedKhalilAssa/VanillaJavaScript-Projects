let DateTime= () => {
    let d =new Date();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let cycle= document.getElementById("cycle");
    if(hours>12){
        cycle.innerHTML="PM";
    }
    else {
    cycle.innerHTML="AM";
    }

    //to make it look better
    if((hours>=0 && hours <10) )
        hours="0"+hours;
        if( minutes>=0 && minutes <10)
        minutes="0"+minutes;
        if(seconds>=0 && seconds <10)
          seconds="0"+seconds;
    
     
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
setInterval(DateTime,10);