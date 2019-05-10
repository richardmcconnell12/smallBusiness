const employeeComp = (empObj) => {

    let employeeHtml = `<div class="employee">
        <header class="employee__name">
            <h2>${empObj.name}</h2>
        </header>
        <section class="employee__department">
            Works in the ${empObj.department.name} department
        </section>
        <section class="employee__computer">
            Currently using a ${empObj.computer.name}
        </section>
        <hr>
        </div>`;

    document.querySelector(".output").innerHTML += employeeHtml
}

const getAllEmployees = (empId) => {
    return fetch(`http://localhost:8088/employees/${empId}?_expand=computer&_expand=department`)
        .then(response => response.json())
}

for (let i = 1; i < 5; i++) {
    getAllEmployees(i).then(empObj => {
        employeeComp(empObj)
    })
}

