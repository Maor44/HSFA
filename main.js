const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', function () {
  const success = document.querySelector('.success');
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');

  const nameVal = firstName.value + ' ' + lastName.value;
  const phoneVal = phone.value;
  const emailVal = email.value;
  const valid = validateEmail(emailVal);

  if (!valid) {
    return document.getElementById('email').classList.add('error');
  }

  console.log('emailVal', emailVal);

  const xhr = new XMLHttpRequest();
  xhr.open(
    'POST',
    'https://hook.integromat.com/x54ukj1blkoefpm7l9ymmg989cttp6gn',
    true
  );

  const formData = new FormData();

  formData.append('name', nameVal);
  formData.append('phone', phoneVal);
  formData.append('email', emailVal);

  email.classList.remove('error');

  xhr.onload = function () {
    // do something to response

    sendButton.disabled = true;

    success.style.display = 'block';
  };
  xhr.send(formData);
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
