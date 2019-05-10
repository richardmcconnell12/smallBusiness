import employeeComp from "./employeeComp"

const employeeList = (employeeArr) => {
    console.log("arr", employeeArr)

    const employeeDiv = document.querySelector(".output");
    let allEmployees = "";

    employeeArr.forEach(empObj => {
        console.log("empObj", empObj)
        allEmployees += employeeComp(empObj)
        // console.log("All Emp", allEmployees)
    })

    employeeDiv.innerHTML = allEmployees
}

export default employeeList