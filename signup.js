

function signUp() {
   var sigup = {
      email:emailInp.value,
      password:password.value, 
   
   }
    localStorage.setItem("storageName", JSON.stringify(signup))
    window.location = "todopage3.html"
  }