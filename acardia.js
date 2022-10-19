<script type='text/javascript'>
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {e.preventDefault();
const username = loginForm.username.value;
const password = loginForm.password.value;
if (username === "anggota" && password === "1235") {window.open('https://sites.google.com/view/koperasi-mandiri/tagihan', '_blank');}
else {alert("Salah Gais, coba lagi");}})
</script>
<div id="njobo" style="text-align:center;">
<div style="height:100%;">
<form id="login-form">
<input type="text" name="username" id="username-field" placeholder="Username" style="width:50%;"><br/><br/>
<input type="password" name="password" id="password-field" placeholder="Password" style="width:50%;"><br/><br/>
<input type="submit" value="Masuk Gan" id="login-form-submit" style="width:50%;">
</form>
</div>
</div>
