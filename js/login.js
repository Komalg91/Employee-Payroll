let login_details = {};

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function check_mobile(input){
    const regex_mobile =  /^[6789][0-9]{9}$/;
    if(regex_mobile.test(input.value.trim())==false)
    {  
        showError(input, `Invalid!`);
        return ;
    }
    else{
        showSuccess(input);
    }
}

function check_empty_phone(input){
    if(input.length == 0){
        const small = document.querySelector('#phone_error');
        small.textContent = "Empty field!";
        return;
    }
}
function check_empty_pswd(input){
    if(input.length == 0){
        const small = document.querySelector('#pswd_error');
        small.textContent = "Empty field!";
        return;
    }
}

function check_token(){
    makelogincall("get",`http://localhost:3000/login_user/`,true)
    .then(responseText => {
        var tokn = JSON.parse(responseText)
        console.log(tokn.TKN);
        if(tokn.TKN != ""){
            window.location.href = "http://127.0.0.1:5500/pages/homepage.html";
        }
    })
    .catch(err => console.log(err));
}

function validate(){
    
    const user_phone = document.querySelector('.phone');
    const user_password = document.querySelector('.passwordd').value;

    check_empty_phone(user_phone.value);
    check_empty_pswd(user_password);
    check_mobile(user_phone);
    const loginurl = 'http://localhost:3000/login_user/';
    makelogincall("get",loginurl,true)
    .then(responseText => {
        login_list = JSON.parse(responseText);
        var index = login_list.find(std=> ((std.mobile == document.querySelector('.phone').value) && (std.pswd == document.querySelector('.passwordd').value)));
        index_id = index.id;
        if(index !== undefined){
                var token1 = {
                 "id":index_id,
                 "mobile": user_phone.value,
                 "pswd": user_password,
                 "mail": index.mail,
                "token": true};
            //     console.log(token);
            //     login_list.token1 = token;
            makelogincall("PUT",site_properties.userr +`${index_id}` ,true, token1)
            .then(responseText => {
                window.location.href = "http://127.0.0.1:5500/pages/homepage.html";
        })
    }
})
    .catch(err => console.log(err));
    }
        

    function check_Token(){
        makelogincall("get",`http://localhost:3000/login_user/`,true)
        .then(responseText => {
            var tokn = JSON.parse(responseText);
            console.log(tokn);
            for(let i = 0;i< tokn.length;i++){
                 console.log(tokn[i].token);
                if(tokn[i].token === true){
                    console.log(tokn[i].id);
             //window.location.href = "http://127.0.0.1:5500/pages/homepage.html";
             }}
        
        })
        .catch(err => console.log(err));
    }

function logout(){
    makelogincall("get",`http://localhost:3000/login_user/`,true)
        .then(responseText => {
            var tokn = JSON.parse(responseText)
            let index2 = tokn.find(std=> (std.token === true))
            index_id2 = index2.id;
            var token2 = {
                "id":index_id2,
                "mobile": index2.mobile,
                "pswd": index2.pswd,
                "mail": index2.mail,
               "token": false
            };
            makelogincall("PUT",site_properties.userr +`${index_id2}` ,true, token2)
            .then(responseText => { window.location.href = "http://127.0.0.1:5500/pages/login.html";
                // makelogincall("get",`http://localhost:3000/login_user/`,true)
                // .then(responseText => {
                //     var tokn = JSON.parse(responseText)
                //     //console.log(tokn.TKN);
                //     alert(tokn.id);
                //     if(tokn.token != true){
                //         window.location.href = "http://127.0.0.1:5500/pages/login.html";
                //     }
                // })
        })
    })
    .catch(err => console.log(err));
}
            

// for(i=0;i<login_list.length;i++){
        //     console.log(login_list[i].mobile);
        //     if((login_list[i].mobile == document.querySelector('.phone').value) && 
        //         (login_list[i].passwordd == document.querySelector('.passwordd').value)){
        //         alert("Logged in successful");
        //         window.location.href = "http://127.0.0.1:5500/pages/login.html";
        //         break;
        //     }
        //     else{
        //         window.location.href = "http://127.0.0.1:5500/pages/registration.html";
        //     }
        // }
        // if(${loginurl.mobile} == document.querySelector('.phone').value)
        // {
        //     console.log("Mobile valid");
        //     console.log(data);
        // }
        