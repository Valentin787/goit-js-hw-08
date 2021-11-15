import throttle from 'lodash.throttle';
console.log(throttle);

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

// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('input[name="email"]'),
//   message: document.querySelector('textarea[name="message"]'),
// };
// const dataSet = {};

// const handleTextInput = e => {
//   if (e.target.name == refs.email.name) {
//     dataSet.email = e.target.value;
//   }
//   if (e.target.name == refs.message.name) {
//     dataSet.message = e.target.value;
//   }

//   const inputJSON = JSON.stringify(dataSet);

//   localStorage.setItem(STORAGE_KEY, inputJSON);
//   //   console.log(dataSet);
// };

// const handleFormSubmit = e => {
//   e.preventDefault();
//   e.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// };

// function populate() {
//   const savedMessadge = localStorage.getItem(STORAGE_KEY);
//   if (savedMessadge) {
//     console.lof(savedMessadge);
//     dataSet.value = savedMessadge;
//   }
//   console.lof(savedMessadge);
// }

// refs.form.addEventListener('submit', handleFormSubmit);
// // refs.form.addEventListener('input', throttle(handleTextInput, 500));
// refs.form.addEventListener('input', handleTextInput);