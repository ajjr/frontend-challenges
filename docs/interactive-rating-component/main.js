const selectorBackground = 'var(--DarkBlue)';
const selectorColor = 'var(--LightGrey)';
const submitBackground = 'var(--Orange)';
const submitColor = 'var(--White)';


const activeSelectorBackground = 'var(--LightGrey)';
const activeSelectorColor = 'var(--White)';
const activeSubmitBackground = 'var(--White)';
const activeSubmitColor = 'var(--Orange)';

let selectedRating;

/* Interactive elements */

const ratingCard = document.querySelector('.card');
const circleBlock = document.querySelector('.circle-block');
const submitBlock = document.querySelector('.submit-block');
const ratingCircles = document.querySelectorAll('.circle');
const submitButton = document.querySelector('#submit');
const frontFace = document.querySelector('#front-face');
const thankYou = document.querySelector('#thankyou');

/* Event listeners */

circleBlock.addEventListener('click', e => {
  const elem = e.target;
  if (elem.classList.contains('circle')) {
    selectRating(elem);
  }
});

submitBlock.addEventListener('click', e => {
  const elem = e.target;
  if (elem.id === 'submit') {
    console.log(selectedRating);
    submitRating();
  }
});

ratingCircles.forEach(elem => {
  elem.addEventListener('mouseenter', e => {
    if (e.target.textContent != selectedRating) {
      e.target.style.background = submitBackground;
      e.target.style.color = submitColor;
    }
  });
});

ratingCircles.forEach(elem => {
  elem.addEventListener('mouseleave', e => {
    if (e.target.textContent != selectedRating) { 
      e.target.style.background = selectorBackground;
      e.target.style.color = selectorColor;
    }
  });
});

/* DOM manipulation functions */

function selectRating(elem) {

  ratingCircles.forEach(e => {
    if (elem === e) {
      selectedRating = elem.textContent;
      submitButton.removeAttribute('disabled');
      submitButton.style.cursor = 'pointer';

      const style = document.createElement('style');
      style.appendChild(document.createTextNode(
        'button:hover {background-color: var(--White); color: var(--Orange);} '));
      submitButton.appendChild(style);

      elem.style.color = activeSelectorColor;
      elem.style.background = activeSelectorBackground;
    } else {
      e.style.color = selectorColor;
      e.style.background = selectorBackground;
    }
  });
}

function createStyle(css) {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  return style;
} 


function submitRating() {
  document.getElementById('display-selection').textContent = selectedRating;
  frontFace.style.display = 'none';
  thankYou.style.display = 'block';
}