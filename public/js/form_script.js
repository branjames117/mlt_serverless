const clearFormEl = document.getElementById('clear-form');
const formEl = document.getElementById('membership-form');
clearFormEl.addEventListener('click', () => {
  formEl.reset();
});
