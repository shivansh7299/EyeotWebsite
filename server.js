const express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");
const log = console.log;
const app = express();

const PORT = 8080;

app.use(express.static(__dirname))

app.use(express.urlencoded({extended: false}));
app.use(express.json());
let transporter = nodemailer.createTransport({
  host: "mail.eyeot.in",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'info@eyeot.in', // generated ethereal user
    pass: 'Eyeot@123', // generated ethereal password
  },
});

app.post('/email',(req,res)=>{
  res.json('success')
  console.log(req.body)
  
  const mailOptions = {
    from : req.body.userEmail,
    to : 'info@eyeot.in',
    subject : `appointment for Mr/Mrs ${req.body.name} `,
    text: `appointment for Mr/Mrs ${req.body.name} ,Email: ${req.body.userEmail}, Date: ${req.body.date}, Time: ${req.body.time}, About: ${req.body.option}`
  } 

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send('error')
    }else{
      console.log('Email sent: '+ info.response)
      res.send('success')
    }
  })
});

app.post('/contact',(req,res) => {
  res.json('Email_sent');
  console.log(req.body);

  const contactData = {
    from : req.body.clientEmail,
    to : 'info@eyeot.in',
    subject : `appointment for Mr/Mrs ${req.body.clientName} `,
    text: `appointment for Mr/Mrs ${req.body.clientName} ,Email: ${req.body.clientEmail}, subject: ${req.body.subject} , message: ${req.body.message}, Phone number: ${req.body.phoneNumber}`
  }

  transporter.sendMail(contactData, (error, info)=>{
    if(error){
      console.log(error);
      res.send('error')
    }else{
      console.log('Email sent: '+ info.response)
      res.send('success')
    }
  })
})

app.get('/', ( req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT,() => log("Server is running on PORT :",PORT))

