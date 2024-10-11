// /* eslint-disable no-console */
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//         user:'joannesu2003@gmail.com', //sender gmail address
//         pass: 'rkaf osad kpzz qarm ', //app password for gmail account
//     },
// });

// const mailOptions= {
//         from:{
//             name: 'Voluntree',
//             address: process.env.USER
//         }, // sender address
//         to: ["xuepingsu6@gmail.com"], // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: `<b>Hello world?</b>
//         <p>I guess it works?</p>`, // html body
// };

// const sendMail = async(transporter, mailOptions) => {
//     try{
//         await transporter.sendMail(mailOptions);
//         console.log("Mail sent");
//     }catch(error){
//         console.error(error);
//     }
// }


// //from https://ethereal.email/
// // // Generate SMTP service account from ethereal.email
// // nodemailer.createTestAccount((err, account) => {
// //     if (err) {
// //         console.error('Failed to create a testing account. ' + err.message);
// //         return process.exit(1);
// //     }

// //     console.log('Credentials obtained, sending message...');

// //     // Create a SMTP transporter object
// //     let transporter = nodemailer.createTransport({
// //         host: account.smtp.host,
// //         port: account.smtp.port,
// //         secure: account.smtp.secure,
// //         auth: {
// //             user: account.user,
// //             pass: account.pass
// //         }
// //     });

// //     // Message object
// //     let message = {
// //         from: 'Sender Name <sender@example.com>',
// //         to: 'Recipient <recipient@example.com>',
// //         subject: 'Nodemailer is unicode friendly ✔',
// //         text: 'Hello to myself!',
// //         html: '<p><b>Hello</b> to myself!</p>'
// //     };

// //     transporter.sendMail(message, (err, info) => {
// //         if (err) {
// //             console.log('Error occurred. ' + err.message);
// //             return process.exit(1);
// //         }

// //         console.log('Message sent: %s', info.messageId);
// //         // Preview only available when sending through an Ethereal account
// //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// //     });
// // });
// sendMail(transporter, mailOptions);