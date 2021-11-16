const { createTransport } = require("nodemailer");

async function sendEmail(mailTo, html) {
    const transporter = createTransport({
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD,
        },
        host: "smtp.mail.ru",
        port: 465,
    });

    let info = await transporter.sendMail({
        from: `"Dizipro 👻" <${process.env.MAIL_ADDRESS}>`,
        to: mailTo,
        subject: "Confirm recovery password",
        html,
    });

    return info;
}

module.exports = sendMail;
