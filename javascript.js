    //main frame for password verification : we check every keystroke individually to activate the DOM modifications, 
    //and construct a string to match the "comfirm password" later.
    //I thought about using passwordInput.setCustomValidity, but as for now I just don't like the way it behave.

const passwordInput= document.getElementById("PasswordInput");
const passwordNumber= document.getElementById("PasswordNumber");
const passwordCapital= document.getElementById("PasswordCapital");
const passwordSymbol= document.getElementById("PasswordSymbol");
const passwordLength= document.getElementById("PasswordLength");
let passwordData= "";
let numberInputed=0;
let capitalInputed=0;
let symbolInputed=0;
let lengthInputed=0;

passwordInput.addEventListener("input", (e)=>{
    console.log(e.data);
    let aELScopePasswordData= passwordInput.value;
    passwordData = aELScopePasswordData;
    console.log(passwordData);
    
    
    if(/\d/.test(e.data) && numberInputed == 0){
        numberInputed = 1;
        
    }
    else if(/[A-Z]/.test(e.data) && capitalInputed == 0){
        capitalInputed = 1;
    }
    else if(/[@#$%^/&*_()]/.test(e.data) && symbolInputed == 0){
        symbolInputed = 1;
    }
    else if(passwordData.length >= 8 && lengthInputed == 0){
        lengthInputed = 1;
    }
    else if(/\b/.test(e.data)){ //modify this
        
    };

        //Here I deploy my DOM modifications, granted by my previous EventListener.
        console.log(numberInputed, capitalInputed,symbolInputed,lengthInputed);
    if(numberInputed == 1){
        passwordNumber.style.color="rgb(160,130,172)";
    }
    else{
        passwordNumber.style.color="black";
    };
    if(capitalInputed == 1){
        passwordCapital.style.color="rgb(160,130,172)";
    }
    else{
        passwordCapital.style.color="black";
    };
    if(symbolInputed == 1){
        passwordSymbol.style.color="rgb(160,130,172)";
    }
    else{
        passwordSymbol.style.color="black";
    };
    if(lengthInputed == 1){
        passwordLength.style.color="rgb(160,130,172)";
    }
    else{
        passwordLength.style.color="black";
    };

});

