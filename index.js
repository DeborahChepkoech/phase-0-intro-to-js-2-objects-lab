// Write your solution in this file!
const employee = {
    name: "Joy Cheruto",
    streetAddress: "123 Boston",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, name:'Sam', streetAddress: '11 Broadway'}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
    
}
const employee1 = 
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

deleteFromEmployeeByKey(employee, key)

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee; 
  }
  
  
  const employee2 = { name: "Sam", streetAddress: "12 Broadway" };
  const newEmployee = deleteFromEmployeeByKey(employee, "name");
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Removes the key directly from the original object
    return employee; // Returns the modified object
  }
  
 
  const employee3 = { name: "Sam", streetAddress: "12 Broadway" };
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  
  console.log(employee); 