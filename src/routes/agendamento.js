const express = require('express');
const transporter = require('../modelos/sendMail');
const router = express.Router();

function sendEmail(nome, idade, email, telefone) {
    transporter.sendMail({
        from: nome + '<recsenhacardgame@gmail.com>',
        to: 'kelvenunes123@gmail.com',
        subject: 'Agendamento' ,
        text: "Olá, bom dia." + '\n\n'
         + "Me chamo " + nome +'\n'
         + 'Tenho ' + idade + ' anos de idade' +"\n" 
         +'Meus contatos são: ' + "\n" 
         +'Telefone: ' + telefone +"\n"
         +'Email: ' + email + '\n\n'
         +'Gostaria de agendar uma consulta'
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