// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB80A-vrBnfSqKBiiwEvguZBa-O3x0gpYY",
  authDomain: "denver-c2a65.firebaseapp.com",
  databaseURL: "https://denver-c2a65-default-rtdb.firebaseio.com",
  projectId: "denver-c2a65",
  storageBucket: "denver-c2a65.appspot.com",
  messagingSenderId: "294274690066",
  appId: "1:294274690066:web:d6d6855aa8aef00d577ccb",
  measurementId: "G-8KWJYNRXJ5"
};

  firebase.initializeApp(firebaseConfig);


  var denverDB = firebase.database().ref("denver");


  document.getElementById("form").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var phone = getElementVal("phone");
    var amount = getElementVal("amount");
    var notes = getElementVal("notes");
  
    saveMessages(phone, amount, notes);
   
    // //   enable alert
    // document.querySelector(".alert").style.display = "block";
  
    // //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    //   reset the form
    document.getElementById("form").reset();
  }
  
  console.log(phone+ amount + notes)
  const saveMessages = (phone, amount, notes ) => {
    var newContactForm = denverDB.push();
  
    newContactForm.set({
      phone: phone,
      amount: amount,
      notes: notes,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };