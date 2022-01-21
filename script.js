function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(pilih.value == 1 && username == "user" && password == "user"){
      window.alert("Login User Berhasil");
      window.location = "login_beranda.html"
    }else if(pilih.value == 2 && username == "admin" && password == "admin"){
      window.alert("Login Admin Berhasil");
      window.location = "dashboard.html"
    }else{
      window.alert("Login Gagal")
    }
  }