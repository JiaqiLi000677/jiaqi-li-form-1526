let fn = document.getElementById("fname");
let em = document.getElementById("email");
let msg = document.getElementById("message");
let btn = document.getElementById("submit");

function formValidator() {

    let data = {};
    let errors = {};

    if (fn.value !== "") {
        data.fullname = fn.value;
    } else {
        errors["fn"] = "Full name is missing";
    }

    if (em.value !== "") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em.value)) {
            data.email = em.value;
        } else {
            errors["em"] = "Invaild email";
        }

    } else {
        errors["em"] = "Email is missing";
    }

    if (msg.value !== "") {
        data.message = msg.value;
    } else {
        errors["msg"] = "Message name is missing";
    }

    if (Object.keys(errors).length === 0) {
        console.log("COLLECTED DATA", data);
        document.getElementById("myForm").reset();
    } else {
        console.log("ERRORS", errors);
    }
}

btn.addEventListener("click", formValidator);
