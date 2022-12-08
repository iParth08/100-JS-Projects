// alert("Radhe Radhe!")

/**
 * 1. refer to any HTML element
 * 2. style
 * 3. event (stimuli)
 * 
 * selectors, function, event, property manipulator
 */

let wrapper = document.getElementById("wrapper");
wrapper.style.background = "#e86600";

const colors = ["#e86600","#0008C1", "#810CA8", "#2D033B", "#F2F7A1", "lightblue", "#540375", "#32DBC6", "#C689C6", "#F9B384" ];

let prevIndex = 0;
let button = document.getElementById("fire");
button.addEventListener('click', changeBackground);

function changeBackground(){
    
    //0-.999 x 9 => 0 - 8.9 => 0-8
    let index = Math.floor(Math.random()*colors.length);
    if(index === prevIndex){
        changeBackground();
    }
    else{
        wrapper.style.background = colors[index];
    }
    prevIndex = index;

    
}