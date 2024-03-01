let counter = 0;
let color = ['blue', 'black', 'red', 'green', 'brown'];
let colorCounter = 0;
setInterval(()=>{
    let h1 = document.querySelector('#h1');
    let random = Math.floor(Math.random()*color.length);
    h1.style.color = `${color[random]}`;


}, 1200);

