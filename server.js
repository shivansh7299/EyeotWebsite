const express = require('express');
const path = require('path');
const log = console.log;
const app = express();

const PORT = 8080;

app.use(express.static(__dirname))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email',(req,res)=>{
  res.json({message:'Message Received!!!'})
  console.log(req.body)
});

app.get('/', ( req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT,() => log("Server is running on PORT :",PORT))

