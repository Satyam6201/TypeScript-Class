"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const nameInput = document.getElementById('firstname');
    const name = nameInput.value;
    const lastName = document.getElementById('lastname');
    const lsname = lastName.value;
    const email = document.getElementById('email');
    const Email = email.value;
    console.log(name, lsname, Email);
}
