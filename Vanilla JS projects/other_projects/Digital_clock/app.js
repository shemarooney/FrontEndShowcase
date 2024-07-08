let hrs=document.getElementById('hours')
let mins=document.getElementById('minutes')
let secs=document.getElementById('seconds')

setInterval(()=>{
    let currentTime= new Date()

    console.log(currentTime)

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)