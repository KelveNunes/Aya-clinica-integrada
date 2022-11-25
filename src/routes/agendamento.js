const express = require('express');
const transporter = require('../modelos/sendMail');
const router = express.Router();

function sendEmail(nome, idade, email, telefone) {
    transporter.sendMail({
        from: nome + '<recsenhacardgame@gmail.com>',
        to: email,
        subject: 'Agendamento' ,
        text: "olá, me chamo " + nome + ' tenho ' + idade + ' anos de idade e meu contato é ' + telefone +' e gostaria de marcar um atendimento'
    });
    
}
router.get('/agendamento', (req,res)=>{
    res.render('agendamento') 
})
router.post('/agendamento',  (req,res)=>{
    
    const nome = req.body.nomecompleto
    const idade = req.body.Idade
    const email = req.body.email
    const telefone = req.body.telefone

    sendEmail(nome,idade,email,telefone);
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;