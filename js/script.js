var buttons = document.getElementsByClassName("myButton");

// Iterate over the collection of buttons and add the event listener to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Change the URL to the desired page
        window.location.href = "https://www.cnn.com/travel/news";
    });
}


function bgc(input) {
    if (input.style.backgroundColor != "#D2E3C8") {
        input.style.backgroundColor = "#D2E3C8";
    }
    else {
        input.style.backgroundColor = "white"
    }
}

function validateN(name) {
    var name1 = name.value;
    if (name1.length < 3 || name.value == "") {
        document.getElementById("span2").textContent = "Invalid name, Enter again";
        document.getElementById("exampleFormControlInput1").focus();
        document.getElementById("exampleFormControlInput1").select();

    }
    else {
        document.getElementById("span2").textContent = "";
    }
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function pass(pas) {
    var email = document.getElementById("exampleInputEmail1").value;
    var check = emailRegex.test(email);
    if (check == false) {
        document.getElementById("span1").textContent = "Invalid email, Enter again";

    }
    else {
        document.getElementById("span1").textContent = "";
    }
}