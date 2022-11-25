const express = require('express');
const transporter = require('../modelos/sendMail');
const router = express.Router();

function sendEmail(nome, idade, email, telefone) {
    transporter.sendMail({
        from: nome + '<recsenhacardgame@gmail.com>',
        to: email,
        subject: 'Agendamento' ,
        text: "olá, me chamo " + nome + 'tenho ' + idade + 'anos de idade e meu contato é ' + telefone +' e gostaria de marcar um atendimento'
    });
    
}

router.get('/', async (req, res)=>{
    res.render('../views/pages/index')
 
    
    
})


module.exports = router;