// Stopwatch elements fetch
const toggle = document.getElementById("toggle");
const reset = document.getElementById("reset");

const mili = document.getElementById("mili");
const sec = document.getElementById("sec");
const min = document.getElementById("min");

let mili_val = 0, sec_val = 0, min_val = 0;
let stop_count;

function startCounter(){

    stop_count = setInterval(function (){
        mili_val += 1;
        if(mili_val == 100){
            mili_val = 0;
            sec_val += 1;

            if(sec_val == 60){
                sec_val = 0;
                min_val += 1;

                    if(min_val == 90){
                        stopCounter();
                    }
            }
        }
        mili.innerText = mili_val;
        sec.innerText = sec_val;
        min.innerText = min_val;
    }, 10);
    
}

function stopCounter(){
    clearInterval(stop_count);

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
    toggle.innerText = "Start";
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