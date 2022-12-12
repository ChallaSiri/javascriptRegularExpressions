var nameError= document.getElementById('name-error');
var mobileError= document.getElementById('mobile-error');
var emailError= document.getElementById('email-error');
var passwordError= document.getElementById('password-error');

function nameCheck(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        
        nameError.innerHTML="Name is required";
        
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="write full name";
        return false;
    }
    if(name.length<=5){
        nameError.innerHTML="your full name must be grater ";
        return false;
    }
        nameError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
}
function namePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        mobileError.innerHTML="phone number is required";
        return false;

    }
    if(phone.length!==10){
        mobileError.innerHTML="phone no should be minimum 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        mobileError.innerHTML="phone no is mandatory";
        return false;
}
    mobileError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function nameEmail(){
    var emails=document.getElementById('contact-email').value;
    if(emails.length==0){
        emailError.innerHTML="email is required";
        return false;

    }
    if(!emails.match(/^[a-zA-Z0-9.#]+@[a-z]+\.[a-z]{2,3}$/)){
        emailError.innerHTML="It is inappropriate";
        return false;

    }
    emailError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
    
}
function namePassword(){
    var passkey=document.getElementById('contact-password').value;
    if(passkey.length==0){
        passwordError.innerHTML="please check your password";
        return false;
    }
    if(passkey.length<=6){
        passwordError.innerHTML="enter password length greater than 6";
        return false;
    }
    passwordError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}

