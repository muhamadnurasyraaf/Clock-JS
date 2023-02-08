
setInterval(() =>{
    const time = document.querySelector('.time');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amOrpm = hours > 12 ? "PM" : "AM";
    let updatedHours = hours > 12 ? hours - 12 : hours
    let updatedMinutes = minutes < 10 ?"0" + minutes : minutes
    let updatedSeconds = seconds < 10 ? "0" + seconds : seconds
    time.textContent = updatedHours +":"+ updatedMinutes + ":"+ updatedSeconds +" " + amOrpm;
});

let yellowish = document.getElementById('yellowish')
let purplepink = document.getElementById('purplepink')
let orangered = document.getElementById('orangered')
let white = document.getElementById('white')
let element = document.getElementById('all');
let body = document.body

yellowish.onclick = ()=>{
    body.style = 'background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);transition:0.4s;'
} 



purplepink.onclick = () =>{
    body.style = 'background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);'
}

orangered.onclick = () =>{
    body.style = 'background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);'
}

white.onclick = () =>{
    body.style = 'background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'
}

