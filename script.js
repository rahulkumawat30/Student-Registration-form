let registrationForm = document.getElementById("registrationForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let course = document.getElementById("course");
let coding = document.getElementById("coding");
let cricket = document.getElementById("cricket");
let music = document.getElementById("music");

registrationForm,addEventListener("submit", function(event){
    event.preventDefault();

    if(name.value.trim() === ""){
        alert("Please enter your name!");
        name.focus();
        return;
    }
    if(email.value.trim() === ""){
        alert("Please enter your email!");
        email.focus();
        return;
    }
    if(password.value.length < 6){
        alert("Password must be at least 6 characters!");
        password.focus();
        return;
    }
    if(!/^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/.test(password.value)){
       alert("Password must be at least 6 characters and contain a letter and a number!");
     password.focus();
        return;
    }
    if(phone.value.trim() === ""){
        alert("Please enter your mobile number!");
        phone.focus();
        return;
    }
    if(!/^[0-9]{10}$/.test(phone.value)){
        alert("Phone number must be exactly 10 digits!");
        phone.focus();
        return;
    }
    if(dob.value === ""){
        alert("Please select your date of birth!");
        dob.focus();
        return;
    }
    let gender = document.querySelector('input[name="gender"]:checked');
    if(!gender){
        alert("Please select your gender!");
        return;
    }
    if(course.value === ""){
        alert("Please select your course!");
        course.focus();
        return;
    }
    if(!coding.checked && !cricket.checked && !music.checked){
alert("Please select at least one hobby!");
return;
    }
    alert("Registration Successful!");
});