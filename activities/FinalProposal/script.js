document.addEventListener("DOMContentLoaded",()=>{

const btn = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");

if (btn) btn.onclick = () => nav.classList.toggle("open");
const page = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(a =>{
if (a.getAttribute("href")=== page) a.classList.add("active");
});

const form = document.getElementById("contactForm");
const result = document.getElementById("formResult");

if (!form) return;

form.addEventListener("submit", e => {
e.preventDefault();

const name = form.name.value.trim();
const email = form.email.value.trim();
const msg = form.message.value.trim();

if (!name || !email || !msg) {
result.textContent = "Please fill all required fields.";
result.style.color = "red";
result.hidden = false;
return;
}

form.reset();
result.textContent = "Thank you! Your message was submitted.";
result.style.color = "green";
result.hidden = false;
});
});