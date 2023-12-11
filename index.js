const email=document.querySelector('#email');
const demande=document.querySelector('#demande');
const message=document.querySelector('#message');
const resend=document.querySelector('#resend');
const submit=document.querySelector('#submit');

submit.addEventListener('submit',()=>{
    e.preventDefault();
    console.log(`test`);

    Email.send({
        SecureToken : "66091fc9-2432-4da6-8c54-0bafc913bc9c",
        To : 'jeremy.mascla@gmail.com',
        From : "jeremy.mascla@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );})

// function envoie(){
//     const email=document.querySelector('#email');
//     const demande=document.querySelector('#demande');
//     const message=document.querySelector('#message');
//     const resend=document.querySelector('#resend');
//     const submit=document.querySelector('#submit');

//     console.log(`test ${email.value} ${demande.value} ${message.value} ${resend.checked}`);
//     Email.send({
//             SecureToken : "66091fc9-2432-4da6-8c54-0bafc913bc9c",
//             To : 'jeremy.mascla@gmail.com',
//             From : "jeremy.mascla@gmail.com",
//             Subject : `${demande.value}`,
//             Body : `${message.value}`
//         }).then(
//           message => alert(message)
//         );}