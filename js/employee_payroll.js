function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'row_right_name success';
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'row_right_name error';
    const output = formControl.querySelector("#name_error");
    output.innerText = message;
}

function check_username(username){
    const regex_username = RegExp('^[A-Z]{1}[a-z]{3,}$')
    if(regex_username.test(username.value)==false){
        showError(username, "Name is invalid");
    } 
    else{
        showSuccess(username);
    }
    
}

const populate = () => {
    const username = document.getElementById('name_id');
    const textError = document.getElementById('name_error');
        if(username.value.trim() === ''){
            textError.textContent = "Name is empty";
            return;
        }
        try{
  
            check_username(username);
            /*textError.textContent = "";*/
        }
        catch(exception){
            console.log(exception);
        } 
}
/*const populate = () => {

    const username = document.querySelector('#name_id');
    const startDate = document.querySelector('#startdate');
  
    const textError = document.querySelector('#name_error');
    console.log(textError)
    if(username.value.trim() === ''){
      textError.textContent = "Name is empty";
      return;
    }
    try{
  
      check_username(username.value);
      textError.textContent = "";
      
      
      newData.name = username.value;
      
      newData.profile = getRadioValue(document.getElementsByName('profile'));
      newData.gender = getRadioValue(document.getElementsByName('gender'));
      newData.dept = getCheckBoxValue(document.getElementsByName('dept'));
      newData.salary = document.querySelector('#myRange').value;
      newData.id = createNewEmployeeId();
      let start = new Array();
      start.push(document.getElementById('day').value);
      start.push(document.getElementById('month').value);
      start.push(document.getElementById('year').value);
      newData.startDate = new Date(start[2], start[1]-1, start[0]);
      console.log(newData);
      
      createAndUpdateStorage(newData);
      return newData;
      
  
    }
    catch(exception){
      console.log(exception)
      // textError.textContent = exception;
    }*/