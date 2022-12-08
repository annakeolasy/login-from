function buttonlogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "user" && password === "user") {
      window.open ("/user.html");
    } else if (username === "admin" && password === "admin") {
      window.open  ("/admin.html");
    } else {
      alert("Login Fail Please try again");
    }
  }