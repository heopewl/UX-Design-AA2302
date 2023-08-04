// alert("test")

// var check_in = document.getElementById("check_in").value;
// alert(check_in)
// //document.getElementById("information_checkin_date").innerHTML(check_in);




function myFunction() {
    sessionStorage.setItem("check_in_date",  document.getElementById("check_in").value);
    sessionStorage.setItem("check_out_date",  document.getElementById("check_out").value);
}

document.getElementById("information_checkin_date").innerHTML = sessionStorage.getItem("check_in_date");
document.getElementById("information_checkout_date").innerHTML = sessionStorage.getItem("check_out_date");



// my code

// var test = "Garden Oasis Room"

function garden_oasis_button(){
    sessionStorage.setItem("roomSelected",  "Garden Oasis Room");
}

function ocean_retreat_button(){
    sessionStorage.setItem("roomSelected",  "Ocean Retreat Room");
}

document.getElementById("selectedRoom").innerText = sessionStorage.getItem("roomSelected");

function testing(){
    sessionStorage.setItem("fName",  document.getElementById("Fullname").value);
    alert(sessionStorage.getItem("fName"));
}

document.getElementById("information_name").innerText = sessionStorage.getItem("roomSelected");


//var x = "Your" + sessionstorage.getitem("");

//document.getElementById("selectedRoom").innerHTML = x;






//function testing(){
    //sessionStorage.setItem("guestName",  document.getElementById("fullName").value);
//}

//document.getElementById("information_name").innerHTML = sessionStorage.getItem("guestName");






