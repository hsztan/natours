const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = catchAsync(async options => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define email options
  const mailOptions = {
    from: 'Henry Nawrocki <hello@henry.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // Send the email with nodemailer
  await transporter.sendMail(mailOptions);
});

module.exports = sendEmail;
