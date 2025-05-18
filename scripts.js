let previusInput='';
let currentInput="";
let operator = "";
let eval = false;
const screen = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number");

numbers.forEach(number=>{
    number.addEventListener("click",()=>{
        if(eval===false){
        if(previusInput===""){
        screen.textContent=screen.textContent+number.textContent;
        }
        else{
            screen.textContent=screen.textContent+number.textContent;
            currentInput=currentInput+number.textContent;
            
        }
    }
    else if(eval===true){
    
        screen.textContent="";
        screen.textContent=screen.textContent+number.textContent;
        eval=false;
    }
    })
})
let operators = document.querySelectorAll(".operator");

operators.forEach(oper=>{
    oper.addEventListener("click",()=>{
        if(previusInput===""){
        previusInput=screen.textContent;
        operator=oper.textContent;
        screen.textContent=screen.textContent+oper.textContent;
        }
        else if(previusInput!==""){
            if(operator==="+"){
                previusInput=Number(previusInput)+Number(currentInput);
                
                operator=oper.textContent;
                screen.textContent=previusInput+operator;
                currentInput="";
            }
            else if(operator==="-"){
                previusInput=Number(previusInput)-Number(currentInput);
                
                operator=oper.textContent;
                screen.textContent=previusInput+operator;
                currentInput="";
            }
            else if(operator==="*"){
                previusInput=Number(previusInput)*Number(currentInput);
                
                operator=oper.textContent;
                screen.textContent=previusInput+operator;
                currentInput="";
            }
            else if(operator==="/"){
                previusInput=Number(previusInput)/Number(currentInput);
                
                operator=oper.textContent;
                screen.textContent=previusInput+operator;
                currentInput="";
            }
            else{
                screen.textContent=screen.textContent+oper.textContent;
                operator=oper.textContent;
            }
        }
    })
})

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    screen.textContent="";
    previusInput="";
    currentInput="";
    operator="";
})

const operate  = document.querySelector(".operate");
operate.addEventListener("click",()=>{
    if(previusInput===""){
        alert("Error");
    }
else if(previusInput!==""){
    if(operator==="+"){
                previusInput=Number(previusInput)+Number(currentInput);
                
                
                operator="";
                screen.textContent=previusInput;
                currentInput="";
               
                
            }
            else if(operator==="-"){
                previusInput=Number(previusInput)-Number(currentInput);
                
                
                operator="";
                screen.textContent=previusInput;
                currentInput="";
            
            }
            else if(operator==="*"){
                previusInput=Number(previusInput)*Number(currentInput);
                
               
                operator="";
                screen.textContent=previusInput;
                currentInput="";
                
                
                
            }
            else if(operator==="/"){
                previusInput=Number(previusInput)/Number(currentInput);
                
                
                operator="";
                screen.textContent=previusInput;
                currentInput="";
            
                
            }
             eval=true;
                
}
})