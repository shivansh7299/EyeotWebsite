const booking = document.querySelector('.book-demo');
let uname = document.getElementById('name');
let email = document.getElementById('emailID');
let date = document.getElementById('date1');
let time = document.getElementById('time1');

booking.addEventListener('submit', (e)=>{
    e.preventDefault();
    let appointment = {
        name: uname.value,
        userEmail : email.value,
        date: date.value,
        time: time.value
    }

    console.log(appointment);
})