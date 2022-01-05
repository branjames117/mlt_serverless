const decadeBtns = [...document.getElementsByClassName('decade-btn')];
const decades = [...document.getElementsByClassName('decade')];

/* hide all decade elements */
function hideAllDecades() {
  decades.forEach((decade) => {
    decade.style.display = 'none';
  });
}

hideAllDecades();

/* function to display selected decade while hiding all others */
function displaySelectedDecade(decadeToShow) {
  hideAllDecades();
  decades.forEach((decade) => {
    if (decade.id.replace('decade', '') === decadeToShow)
      decade.style.display = 'block';
  });
}

decadeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const decadeToShow = e.target.id.replace('decade-btn-', '');
    displaySelectedDecade(decadeToShow);
  });
});
