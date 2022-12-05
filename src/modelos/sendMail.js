const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "kelvenunes123@gmail.com",
        pass: "mnwdliumgzotbmhh",
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports = transporter;