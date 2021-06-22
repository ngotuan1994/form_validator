const form = document.getElementById("form_validation");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confir_password = document.getElementById("confir_password");
const email = document.getElementById("email");

let displaySuccess = (input)=>{
    const formParent = input.parentElement;
    formParent.classList.add("success");

}
let displayError = (input, message)=>{
    const formParent = input.parentElement;
    formParent.classList.add("error");
    const small = formParent.querySelector("small");
    small.innerText = message;
}
let testRequired = (input, field) => {
    if(input.value.trim(' ') === '')
        displayError(input,  field + ' is required');
    else
        displaySuccess(input);

}
let testEmail = (input,field,email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.trim(' ') === ''){
        displayError(input,  field + ' is required');
    }
    else if(!re.test(String(email).toLowerCase())) {
        displayError(input, 'Email is not valid')
    }
    else{
        displaySuccess(input);
    }
}

let confirm_pw = (pass1,pass2) =>{
    if(pass1.value !== pass2.value){
        displayError(pass2, "Confirm password does not math your password");
    }
    else{
        displaySuccess(pass2);   
    }
    
}
let firstLetterUpperCase = (input)=>{
    return input.charAt(0).toUpperCase() + input.slice(1);
    
}

let checkLength = (input,minLength,maxLength)=>{
    if(input.value.length < minLength){
        displayError(input,input.id + " must be at least " + minLength + " character");
    }
    else if ( input.value.length > maxLength){
        displayError(input,input.id + " must be less than " + maxLength + "character");
    }
    else{
        displaySuccess(input);
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    testRequired(username, firstLetterUpperCase(username.id));
    testEmail(email,'Email',firstLetterUpperCase(email.id));
    testRequired(password, firstLetterUpperCase(password.id));
    checkLength(password,6,20);
    testRequired(confir_password, firstLetterUpperCase(password.id));
    checkLength(confir_password,6,20);
    confirm_pw(password,confir_password);
    checkLength(username,6,16);
    
    

})