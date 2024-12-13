// Load environment variables from .env file
require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const emailSend = express();
const PORT = process.env.PORT || 3000;

emailSend.use(bodyParser.json());
emailSend.use(cors());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify the transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error with transporter configuration:', error);
  } else {
    console.log('Transporter is configured correctly', success);
  }
});

emailSend.post('/send-email', (req, res) => {
  const { name, email, msg_subject, message } = req.body;

  // Input validation
  if (!name || !email || !msg_subject || !message || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).send('Invalid input');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@six-Industries.com',
    subject: `Six-Industries Contact Form: ${name}`,
    text: `You have received a new message from your website Six-Industries contact form.\n\n` +
          `Here are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nService: ${msg_subject}\n\nMessage:\n${message}`,
    headers: {
      'Reply-To': email
    }
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error);
      return res.status(500).send('Error occurred while sending email: ' + error.toString());
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
emailSend.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
