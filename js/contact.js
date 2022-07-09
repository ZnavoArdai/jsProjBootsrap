
// function saveinputs(){
//     let subinput=subject22.value
//     let emailinput=Email1.value
//     let messgeinput=Email1msg.value

// }

function sendMail(){
    
    emailsender.innerHTML=`<button type="" class="btn btn-info" >
    <a href="https://mail.google.com/mail/u/0/?fs=1&to=${Email1.value}&su=${subject22.value}&body=${Email1msg.value}&bcc=&tf=cm" target="_blank">click here to send the info</a>

</button>`

}