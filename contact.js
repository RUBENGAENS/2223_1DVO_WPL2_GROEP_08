const email = document.getElementById("e-mail");
const commentaar = document.getElementById("Commentaar");
const errorblock = document.getElementById("errors");
const CreateUserForm = document.getElementById("CreateUserForm");


CreateUserForm.addEventListener("submit", (e) => {
    let errors = [];
    if (email.value === '' || email.value === null)
    {
        errors.push("e-mail is verplicht.")
    }
    if (errors.length >0)
    {
        e.preventDefault()
        errorblock.innerText = errors.join(', ');
    }
})