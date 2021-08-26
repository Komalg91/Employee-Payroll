window.addEventListener("DOMContentLoaded",(e) => {
    createInnerHTML();
});

const createEmpPayrollJson = () => {
    let EmpPayrollList = [       ];
    localStorage.setItem("EmpPayrollList", JSON.stringify(EmpPayrollList));
    //return EmpPayrollList;
}


function createInnerHTML(){
    const headerHTML = 
    "<th></th>" +
    "<th></th>" +
    "<th>Name</th>" + 
    "<th>Gender</th>" +
    "<th>Department</th>" +
    "<th>Salary</th>" +
    "<th>Start Date</th>" +
    "<th>Actions</th>";

    let innerHTML = `${headerHTML}`;
    //let empDataArray = createEmpPayrollJson();
    let empDataArray = JSON.parse(localStorage.getItem("EmpPayrollList"));
    

    for(let empData = 0; empData < empDataArray.length; empData++){
        innerHTML = `${innerHTML}
        <tr>
            <td>${empDataArray[empData].id}</td>
            <td><img src="${empDataArray[empData].profile}"></td>
            <td>${empDataArray[empData].name}</td>
            <td>${empDataArray[empData].gender}</td>
            <td class='table_dept'>${empDataArray[empData].dept}</td>
            <td>${empDataArray[empData].salary}</td>
            <td>${empDataArray[empData].datee}</td>
            <td>
            <button type="submit" id="${empDataArray[empData].id}" onclick="delete_entry(this)"><i class="fa fa-trash"></i></button>
            <button type="submit"  id="${empDataArray[empData].id}" onclick= "update_entry(this)"><i class="fa fa-edit"></i></button></td>
        </tr>`;
    }
    
document.querySelector('#table').innerHTML = innerHTML;

}

function delete_entry(node){
    let empData = JSON.parse(localStorage.getItem("EmpPayrollList"));
    let empData_id = empData.find(emp_id => emp_id.id == node.id);
    if(!empData_id){
        console.log("No entry");
        return;
    }
    const index = empData.map(emp_id => emp_id.id).indexOf(empData_id.id);
    empData.splice(index,1);
    localStorage.setItem('EmpPayrollList',JSON.stringify(empData));
    createInnerHTML();
}

function update_entry(node){
    let empData = JSON.parse(localStorage.getItem("EmpPayrollList"));
    let empData_id = empData.find(emp_id => emp_id.id == node.id);
    if(!empData_id){
        console.log("No entry");
        return;
    }
    const index = empData.map(emp_id => emp_id.id).indexOf(empData_id.id);
    let newData_update = { };
    newData_update.username = empData_id.username;
    
    newData_update.profile = empData_id.profile;
    newData_update.gender = empData_id.gender;
    newData_update.dept = empData_id.dept;
    newData_update.salary = empData_id.salary;
    newData_update.id = empData_id.id;
    newData_update.startDate = empData_id.startDate;
    var EmpPayrollList_update = JSON.parse(localStorage.getItem("EmpPayrollList_update"));
  
    if(EmpPayrollList_update!=null){
        console.log(EmpPayrollList_update);
        EmpPayrollList_update.push(newData_update);
        
    }
    else{
        EmpPayrollList_update = [newData_update];
    }   
    
    localStorage.setItem("EmpPayrollList_update", JSON.stringify(EmpPayrollList_update));
    window.location.href = "http://127.0.0.1:5500/pages/employee_payroll.html";

}







const dept_multi = (temp) => {
    let dept_output = '';
    for(let dept of temp){
        dept_output = `${dept_output}<div class="table_dept">${dept}</div>`
    }
    return dept_output;
}








