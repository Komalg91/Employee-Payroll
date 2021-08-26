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







