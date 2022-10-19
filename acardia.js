const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {e.preventDefault();
const username = loginForm.username.value;
const password = loginForm.password.value;
if (username === "anggota" && password === "1235") {window.open('https://sites.google.com/view/koperasi-mandiri/tagihan', '_blank');}
else {alert("Salah Gais, coba lagi");}})
