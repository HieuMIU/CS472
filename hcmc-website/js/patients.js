
const tbody = document.getElementById("tbodyPatientsList");
const submitButton = document.getElementById("btnRegisterPatient");
const form = document.getElementsByTagName("form");
const parentIdInput = document.getElementById("patientIdNumber");
parentIdInput.value = "EP-001-000001";
const firstNameInput = document.getElementById("firstName");
firstNameInput.value = "Ana";
const middleInitialsInput = document.getElementById("middleInitials");
middleInitialsInput.value = "J";
const lastNameInput = document.getElementById("lastName");
lastNameInput.value = "Smith";
const dateOfBirthInput = document.getElementById("dateOfBirth");
dateOfBirthInput.value = "1945-01-05";
const ddlDepartmentInput = document.getElementById("ddlDepartment");
ddlDepartmentInput.value = "Cardiology";
const radioIsOutPatientYesInput = document.getElementById("radioIsOutPatientYes");
const radioIsOutPatientNoInput = document.getElementById("radioIsOutPatientNo");
radioIsOutPatientYesInput.checked = true;
function addRow(){
    var row = tbody.insertRow();

    const id = parentIdInput.value;
    var cell1 = row.insertCell();
    var text = document.createTextNode(id);
    cell1.appendChild(text);

    const firstName = firstNameInput.value;
    var cell2 = row.insertCell();
    text = document.createTextNode(firstName);
    cell2.appendChild(text);

    const middleInitials = middleInitialsInput.value;
    var cel3 = row.insertCell();
    text = document.createTextNode(middleInitials);
    cel3.appendChild(text);

    const lastName = lastNameInput.value;
    var cell4 = row.insertCell();
    text = document.createTextNode(lastName);
    cell4.appendChild(text);

    const dateOfBirth = dateOfBirthInput.value;
    var cell5 = row.insertCell();
    text = document.createTextNode(dateOfBirth);
    cell5.appendChild(text);

    const ddlDepartment = ddlDepartmentInput.value;
    var cell6 = row.insertCell();
    text = document.createTextNode(ddlDepartment);
    cell6.appendChild(text);

    const radioIsOutPatient = radioIsOutPatientYesInput.Checked;
    var cell7 = row.insertCell();
    text = document.createTextNode(radioIsOutPatient ? "Yes" : "No");
    cell7.appendChild(text);
}

document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        addRow();
    });
});

function showElderlyPatientOnly(isShow){
    if(isShow){
        var trtags = document.getElementsByClassName("td");
        for(let row of trtags){
            row.classList.remove('d-none');
        }
    }
}

radioIsOutPatientYesInput.addEventListener('click', showElderlyPatientOnly(true));
radioIsOutPatientYesInput.addEventListener('click', showElderlyPatientOnly(false));