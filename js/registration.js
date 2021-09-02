const register_email = document.querySelector("#email_register");
const register_mobile = document.querySelector("#mobile_register");
const register_password = document.querySelector("#password_register");

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function check_mobile(input){
    const regex_mobile =  /^[6789][0-9]{9}$/;
    if(regex_mobile.test(input.value.trim())==false)
    {
        showError(input, `Mobile Number is invalid`);
        return false;
    }
    else{      
        showSuccess(input);
        return true;
    }
}

function check_email(input){
    const regex_email =  /^([a-zA-Z0-9]*)(@)([a-z]*)(.)([a-z]*)$/;
    if(regex_email.test(input.value.trim())==false)
    {
        showError(input, `Email is invalid`);
        return false;
    }
    else{      
        showSuccess(input);
        return true;
    }
}

function check_password(input){
    const regex_password =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regex_password.test(input.value.trim())==false)
    {
        showError(input, `Password is invalid`);
        return false;
    }
    else{      
        showSuccess(input);
        return true;
    }
}

function register_validate(){
    check_mobile(register_mobile);
    check_email(register_email);
    check_password(register_password);
    const registerurl = 'http://localhost:3000/login_user';
    let add_user_register = {};
    // console.log(register_mobile.value);
    
    // console.log(add_user_register, typeof(add_user_register));
    if(check_mobile(register_mobile)==true && check_email(register_email)==true && check_password(register_password)==true){
        add_user_register.mobile = register_mobile.value;
        add_user_register.pswd = register_password.value;
        add_user_register.mail = register_email.value;
        add_user_register.token = false;
        //console.log(add_user_register,typeof(add_user_register));
        makelogincall('POST', registerurl, true,add_user_register)
        .then(responseText => {
            
            console.log(typeof(responseText));
        })
        .catch(err => console.log(err));
        
    }
}