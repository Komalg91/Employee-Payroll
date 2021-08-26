function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'row_right success';
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'row_right error';
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
function dateCheck(startdate){
    let newDate = new Date(startdate[2],startdate[1]-1,startdate[0]);
    if(!(newDate <= new Date())) throw "Date is invalid"
}

function check_date(startdate){
    const dateerror = document.querySelector('.date_error');
     try{
          dateCheck(startdate)
          dateerror.textContent="";
     }
     catch(exception){
         dateerror.textContent = exception;
     }
    
}
  
  
  function getRadioValue(radios){
    console.log(radios);
    for(var i=0; i<radios.length; i++){
      if(radios[i].checked){
  
        return radios[i].value;
      }
    }
  }
  
  function getCheckBoxValue(boxes){
    console.log(boxes);
    let boxlist = new Array();
    for(var i=0; i<boxes.length; i++){
      if(boxes[i].checked){
        boxlist.push(boxes[i].value); 
      }
    }
    return boxlist;
  }
  
  
function createAndUpdateStorage(newData){
    var EmpPayrollList = JSON.parse(localStorage.getItem("EmpPayrollList"));
    
    if(EmpPayrollList!=null){
      console.log(EmpPayrollList);
      EmpPayrollList.push(newData);
      
    }
    else{
      EmpPayrollList = [newData];
    }   
    
    /*localStorage.setItem("EmpPayrollList", JSON.stringify(EmpPayrollList));
    window.location.href = "http://127.0.0.1:5500/pages/login.html"*/
    
  }
  
  let newData = {
  
  };

const populate = () => {
    const username = document.getElementById('name_id');
    const textError = document.getElementById('name_error');
        if(username.value.length == 0){
            textError.textContent = "Name is empty";
            return;
        }
        try{
  
            check_username(username);
            /*textError.textContent = "";*/
            
            /*newData.id = createNewEmployeeId();*/
            let start = new Array();  
            start.push(document.getElementById('day').value);
            start.push(document.getElementById('month').value);
            start.push(document.getElementById('year').value);
            newData.datee = start;
            console.log(start);
                check_date(start);
                
            newData.name = username.value;
            newData.profile = getRadioValue(document.getElementsByName('profile'));
            newData.gender = getRadioValue(document.getElementsByName('gender'));
            newData.dept = getCheckBoxValue(document.getElementsByName('dept'));
            newData.salary = document.querySelector('#myRange').value;
            console.log(newData);
            createAndUpdateStorage(newData);
            return newData;
        }
        catch(exception){
            console.log(exception);
        } 
}
