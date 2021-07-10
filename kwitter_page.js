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
//YOUR FIREBASE LINKS

email_address = localStorage.getItem("email_address");
room_name = localStorage.getItem("room_name");

function send()
{
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
     });
     document.getElementById("msg").value = "";       
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       messsage = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name +"<img class= 'user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='ubdateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

       row = name_with_tag + message_with_tag +like_button + span_with_tag;
       document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(messsage_id)
{
    console.log("clicked on like button - " + messsage_id);
    button_id = messsage_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) +1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(messsage_id).update({
      like : updated_likes
    });
   
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter_room.html");
}