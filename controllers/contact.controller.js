const contactController = {};
const nodemailer = require('nodemailer');
const options = require('../options');

contactController.send = async (req, res) => {
    console.log(req.body);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: `${options.storageConfig.from_email}`, // generated ethereal user
            pass: `${options.storageConfig.password}` // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"${req.body.name}" <${req.body.mail}>`, // sender address
        to: `${options.storageConfig.to_email}`, // list of receivers
        subject: 'posk contact form', // Subject line
        text: `E-mail: ${req.body.email} Message: ${req.body.message}`, // plain text body
        html: `<p>E-mail: ${req.body.email}</p> 
                   <p>Message: ${req.body.message}</p>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
};

module.exports = contactController;