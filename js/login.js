window.addEventListener("DOMContentLoaded",(e) => {
    createInnerHTML();
});

const createEmpPayrollJson = () => {
    let EmpPayrollList = [
        {
            name: 'abcd',
            gender: 'female',
            dept: 'engineer',
            salary: '10000',
            startDate: '1-1-2016',
            note:'',
            profile: '../assets/Ellipse -4.png'
        },
        {
            name: 'efgh',
            gender: 'male',
            dept: 'sales',
            salary: '10000',
            startDate: '2-1-2016',
            note:'',
            profile: '../assets/Ellipse -2.png'
        }

    ];
    //localStorage.setItem("EmpPayrollList", JSON.stringify(EmpPayrollList));
    return EmpPayrollList;
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
    let empDataArray = createEmpPayrollJson();
    //let empDataArray = JSON.parse(localStorage.getItem("EmpPayrollList"));
    

    for(let empData = 0; empData < empDataArray.length; empData++){
        innerHTML = `${innerHTML}
        <tr>
            <td>${empDataArray[empData].id}</td>
            <td><img src="${empDataArray[empData].profile}"></td>
            <td>${empDataArray[empData].name}</td>
            <td>${empDataArray[empData].gender}</td>
            <td class='table_dept'>${empDataArray[empData].dept}</td>
            <td>${empDataArray[empData].salary}</td>
            <td>1-1-2016</td>
            <td>
            <button type="submit" id="${empDataArray[empData].id}" onclick="delete_entry(this)"><i class="fa fa-trash"></i></button>
            <button type="submit"  id="${empDataArray[empData].id}" onclick= "update_entry(this)"><i class="fa fa-edit"></i></button></td>
        </tr>`;
    }
    
document.querySelector('#table').innerHTML = innerHTML;

}








