const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port:587,
  secure:false,
  auth: {
    user: 'davidfunesme@hotmail.com',
    pass: 'marulanda78',
  },
});

module.exports = transporter;
