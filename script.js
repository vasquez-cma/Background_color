let array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let background = document.querySelector("body");
let buttonColor = document.getElementById("button-color");
let showColor = document.getElementById("show-color");
let color = "#"


function getColor(){
   
   for(let i = 0; i<=5;i++){
        color += array[Math.floor(Math.random()*array.length)];    
       }

      if(color.length > 8){
         color = "#";
         for(let i = 0; i<=5;i++){
            color += array[Math.floor(Math.random()*array.length)];    
           }
           return color;
      }else{
        return color;
      }
}


buttonColor.addEventListener('click',function getRandom(){
   showColor.textContent = getColor();
   background.style.backgroundColor = getColor() 
})



    











