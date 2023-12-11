const email=document.querySelector('#email');
const demande=document.querySelector('#demande');
const message=document.querySelector('#message');
const resend=document.querySelector('#resend');
const submit=document.querySelector('#submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(`test`);

    Email.send({
        SecureToken : "66091fc9-2432-4da6-8c54-0bafc913bc9c",
        To : `${email.value}`,
        From : "jeremy.mascla@gmail.com",
        Subject : `${demande.value}`,
        Body : `de ${email.value} dit ${message.value}`
    }).then(
      message => alert(message)
    );
})