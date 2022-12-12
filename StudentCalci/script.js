//get elements from html

const comp = document.getElementById("comp");
const math = document.getElementById("math");
const dsa = document.getElementById("dsa");
const eco = document.getElementById("eco");
const ade = document.getElementById("ade");

const getresult = document.getElementById("submit");
const answer = document.getElementById("result");

//variables
let compVal = 0, mathVal = 0, dsaVal = 0, ecoVal = 0, adeVal = 0;
let sum=0, percentage=0;
let grade="E", remarks="fail";
const total=500;

//functions

function upGrade(percentage){
    if (percentage<=100 && percentage>=90){
        grade="A";
    }
    else if (percentage<90 && percentage>=80){
        grade="B";
    }
    else if (percentage<80 && percentage>=70){
        grade="C";
    }
    else if (percentage<70 && percentage>=60){
        grade="D";
    }
    else grade="E";

    if(percentage>=60 && percentage <=100)
        remarks="pass";
    }

//fetch data from element and assign to variables
function fetchData(){
    compVal = parseInt(comp.value);
    dsaVal = parseInt(dsa.value);
    mathVal = parseInt(math.value);
    ecoVal = parseInt(eco.value);
    adeVal = parseInt(ade.value);
}

function generateResult(){

    //fetching data to variables
    fetchData();

    //calc sum and percentage
    sum = compVal + dsaVal + ecoVal + adeVal + mathVal;
    percentage = (sum/total)*100;
    percentage = Math.round(percentage*100)/100; //round off to 2 decimal places.

    //assign grade and remarks
    upGrade(percentage);
 
    // Populating output in HTML 
    if(isNaN(sum)){
        answer.style.background = "#ff2200";
        answer.innerText='Please provide numeric values.'
        answer.classList.remove("hide");

        setTimeout(function(){
            answer.classList.add("hide");
        }, 1000)
    }
    else {
        answer.style.background = "transparent";
        answer.style.color = "#22ee55";
        answer.innerText = `Out of ${total}, your total is ${sum} and you scored ${percentage}%. \nYour grade is ${grade}. You are ${remarks}.`; 
        answer.classList.remove("hide");
    }

}

//fetch the data
getresult.addEventListener('click', generateResult);

