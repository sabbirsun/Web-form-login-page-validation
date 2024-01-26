const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", ()=>{
    const type = password.getAttribute("type") == "password" ? "text":"password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
})