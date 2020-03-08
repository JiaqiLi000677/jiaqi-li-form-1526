let fn = document.getElementById("fname");
let em = document.getElementById("email");
let msg = document.getElementById("message");
let btn = document.getElementById("submit");

function formValidator() {

    let data = {};
    let errors = [];

    if (fn.value !== "") {
        data.fullname = fn.value;
    } else {
        errors.push("Full name is missing");
    }

    if (em.value !== "") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push("Invaild email");
        }

    } else {

        errors.push("Email is missing");
    }

    if (msg.value !== "") {
        data.message = msg.value;
    } else {
        errors.push("Message name is missing");
    }

    if (errors.length === 0) {
        console.log("COLLECTED DATA", data);
        document.getElementById("myForm").reset();
    } else {
        console.log("ERRORS", errors);
    }
}

btn.addEventListener("click", formValidator);
