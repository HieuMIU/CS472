"use strict"
const body = document.getElementById("tbodyPatientsList");

const submitButton = document.getElementById("btnRegisterPatient");
const parentIdInput = document.getElementById("patientIdNumber");
const firstNameInput = document.getElementById("firstName");
const middleInitialsInput = document.getElementById("middleInitials");
const lastNameInput = document.getElementById("lastName");
const dateOfBirthInput = document.getElementById("dateOfBirth");
const ddlDepartmentInput = document.getElementById("ddlDepartment");
const radioIsOutPatientYesInput = document.getElementById("radioIsOutPatientYes");

var elderlyCheckbox = document.getElementById("chkElderlyPatients");
var shoutoutPatientCheckbox = document.getElementById("chkShowOutPatients");

function addNewPatient(){
    var data = readData()
    addRow(...data);
}

function readData(){
    const id = parentIdInput.value;
    const firstName = firstNameInput.value;
    const middleInitials = middleInitialsInput.value;
    const lastName = lastNameInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const ddlDepartment = ddlDepartmentInput.value;
    const radioIsOutPatient = radioIsOutPatientYesInput.checked;
    return [id, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient]
}

function addRow(id, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient){
    var row = body.insertRow();

    var cell = row.insertCell();
    var text = document.createTextNode(id);
    cell.appendChild(text);

    cell = row.insertCell();
    text = document.createTextNode(firstName);
    cell.appendChild(text);

    cell = row.insertCell();
    text = document.createTextNode(middleInitials);
    cell.appendChild(text);

    cell = row.insertCell();
    text = document.createTextNode(lastName);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.classList.add("elderly-check");
    text = document.createTextNode(dateOfBirth);
    cell.appendChild(text);

    cell = row.insertCell();
    text = document.createTextNode(ddlDepartment);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.classList.add("out-patient-check");
    text = document.createTextNode(radioIsOutPatient ? "Yes" : "No");
    cell.appendChild(text);
}

document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        if (!patientId.checkValidity()) {
            return;
        }
        event.preventDefault();
        //add new row with data from the form
        addNewPatient();
    });
    elderlyCheckbox.addEventListener('click', filterList);
    shoutoutPatientCheckbox.addEventListener('click', filterList);
});

function filterList(){
    var rows = body.childNodes;
    var hasElderlyFilter = elderlyCheckbox.checked;
    var hasOutPatientFilter = shoutoutPatientCheckbox.checked;

    for(let row of rows){
        row.classList.remove('d-none');
        
        //add d-none class to <tr> if patients has 65 year olds or more
        if(hasElderlyFilter){
            var dobCell = row.querySelector(".elderly-check");
            var dob = new Date(dobCell.textContent);
            let currentDate = new Date();
            if(currentDate.getFullYear() - dob.getFullYear() <= 65)
                row.classList.add('d-none');
        }
        //add d-none class to <tr> if patients is out-patient
        if(hasOutPatientFilter){
            var dobCell = row.querySelector(".out-patient-check");
            if(dobCell.textContent == "No")
                row.classList.add('d-none');
        }
    }
    
}



//add sample patients
addRow("EP-001-000001","Ana","J","Smith","1945-1-5","Ear, Nose and Throat",false);
addRow("P-001-000002","Bob","K","Jones","1985-5-4","Cardiology",true);
addRow("EP-001-000003","Carlos","A","Hernandez","1957-3-13","Cardiology",false);
