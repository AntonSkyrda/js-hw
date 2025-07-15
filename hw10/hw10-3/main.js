const userForm = document.forms.userForm;

userForm.addEventListener("submit", event => {
    document.querySelectorAll("p").forEach((el) => el.remove());
    event.preventDefault();
    const pName = document.createElement("p");
    pName.innerText = `${userForm.name.value}`;
    const pSurname = document.createElement("p");
    pSurname.innerText = `${userForm.surname.value}`;
    const pAge = document.createElement("p");
    pAge.innerText = `${userForm.age.value}`;
    document.body.append(pName, pSurname, pAge);
})