const d = document;

d.addEventListener('DOMContentLoaded', () => {
  validateEmail();
});

const validateEmail = () => {
  const msgError = d.querySelector('.error');
  const msgSucces = d.querySelector('.success');
  const showMail = d.querySelector('.show__mail');
  const btnClose = d.querySelector('.btn__close');
  const regExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  d.addEventListener('submit', (e) => {
    const inputValue = d.getElementById('email');

    e.preventDefault();
    if (regExp.test(inputValue.value || inputValue.value !== '')) {
      msgError.classList.remove('active');
      inputValue.classList.remove('invalid');
      msgSucces.classList.add('active');
      showMail.textContent = inputValue.value;
      inputValue.value = '';
    } else {
      msgError.classList.add('active');
      inputValue.classList.add('invalid');
    }
  });

  btnClose.addEventListener('click', () => {
    msgSucces.classList.remove('active');
  });
};
