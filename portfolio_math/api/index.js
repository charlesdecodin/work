const nodemailer = require('nodemailer');
require('dotenv').config();

let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSWORD
    }
});

const message = {
    from: 'charlesdecodin0@gmail.com', 
    to: 'charlesdecodin0@gmail.com',       
    subject: 'yo', 
    text: 'yo' 
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});