const firebaseConfig = {
    apiKey: "AIzaSyATwELngXbGtLFcYw7aL6Q1fHgnWW98j74",
    authDomain: "contactform-4ad2d.firebaseapp.com",
    databaseURL: "https://contactform-4ad2d-default-rtdb.firebaseio.com",
    projectId: "contactform-4ad2d",
    storageBucket: "contactform-4ad2d.appspot.com",
    messagingSenderId: "634707415247",
    appId: "1:634707415247:web:ca56380283986060c3a7ba"
  };

 firebase.initializeApp(firebaseConfig);

 var contactFormDB = firebase.database().ref("contactForm");

 document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var branch = getElementVal("inputState");
  var batch = getElementVal("inputStates");
  var num = getElementVal("no");
  var pic = getElementVal("files");

  saveMessages(name, emailid, branch, batch, num, pic);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
  
}

const saveMessages = (name, emailid, branch, batch, num, pic) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    branch: branch,
    num: num,
    batch: batch,
    pic: pic
  });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
   
}

let storageRef = firebase.storage().ref('Images');

function uploadData() {
  let file = document.getElementById("files").files[0];
  console.log(file);

  let thisRef = storageRef.child(file.name);
  thisRef.put(file).then(res => {
    console.log("Upload success");
  }).catch(e => {
    console.log('Error '+e);
  })
}
  

