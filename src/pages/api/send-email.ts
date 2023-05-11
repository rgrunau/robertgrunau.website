const nodemailer = require('nodemailer');


export default function handler(req, res) {

  const message = {
    from: 'req.body.email',
    to: `${process.env.NEXT_GMAIL_ADDRESS}`,
    subject: `Message from ${req.body.name}`,
    html: `<p>${req.body.message}</p>`,
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.NEXT_GMAIL_ADDRESS}`,
      pass: `${process.env.NEXT_GMAIL_PASSWORD}`,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err)
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        })
      } else {
        res.status(200).send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        })
      }
    })
  }
}