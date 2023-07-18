    //main frame for password verification : we check every keystroke individually to activate the DOM modifications, 
    //and construct a string to match the "comfirm password" later.
    //I thought about using passwordInput.setCustomValidity, but as for now I just don't like the way it behave.

const passwordInput= document.getElementById("PasswordInput");
const passwordCheckInput= document.getElementById("PasswordCheckInput");
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

    //To be sure the password is checked
passwordCheckInput.addEventListener("input", (e)=>{
    let aELScopeCheckPasswordData= passwordCheckInput.value;
    if(aELScopeCheckPasswordData == passwordData){
        passwordCheckInput.classList.add("PasswordsValidated");
    }
    else{
        passwordCheckInput.classList.remove("PasswordsValidated");
    }
})

passwordInput.addEventListener("input", (e)=>{
    let aELScopePasswordData= passwordInput.value;
    passwordData = aELScopePasswordData;
    
        //Fairly simple conditon check
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
    };

        //what happens when user hit the backspace touch : it will erase everything at once in the password input.
        //why ? Well because it is a completely optionnal option in this project but it polishes it a bit without being too complicated to do.
        //Could it have been handled more delicatly and in less lines ? well yes, yes it could have. But I don't know how yet and I prefer to go further in learning ^^
    passwordInput.addEventListener("keydown", (e)=>{
        if(e.key == "Backspace"){
            numberInputed = 0;
            capitalInputed = 0;
            symbolInputed = 0;
            lengthInputed = 0;
            passwordConditions.classList.remove("AllConditionsMet");
            passwordInput.classList.remove("PasswordsValidated");
            passwordCheckInput.classList.remove("PasswordsValidated");
            passwordNumber.classList.remove("ConditionMet");
            passwordCapital.classList.remove("ConditionMet");
            passwordSymbol.classList.remove("ConditionMet"); 
            passwordLength.classList.remove("ConditionMet");
            aELScopePasswordData="";
            passwordInput.value=aELScopePasswordData;
        };
    });  

        //Here I deploy my DOM modifications, granted by my previous EventListener.
        
    if(numberInputed ==1 && capitalInputed == 1 && symbolInputed == 1 && lengthInputed == 1){
        passwordConditions.classList.add("AllConditionsMet");
        passwordInput.classList.add("PasswordsValidated");
    }
    else{
        passwordConditions.classList.remove("AllConditionsMet");
        passwordInput.classList.remove("PasswordsValidated");
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

