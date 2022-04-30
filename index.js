console.log("server is on");


function returnValidatePhone() {
  let x = document.forms["form"]["phone"].value;
  if (x == "") {
    alert("phone number required");
    return false;
  }
  var p = /^\d{10}$/;
  if (x.match(p)) {
    return true;
  } else {
    alert("invalid contact number");
    return false;
  }
}
function returnvalidateAmount() {
  var amount = document.forms["form"]["amount"].value;
  if (isNaN(amount)) {
    alert("please enter a valid amount");
    return false;
  }
}

function showdetail() {
    var num = document.getElementById("phone");
    var amount = document.getElementById("amount");
    var status = document.getElementById("status");
    // let note = document.getElementById("note");
    let date = new Date();
  
    alert(amount.value + " is sent to " + num.value + " successfully at " + date);
  }
