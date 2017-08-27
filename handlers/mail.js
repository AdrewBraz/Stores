const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');
const sg = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
      api_key: process.env.MAIL_KEY
  }
}

const transport = nodemailer.createTransport( sg(options) );

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/../views/email/password-reset.pug`, options);
  const inlined = juice(html)
  return inlined;
 }

exports.send = async (options) => {
  const html = generateHTML(options.filename, options);
  const text = htmlToText.fromString(html);
  const mailOptions = {
    from: `node-app@example.com`,
    to: options.user.email,
    subject: options.subject,
    html,
    text
  }

  const sendMail = promisify(transport.sendMail, transport);
  return sendMail(mailOptions)
}