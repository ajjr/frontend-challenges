const selectorBackground = 'var(--DarkBlue)';
const selectorColor = 'var(--LightGrey)';
const submitBackground = 'var(--Orange)';
const submitColor = 'var(--White)';


const activeSelectorBackground = 'var(--LightGrey)';
const activeSelectorColor = 'var(--White)';
const activeSubmitBackground = 'var(--White)';
const activeSubmitColor = 'var(--Orange)';


let selectedRating;


const ratingCard = document.querySelector('.card');
const ratingCircles = document.querySelectorAll('.circle');

ratingCard.addEventListener('click', e => {
  elem = e.target;
  if (elem.classList.contains('circle')) {
    selectRating(elem);
  }
});

function selectRating(elem) {
  ratingCircles.forEach(e => {
    if (elem === e) {
      selectCircle= elem.textContent;
      elem.style.color = activeSelectorColor;
      elem.style.background = activeSelectorBackground;
    } else {
      e.style.color = selectorColor;
      e.style.background = selectorBackground;
    }
  })

}