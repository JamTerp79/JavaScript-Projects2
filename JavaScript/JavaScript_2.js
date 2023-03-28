// get the form input element by name
const fnameInput = document.getElementsByName('fname')[0];

// add an event listener to the input element
fnameInput.addEventListener('input', () => {
  // get the input value and remove whitespace
  const fnameValue = fnameInput.value.trim();
  
  // check if the input value contains only letters
  if (/^[A-Za-z]+$/.test(fnameValue)) {
    // if the input value is valid, remove any error styles
    fnameInput.classList.remove('invalid');
  } else {
    // if the input value is invalid, add error styles
    fnameInput.classList.add('invalid');
  }
});

