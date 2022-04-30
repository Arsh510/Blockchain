console.log("server is on")
function showdetail(){
var num = document.getElementById("phone");
var amount = document.getElementById("amount");
var status=document.getElementById("status");
// let note = document.getElementById("note");
let date = new Date();

alert(amount.value + " is sent to " +num.value + " successfully at "+ date );
// status= status.innerHTML= amount.value + " is sent to " +num.value + " successfully at "+ date ;
}
