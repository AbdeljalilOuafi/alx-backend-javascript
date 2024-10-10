interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'US',
}

const student2: Student = {
    firstName: 'Abdeljalil',
    lastName: 'Ouafi',
    age: 23,
    location: 'MA',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let table = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = table.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();

    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}
document.body.appendChild(table);
