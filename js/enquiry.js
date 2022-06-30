const booking = document.querySelector('.book-demo');
let uname = document.getElementById('name');
let email = document.getElementById('emailID');

booking.addEventListener('submit', (e)=>{
    e.preventDefault();
    let select = document.getElementById('form-select').selectedIndex;
    let optionSelect = document.getElementsByTagName('option');
    let time = $("#time1").find("input").val();
    let date = $("#date1").find("input").val();
    let appointment = {
        option: optionSelect[select].value,
        name: uname.value,
        userEmail : email.value,
        date: date,
        time: time
    }

    console.log(appointment);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/email');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            alert('Email sent');
            uname.value="",
            email.value="",
            optionSelect.value=""
        }else{
            console.log(xhr.responseText)
            alert('Something went wrong');
        }
    }
    xhr.send(JSON.stringify(appointment))
})