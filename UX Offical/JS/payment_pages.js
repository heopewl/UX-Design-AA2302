// alert("test")

// var check_in = document.getElementById("check_in").value;
// alert(check_in)
// //document.getElementById("information_checkin_date").innerHTML(check_in);


// Set the Check in & Check out date in the information page


function myFunction() {
    sessionStorage.setItem("check_in_date",  document.getElementById("check_in").value);
    sessionStorage.setItem("check_out_date",  document.getElementById("check_out").value);
}

document.getElementById("information_checkin_date").innerHTML = "Check In Date: " + sessionStorage.getItem("check_in_date");
document.getElementById("information_checkout_date").innerHTML = "Check Out Date: " +sessionStorage.getItem("check_out_date");





// Set the room selected on the information page

function garden_oasis_button(){
    sessionStorage.setItem("roomSelected",  "Garden Oasis Room");
}

function ocean_retreat_button(){
    sessionStorage.setItem("roomSelected",  "Ocean Retreat Room");
}

function premium_oasis_suite(){
    sessionStorage.setItem("roomSelected",  "Premium Oasis Suite");
}

function sentosa_suite(){
    sessionStorage.setItem("roomSelected",  "Sentosa Suite");
}
document.getElementById("selectedRoom").innerText = sessionStorage.getItem("roomSelected");





function testing(){
    sessionStorage.setItem("fName",  document.getElementById("Fullname").value);
    var fullMessage = "Room has been successfully booked!\n" + "Guest Name: " + sessionStorage.getItem("fName")
    alert(fullMessage);
}



//function testing(){
    //sessionStorage.setItem("fName", document.getElementById("Fullname").value);
    //document.getElementById("information_name").innerHTML = "Guest name: " + sessionStorage.getItem("fName");
//}
    

//document.getElementById("information_name").innerHTML = sessionStorage.getItem("fName");




//document.getElementById("information_name").innerText = sessionStorage.getItem("roomSelected");


//var x = "Your" + sessionstorage.getitem("");

//document.getElementById("selectedRoom").innerHTML = x;






//function testing(){
    //sessionStorage.setItem("guestName",  document.getElementById("fullName").value);
//}

//document.getElementById("information_name").innerHTML = sessionStorage.getItem("guestName");






