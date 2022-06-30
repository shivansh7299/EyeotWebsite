const contact = document.querySelector('.contact-form');
let cName = document.getElementById('user_name');
let phoneNumber = document.getElementById('phone_number');
let cEmail = document.getElementById('user_email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contact.addEventListener('submit',(e) => {
    e.preventDefault();
    let contactData = {
        clientName: cName.value,
        phoneNumber:phoneNumber.value,
        clientEmail : cEmail.value,
        subject: subject.value,
        message: message.value
    }

    console.log(contactData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/contact');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        if(xhr.status == 200){
            alert('Email sent');
            cName.value="",
            cEmail.value="",
            phoneNumber.value="",
            message.value="",
            subject.value=""
        }else{
            console.log(xhr.response)
            alert('Something went wrong');
        }
    }
    xhr.send(JSON.stringify(contactData))
});