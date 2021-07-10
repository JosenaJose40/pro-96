function addUser(){
    email_address = document.getElementById("email_address").value;
    password = document.getElementById("password").value;

    localStorage.setItem("password",Password);
    localStorage.setItem("email_address",Email_address);
     window.location = "kwitter_room.html";
}
