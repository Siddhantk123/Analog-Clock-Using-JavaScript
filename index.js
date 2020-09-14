setInterval(() => {
    d = new Date();                               //datetime liya
    document.getElementById("datetime").innerHTML = d.toLocaleDateString(); //this will print only date from datetime
    console.log(d);
    htime = d.getHours();                         //hour liya: inbuilt js se il jayega, ye current time hai
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    hrotation = 30*htime + mtime/2;               //htime ghante me hour ki sue kitne angle se rotate hogi
    mrotation = 6*mtime;
    srotation = 6*stime;
    //this part of the code will be applied to the front-end, ye logic trigger hoga
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);    //setting the interval: har 1 sec pe ye code run hoga

