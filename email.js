const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amant9782@gmail.com',
        pass: 'vgbjmsgyjmkrkugg'
    }
});

// Define email content
let mailOptions = {
    from: 'amant9782@gmail.com',
    to: 'amanpandey45692@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js.'
};

// Send email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
