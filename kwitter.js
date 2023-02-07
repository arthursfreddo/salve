const firebaseConfig = {
  apiKey: "AIzaSyC-01NIgBHluim2S9gg1sRH-xlRsC56WTU",
  authDomain: "ropamm-f2820.firebaseapp.com",
  projectId: "ropamm-f2820",
  storageBucket: "ropamm-f2820.appspot.com",
  messagingSenderId: "790063176345",
  appId: "1:790063176345:web:bc14c568ccf2e15877b608"}

function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}

