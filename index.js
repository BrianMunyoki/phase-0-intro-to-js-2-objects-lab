const employee={
    name:"Brian",
    streetAddress:"Parklands"
}

function updateEmployeeWithKeyAndValue(employee,streetAddress,Parklands){
 const newObject={...employee}
 newObject["streetAddress"]="11 Broadway";
 return newObject
}
newObject=updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway"
)

console.log(newObject)

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,parklands){
    employee["streetAddress"]="12 Broadway";
    return employee
}

console.log(employee)

function deleteFromEmployeeByKey(employee,name){
    const newEmployee={...employee}
    delete newEmployee.name
return newEmployee
}
console.log (employee)
const newEmployee=deleteFromEmployeeByKey(
    employee,
    "name",
)
console.log(newEmployee['name'])
console.log(newEmployee)

function destructivelyDeleteFromEmployeeByKey(employee,name){
    const newEmployee=delete employee.name;
    return employee
}
newEmployee=destructivelyDeleteFromEmployeeByKey(
    employee,
    "name"
 )

console.log(newEmployee)