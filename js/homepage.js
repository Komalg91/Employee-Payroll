
let EmpPayrollList = new Array();


window.addEventListener("DOMContentLoaded",(e) => {
    makeajaxcall("get", site_properties.json_host_server, true)
    .then(responseText => {
        EmpPayrollList = JSON.parse(responseText);
        createInnerHTML();
    }).catch(err => console.log(err));
    

    // // const btn = document.querySelector('#submit_btn');
    // // if(btn){
    //     btn.addEventListener('click',function(e){
    //     let addData = populate();
    //         makeajaxcall('POST', site_properties.json_host_server, true,addData)
    //         .then(responseText => { 
    //             console.log("Added");
    //             //createInnerHTML();
    //         })
    //         .catch(err => console.log(err));
    //     });
    // }
    
});


function createInnerHTML(){
    // console.log("Inside innerhtml", EmpPayrollList);
    const headerHTML = 
    
    "<th>Profile</th>" +
    "<th>Name</th>" + 
    "<th>Gender</th>" +
    "<th>Department</th>" +
    "<th>Salary</th>" +
    "<th>Start Date</th>" +
    "<th>Actions</th>";

    let innerHTML = `${headerHTML}`;
    
    let empDataArray = EmpPayrollList;
   for(let empData = 0; empData < empDataArray.length; empData++){
        innerHTML = `${innerHTML}
        <tr>

            <td><img src="${empDataArray[empData].profile}"></td>
            <td>${empDataArray[empData].name}</td>
            <td>${empDataArray[empData].gender}</td>
            <td>${empDataArray[empData].dept}</td>
            <td>${empDataArray[empData].salary}</td>
            <td>${empDataArray[empData].datee}</td>
            <td>
            <button type="submit" id="${empDataArray[empData].id}" onclick="delete_entry(this)"><i class="fa fa-trash"></i></button>
            <button type="submit"  id="${empDataArray[empData].id}" onclick= "update_entry(this)"><i class="fa fa-edit"></i></button></td>
        </tr>`;
    }

document.querySelector('.brand_text4').textContent = EmpPayrollList.length;
document.querySelector('.user_details').innerHTML = "HELLO" + " " +details_user();
document.querySelector('.user_details_expand').innerHTML = "HELLO" + " " + details_user();

document.querySelector('#table').innerHTML = innerHTML;
}

function details_user(){
   
    makelogincall("GET",`http://localhost:3000/login_user/`,true)
    .then(responseText => {
        var tokn = JSON.parse(responseText);
        console.log(tokn);
        for(let i = 0;i< tokn.length;i++){
             console.log(tokn[i].token);
            if(tokn[i].token === true){
                var token_new = tokn[i];
                document.querySelector('.user_details').innerHTML = "HELLO" + " "+ token_new.mail;
                document.querySelector('.user_details_expand').innerHTML =  "HELLO" + " " + token_new.mail + ("<br>") + token_new.mobile;      
            }
         }
    })
    .catch(err => console.log(err));   
}


function delete_entry(node){
    var delurl = node.id
    makeajaxcall("DELETE", site_properties.json_host_server + `${delurl}`, true)
    .then(responseText => {
        EmpPayrollList = JSON.parse(responseText);
        createInnerHTML();
    }).catch(err => console.log(err));
}

function update_entry(node){
    
    var update_url= node.id;
    alert(update_url);
    
    // window.location.href = 'http://127.0.0.1:5500/pages/employee_payroll.html';
    // let empData1 = populate1();  
    makeajaxcall("GET", site_properties.json_host_server+`${update_url}`, true)
    .then(responseText =>{ 
        new_data = JSON.parse(responseText);
        if(new_data != null){
            makeajaxcall("DELETE", site_properties.json_host_server+`${update_url}`,true)
            .then(responseText => {window.location.href = 'http://127.0.0.1:5500/pages/employee_payroll.html'})
        }

    
    })
    .catch(err => alert("Failed to update post"));
    // window.location.href = 'http://127.0.0.1:5500/pages/homepage.html';
    // delete_entry(node);
}







function search_table(){
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("filter_text");
    document.getElementById("filter_text").className = "show";
    input.addEventListener('keyup', function(){
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td") ; 
          for(j=0 ; j<td.length ; j++)
          {
            let tdata = td[j] ;
             if (tdata) {
              if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break ; 
              } else {
                tr[i].style.display = "none";
              }
            } 
          }
        }
    })
}
    
//empData1.name = emp_payroll_list.name
    // empData1.profile = emp_payroll_list.profile;
    // empData1.gender = emp_payroll_list.gender;
    // empData1.dept = emp_payroll_list.dept;
    // empData1.salary = emp_payroll_list.salary;
    // empData1.datee = emp_payroll_list._datee;