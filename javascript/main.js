document.addEventListener("DOMContentLoaded", () => {
    const accBtn = document.getElementById("accountBtn");
    if (accBtn) {
        accBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (localStorage.getItem("LoggedIn")) {
                window.location.href = "account.html";
            } else {
                window.location.href = "login.html";
            }
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("usernameLogin").value.trim();
            const password = document.getElementById("passwordLogin").value.trim();

            if (username === "user1234" && password === "pass1234") {
                localStorage.setItem("LoggedIn", username);
                window.location.href = "account.html";
            } else {
                alert("Invalid username or password");
            }
        });
    }
});
