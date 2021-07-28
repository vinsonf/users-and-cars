// selects all the input elements
const inputs = document.querySelectorAll('input');
// selects all the button elements
const buttons = document.querySelectorAll('button');
// selects all the uls
const uls = document.querySelectorAll('ul');

// declares a variable called users and assign it to and empty array
const users = [];

// creates a class of User
// creates a new object - from the constructor function
class User {
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(inputs, buttons, uls)

// Adds an event listener to the first button for the click event and runs the addUser function
buttons[0].addEventListener('click', addUser);

inputs[0].addEventListener('keydown', function(event){
    console.log(event);
    if (event.code === 'Enter') {
        console.log('you pressed enter');
        addUser();
    }
});

buttons[1].addEventListener('click', searchUsers);

function addUser() {
    if (!inputs[0].value || !inputs[1].value) {
        return alert('fill out the name')
    }
    const user = new User(inputs[0].value, inputs[1].value);
    users.push(user);

    const li = document.createElement('li');
    li.innerText = user.getFullName();
    uls[0].appendChild(li);
    li.addEventListener('click', function() {

        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
 
    })
}

function searchUsers() {
    const searchValue = inputs[2].value.toLowerCase();
    const foundUsers = users.filter(function(user) {
        if (user.getFullName().toLowerCase().includes(searchValue)) {
            return true;
        } 
    });
    console.log(foundUsers);

    uls[1].innerHTML = '';
    foundUsers.forEach(function(user) {
        const li = document.createElement('li');
        li.innerText = user.getFullName();
        uls[1].appendChild(li);
    })
}