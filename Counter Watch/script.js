// Stopwatch elements fetch
const toggle = document.getElementById("toggle");
const reset = document.getElementById("reset");

const mili = document.getElementById("mili");
const sec = document.getElementById("sec");
const min = document.getElementById("min");

let mili_val = 0, sec_val = 0, min_val = 0;
let stop_mili, stop_sec, stop_min;

function startCounter(){

    stop_mili = setInterval(function(){
        mili_val += 1;
        if(mili_val == 1000){
            mili_val = 0;
        }
        mili.innerText = mili_val;
        
    },1);

     stop_sec = setInterval(function(){
        sec_val += 1;
        if(sec_val == 60){
            sec_val = 0;
        }
        sec.innerText = sec_val;
        
    }, 1000);

     stop_min = setInterval(function(){
        min_val += 1;
        if(min_val == 1000){
            min_val = 0;
        }
        min.innerText = min_val;
    }, 60000);
}

function stopCounter(){
    clearInterval(stop_mili);
    clearInterval(stop_sec);
    clearInterval(stop_min);
}

toggle.addEventListener('click', function(){

    if(toggle.innerText === "Start"){
        startCounter();
        toggle.innerText = "Stop";
    }
    else if(toggle.innerText === "Stop"){
        stopCounter();
        toggle.innerText = "Start";
    }
});

reset.addEventListener('click', function(){
    stopCounter();
    mili_val = 0, sec_val = 0, min_val = 0;
    mili.innerText = "00";
    sec.innerText = "00";
    min.innerText = "00";
    toggle.value = "Start";
})

// Counter elements fetch
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const count = document.getElementById("count");
let score = 0;

plus.addEventListener('click', function(){
    score = score + 1;
    count.innerText = score;
});

minus.addEventListener('click', function(){
    score = score - 1;
    count.innerText = score;
});