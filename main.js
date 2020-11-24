const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', function() {
    const success = document.querySelector('.success');
    const email = document.getElementById('email');
    const emailVal = email.value;
    const valid = validateEmail(emailVal)
    
    if(!valid) {
        return document.getElementById('email').classList.add('error')
    }


   email.classList.remove('error');


    sendButton.disabled = true;

    success.style.display = "block"

})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}