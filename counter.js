let countervalue = document.querySelector("#counter-value");
let btn1 = document.querySelector("#increment-btn");
let btn2 = document.querySelector("#decrement-btn");
let btn3 = document.querySelector("#reset-btn");

let val = 0 ;

function updatescreen(){
    countervalue.innerText = val;
}
btn1.addEventListener("click",()=>{
    if(val < 10 ){
        val++;
        updatescreen();
        }
});

btn2.addEventListener("click",()=>{
    if (val !== 0) {
        val--;
    }
    updatescreen();
    
});

btn3.addEventListener("click",()=>{
    val = 0 ;
    updatescreen();
    
});