const User = "abcde";
const Pass = "12345";

const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

if (localStorage.getItem("isLoggedIn") === "true"){
    window.location.href = "account.html";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("username").value;
    const passInput = document.getElementById("password").value;

    if (userInput === User && passInput == Pass){
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", userInput);

        setTimeout(() => window.location.href = "account.html", 1000);
    }
});