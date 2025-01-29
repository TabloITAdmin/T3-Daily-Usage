const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Yan" && password === "00547") {
        window.open("main.html", "_self");
    }
    else if (username === "Kai" && password === "00660") {
        window.open("main.html", "_self");
    }
    else if (username === "Ann" && password === "00591") {
        window.open("main.html", "_self");
    }
    else if (username === "Ces" && password === "00107") {
        window.open("main.html", "_self");
    }
    else if (username === "Wil" && password === "00112") {
        window.open("main.html", "_self");
    }
    else if (username === "Ron" && password === "00388") {
        window.open("main.html", "_self");
    }
    else if (username === "Jus" && password === "00727") {
        window.open("main.html", "_self");
    }
    else if (username === "marvs" && password === "00622") {
        window.open("main.html", "_self");
    }
    else if (username === "DPS" && password === "00051") {
        window.open("main.html", "_self");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }

})
