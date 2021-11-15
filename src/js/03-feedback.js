import throttle from 'lodash.throttle';


const formRef = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
}


const data = {};
const FORM_KEY = 'feedback-form-state';
const inputHandler = e => {

  formRef[e.target.name] = data[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(data));
};

formRef.form.addEventListener('input', throttle(inputHandler, 500));

const submitHandler = e => {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(FORM_KEY);
};

formRef.form.addEventListener('submit', submitHandler);

function saveInfo() {
  const saveData = localStorage.getItem(FORM_KEY);
  const parseData = JSON.parse(saveData);
  
  if (saveData) {
    formRef.email.value = parseData.email;
    formRef.message.value = parseData.message;
    console.log(parseData)
  }
}
saveInfo()

