setInterval(()=>{
    let show=document.querySelector("#display")
    let time=new Date();
    let hours=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    // ampm.style.color="blue";
    show.innerHTML=`${hours}:${minute}:${second};${ampm}`
},1000)