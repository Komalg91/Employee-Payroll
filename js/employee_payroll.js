function no_validate(){
  localStorage.setItem("Phone","");
  localStorage.setItem("Password","");
  //window.location.href = site_properties.login;
}


function getRadioValue(radios){
  for(var i=0; i<radios.length; i++){
    if(radios[i].checked){
      return radios[i].value;
    }
  }
}

function getCheckBoxValue(boxes){
  let boxlist = new Array();
  for(var i=0; i<boxes.length; i++){
    if(boxes[i].checked){
      let j = `${boxes[i].value}`;

      boxlist.push(j); 
    }
  }
  return boxlist;
}

// const getCheckBoxValue = (deptList) =>{
//   let deptHTML = '';
//   for(const dept of  deptList){
//     deptHTML = `${deptHTML} <div class="table_dept">${dept}</div>`
//   }
//   return deptHTML;
// }

function unsetRadioValue(radios){
  for(var i=0; i<radios.length; i++){
      radios[i].checked = false;
      console.log(radios[i].checked);
  }
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'row_right success';
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'row_right error';
    const output = formControl.querySelector("#name_error");
    output.textContent = message;
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



function check_date(startdate){
    let today_date = new Date();
    console.log("Todya", today_date);
    console.log("Today",startdate);
    const dateerror = document.querySelector('#date_error');
    
    if(startdate > today_date){
      dateerror.textContent = 'Invalid';
    }
    var diff = Math.abs(today_date.getTime() - startdate.getTime());
    if(diff / (1000 * 60 * 60 * 24)>30){
      dateerror.textContent =  'Invalid';
    }
}


function reset_func(){
  document.getElementById("name_id").value = '';
  document.getElementById('day').value = '';
  document.getElementById('month').value = '';
  document.getElementById('year').value = '';
  document.getElementById('myRange').value = '';
  unsetRadioValue(document.getElementsByName('profile'));
  unsetRadioValue(document.getElementsByName('gender'));
  unsetRadioValue(document.getElementsByName('dept'));
}

let newData = {};

function populate(){
  // alert("Inside populate");
  const username = document.getElementById("name_id");
  const textError = document.getElementById('name_error');
  if(username.value.length == 0){
      textError.textContent = "Name is empty";
      return;
  }
  try{
      check_username(username);
      /*textError.textContent = "";*/
  
      let start = new Array();  
      start.push(document.getElementById('day').value);
      start.push(document.getElementById('month').value);
      start.push(document.getElementById('year').value);
      const date_arr = new Date(Date.parse(start[0] + " " + start[1] + " " +start[2]));
      check_date(date_arr);
      let datee = start[0] + "-" + start[1] + "-" +start[2];
      newData.datee = datee;
      newData.name = document.querySelector('#name_id').value;
      newData.profile = getRadioValue(document.getElementsByName('profile'));
      newData.gender = getRadioValue(document.getElementsByName('gender'));
      newData.dept =  getCheckBoxValue(document.getElementsByName('dept'));
      newData.salary = document.querySelector('#myRange').value;

      makeajaxcall('POST', site_properties.json_host_server, true, newData)
        .then(() => { console.log("Added");  
        alert(newData);
        })
        .catch(err => console.log(err));
  }
  catch(exception){
      console.log(exception);
  } 
}

