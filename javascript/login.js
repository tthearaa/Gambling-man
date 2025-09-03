const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const container = document.getElementById("form-container");

loginBtn.addEventListener("click", () => {
    container.style.height = "21em";
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
    container.style.height = "29em";
    loginBtn.classList.remove("active");
    signupBtn.classList.add("active");
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
});