    //main frame for password verification : we check every keystroke individually to activate the DOM modifications, 
    //and construct a string to match the "comfirm password" later.
    //I thought about using passwordInput.setCustomValidity, but as for now I just don't like the way it behave.

const passwordInput= document.getElementById("PasswordInput");
const passwordNumber= document.getElementById("PasswordNumber");
const passwordCapital= document.getElementById("PasswordCapital");
const passwordSymbol= document.getElementById("PasswordSymbol");
const passwordLength= document.getElementById("PasswordLength");
const passwordConditions= document.getElementById("CheckpointBox");
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
    if(numberInputed ==1 && capitalInputed == 1 && symbolInputed == 1 && lengthInputed == 1){
        passwordConditions.classList.add("AllConditionsMet");
    }
    else{
        passwordConditions.classList.remove("AllConditionsMet");
    };
    if(numberInputed == 1){
        passwordNumber.classList.add("ConditionMet");
    }
    else{
        passwordNumber.classList.remove("ConditionMet");
    };
    if(capitalInputed == 1){
        passwordCapital.classList.add("ConditionMet");
    }
    else{
        passwordCapital.classList.remove("ConditionMet");
    };
    if(symbolInputed == 1){
        passwordSymbol.classList.add("ConditionMet");
    }
    else{
        passwordSymbol.classList.remove("ConditionMet");
    };
    if(lengthInputed == 1){
        passwordLength.classList.add("ConditionMet");
    }
    else{
        passwordLength.classList.remove("ConditionMet");
    };

});

