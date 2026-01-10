function getInfo() {
    const nameInput = document.getElementById('firstname') as HTMLInputElement;
    const name:string = nameInput.value;

    const lastName = document.getElementById('lastname') as HTMLInputElement;
    const lsname:string = lastName.value;

    const email = document.getElementById('email') as HTMLInputElement;
    const Email:string = email.value;

    console.log(name, lsname, Email)
}