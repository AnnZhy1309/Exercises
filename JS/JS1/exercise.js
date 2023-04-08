function calculateSalary(role){
    switch (role){
    case "ceo":
        console.log(2200);
        break;
    case "manager":
        console.log(1800);    
        break;
    case "cto":
        console.log(1800);
        break;
    case "developer":
        console.log(1500);
        break;
    default:
        console.log(1000);
        break;
}
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');


console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);