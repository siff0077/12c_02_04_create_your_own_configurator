"use strict"; 

//Global variable 
window.addEventListener("load", init); 

let elementToPaint; 

async function init(){
    let response = await fetch("items/teddybear-01.svg"); 
    let mySvgData = await response.text(); 
    document.querySelector(".container").innerHTML = mySvgData; 
    startManipulatingTheSvg();  
}

function startManipulatingTheSvg(){
    document.querySelectorAll(".g_to_interact_with").forEach(eachG => {
        console.log(eachG); 

        eachG.addEventListener("click", theClick); 
        eachG.addEventListener("mouseover", theMouseover); 
        eachG.addEventListener("mouseout", theMouseout); 
    }
    ); 
    
    document.querySelectorAll(".color_btn").forEach(each_btn => {
        each_btn.addEventListener("click", colorClick); 
    }); 
    
}

function theClick(){
    elementToPaint = this; 
    this.style.fill = "#8CEADD"; 
}

function theMouseover(){
    console.log(this); 
    this.style.stroke = "#45E6D0";
}

function theMouseout(){
    console.log(this); 
    this.style.stroke = "none";
}

function colorClick(){
    console.log("KLIK", this.getAttribute("fill")); 
    if(elementToPaint != undefined){
        elementToPaint.style.fill = this.getAttribute("fill"); 
    }
}