document.querySelector("form").addEventListener("submit", function(event){event.preventDefault();
const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const level = document.getElementById("level").value;
const password = document.getElementById("password").value.trim();
const contactRadio = document.querySelector('input[name="contact"]:checked')
const contact = contactRadio ? contactRadio.value :"";
if (!firstName || !lastName || !level) {
    alert("Please enter First Name, Last Name, and choose a Membership level.");
    return;
}
if (!contact) {
    alert("Please choose a Preferred Contact option.");
    return;
}
if (password.length<8) {
    alert("Password must be at least 8 characters.");
    return;
}
const interests = Array.from(
    document.querySelectorAll('input[name="interests"]:checked')
).map(i=> i.value);
const formData = {
    firstName,
    lastName,
    level,
    contact,
    interests,
    password 
};
console.log(formData);
const xhr = new XMLHttpRequest();
xhr.open("GET", "response.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        let msg = document.getElementById("message");
        if (!msg) {
            msg = document.createElement("div");
            msg.id = "message";
            msg.style.marginTop = "20px";
            msg.style.fontWeight = "bold";
           document.querySelector("form").insertAdjacentElement("afterend", msg);
        }
        msg.textContent = data.message;
        Array.from(document.querySelectorAll("input,select,textarea,button"))
        .forEach(el => el.disabled = true);
    }
       else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
});

