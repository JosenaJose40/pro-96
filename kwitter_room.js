var firebaseConfig = {
    apiKey: "AIzaSyAvv8ET6ftwuQA-hcjkhcZyCAypkSUf5js",
    authDomain: "lets-chat-web-app-da5ff.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-da5ff-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-da5ff",
    storageBucket: "lets-chat-web-app-da5ff.appspot.com",
    messagingSenderId: "123145948945",
    appId: "1:123145948945:web:a5850d9c244db1677b06b0",
    measurementId: "G-H71DTFJX48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
  room_name = document.getElementById("room_name").value;
 console.log(room_name);
  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
  window.location = "index.html";
}
