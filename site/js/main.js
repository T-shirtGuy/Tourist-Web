// Function1 Calendar reference:https://blog.csdn.net/qq_26102281/article/details/93664484
function transForm(n){
    if (n<10)
    {
        return '0'+n;
    }else{
        return ''+n;
    }
}
function transformC(num){
    if (num==1){return 'Monday'}
    if (num==2){return 'Tuesday'}
    if (num==3){return 'Wednesday'}
    if (num==4){return 'Thursday'}
    if (num==5){return 'Friday'}
    if (num==6){return 'Saturday'}
    else{return 'Sunday'}
}
function showDate(){
    let oDate=new Date();
    let gYear=oDate.getFullYear();
    let gMonth=oDate.getUTCMonth()+1;
    let gDay=oDate.getUTCDate();
    let gDay1=oDate.getUTCDay();
    let t=transForm(gYear)+'.'+transForm(gMonth)+'.'+transForm(gDay)+"  "+transformC(gDay1);
    document.getElementById('calendar').innerHTML=t;
}
// Function2 Get Temperature reference:https://www.bilibili.com/video/BV1X7411y7KU/?spm_id_from=333.788.recommend_more_video.-1
function weather(data){
    var dt = data.forecasts[0].casts[0].daytemp;
    var nt = data.forecasts[0].casts[0].nighttemp;
    var t = dt+'~'+nt+'℃'
    document.getElementById('calendar').innerHTML+='&nbsp&nbsp&nbsp&nbsp&nbsp'+t
}
function getTemperature(){
    let xhr=new XMLHttpRequest();
    let city = document.getElementById('title').innerHTML.trim().split(" ")[0];
    if(city=='Beijing'){
        cityname = '北京';
    }
    else if(city=='Nanjing'){
        cityname = '南京';
    }
    else{
        cityname = '长沙'
    }
    var script = document.createElement("script");
    script.src = `https://query.asilu.com/weather/gaode/?city=${cityname}&callback=weather`
    document.body.appendChild(script)
}
window.onload=function(){
    showDate();
    getTemperature();
}
// Function3 Jump
let btn1 = document.getElementById('front')
let btn2 = document.getElementById('after')
let n = document.getElementById('ID').innerHTML;
btn1.onclick=function(){
    if(n=='2'){
        location.href = 'index1.html';
    }
    if(n=='3'){
        location.href = 'index2.html';
    }
}
btn2.onclick = function(){
    if(n=='1'){
        location.href = 'index2.html';
    }
    if(n=='2'){
        location.href = 'index3.html';
    }
}
// snow background reference: "https://codepen.io/loktar00/pen/CHpGo"
;(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 400,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();

// Function5 block reference:"https://blog.csdn.net/m0_46690660/article/details/108541866"
var box = document.getElementsByClassName("box")[0];
var ssObj = document.getElementsByClassName("second")[0];
var mmObj = document.getElementsByClassName("minute")[0];
var hhObj = document.getElementsByClassName("hour")[0];
var date = new Date();
var hh = date.getHours();
var mm = date.getMinutes();
var ss = date.getSeconds();
drawSS();
var Deg = 0;
for (var i = 0; i < 60; i++) {
    var div1 = document.createElement("div"); 
    if (i % 5 == 0) { 
        div1.className = "five";
    }
    div1.style.transform = "rotate(" + Deg + "deg)";
    box.appendChild(div1);
    Deg += 6;
}
function drawSS() {
    ssDeg = 360 * ss / 60;
    mmDeg = 360 * mm / 60 + (6 * ss / 60);
    hhDeg = 360 * (hh % 12) / 12 + (30 * mm / 60);
    hhObj.style.transform = "rotate(" + hhDeg + "deg)";
    mmObj.style.transform = "rotate(" + mmDeg + "deg)";
    ssObj.style.transform = "rotate(" + ssDeg + "deg)";
    ss += 1;
    setTimeout(function() {
        drawSS();
    }, 1000);
}

