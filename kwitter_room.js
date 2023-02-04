
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEGJSzLXVjd7JxBYe84iFssUifDKIvd90",
  authDomain: "kwitter-f6b0d.firebaseapp.com",
  databaseURL: "https://kwitter-f6b0d-default-rtdb.firebaseio.com",
  projectId: "kwitter-f6b0d",
  storageBucket: "kwitter-f6b0d.appspot.com",
  messagingSenderId: "314558724967",
  appId: "1:314558724967:web:35014e9a9013f6d7c0cdc2",
  measurementId: "G-D6C0SZTBK5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
