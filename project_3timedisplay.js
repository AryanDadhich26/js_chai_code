const clock=document.getElementById('clock');

// let date=new Date()
// console.log(date.toLocaleTimeString());


setInterval(function() {
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);//=>updates value of date to the current time every 1000 milliseconds or 1 second

