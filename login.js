console.log("All ok");

document.getElementById("signIn").addEventListener("click", function () {
  /**
   * 1. sob input field dhorte hobe
   * 2. input er value dhorte hobe
   * 3. match kore condition diya login korte hobe
   */

  // Get the userName
  const inputUserName = document.getElementById("inputUserName");
  const name = inputUserName.value;
  console.log(inputUserName);

  // get the password
  const inputPassword = document.getElementById("inputPassword");
  const pass = inputPassword.value;
  console.log(inputPassword);

  // match the values
  if (name == "admin" && pass == "admin123") {
    alert("Sign in success");
    window.location.assign("home.html");
  } else {
    alert("Sign in faild");
  }
})