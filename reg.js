const firebaseConfig = {
  apiKey: "AIzaSyAv_WIc9KUZEUrYU2Egmpbql4Hli7G8J_o",
  authDomain: "aicssyc-22.firebaseapp.com",
  databaseURL: "https://aicssyc-22-default-rtdb.firebaseio.com",
  projectId: "aicssyc-22",
  storageBucket: "aicssyc-22.appspot.com",
  messagingSenderId: "371299220040",
  appId: "1:371299220040:web:67d089b37c3d3e998d367d"
};

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm1');

  document.getElementById('contactForm1').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

  var first_name = getElementVal("first_name");
  var middle_name = getElementVal("middle_name");
  var last_name = getElementVal("last_name");
  var emailid = getElementVal("emailid");
//   var msgContent = getElementVal("msgContent");
  var phone = getElementVal("phone");
  var age = getElementVal("age");
  var gender = getElementVal("gender");
  var address = getElementVal("address");
  var pin = getElementVal("pin");
  var college = getElementVal("college");
  var ieee = getElementVal("ieee");
  var ieeecs = getElementVal("ieeecs");
  var online = getElementVal("online");
  var reg_no = getElementVal("reg_no");

  saveMessages(first_name, middle_name, last_name, emailid, phone, age, gender, address, pin, college, ieee, ieeecs, online, reg_no);
  // document.querySelector(".alert").style.display = "block";

  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  window.location.href = "thanks.html";

  document.getElementById("contactForm1").reset();

  }

  const saveMessages = (first_name, middle_name, last_name, emailid, phone, age, gender, address, pin, college, ieee, ieeecs, online, reg_no) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      emailid: emailid,
      phone: phone,
      age: age,
      gender: gender,
      address: address,
      pin: pin,
      college: college,
      ieee: ieee,
      ieeecs: ieeecs,
      online: online,
      reg_no: reg_no,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };