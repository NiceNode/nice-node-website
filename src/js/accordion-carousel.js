import $ from 'jquery';

// Set the length of the timer, in seconds
const timerLength = 5;

// Get references to the elements we will need to modify
const accordion1 = $('#accordion-1');
const accordion2 = $('#accordion-2');
const accordion3 = $('#accordion-3');
const accordion4 = $('#accordion-4');
const description1 = $('#description-1');
const description2 = $('#description-2');
const description3 = $('#description-3');
const description4 = $('#description-4');
const photo1 = $('#photo-1');
const photo2 = $('#photo-2');
const photo3 = $('#photo-3');
const photo4 = $('#photo-4');
const photoContainer = $('#photoContainer');
const timer1 = $('.timer-1');
const timer2 = $('.timer-2');
const timer3 = $('.timer-3');
const timer4 = $('.timer-4');

const leftArrow = $('#left-arrow');
const rightArrow = $('#right-arrow');

// Create a variable to track the remaining time on the timer
let timeRemaining = timerLength;

// Create a variable to track the current accordion item
let currentItem = 1;

// Create a variable to track the manual change
let manualChange = false;

// We want to set active state on the current item
const setActiveClass = () => {
  switch (currentItem) {
    case 1:
      $('#accordion-1').addClass('active');
      $('#accordion-2, #accordion-3, #accordion-4').removeClass('active');
      break;
    case 2:
      $('#accordion-2').addClass('active');
      $('#accordion-1, #accordion-3, #accordion-4').removeClass('active');
      break;
    case 3:
      $('#accordion-3').addClass('active');
      $('#accordion-1, #accordion-2, #accordion-4').removeClass('active');
      break;
    case 4:
      $('#accordion-4').addClass('active');
      $('#accordion-1, #accordion-2, #accordion-3').removeClass('active');
      break;
  }
};

// Create a function to update the timer
function updateTimer() {
  // Decrement the time remaining
  timeRemaining--;

  // Update the width of the timer bar to reflect the remaining time
  switch (currentItem) {
    case 1:
      timer1.css('width', ((timerLength - timeRemaining) / timerLength + .20) * 100 + '%');
      break;
    case 2:
      timer2.css('width', ((timerLength - timeRemaining) / timerLength + .20) * 100 + '%');
      break;
    case 3:
      timer3.css('width', ((timerLength - timeRemaining) / timerLength + .20) * 100 + '%');
      break;
    case 4:
      timer4.css('width', ((timerLength - timeRemaining) / timerLength + .20) * 100 + '%');
      break;
  }
  if (manualChange) {
    switch (currentItem) {
      case 1:
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'block');
        description2.css('display', 'none');
        description3.css('display', 'none');
        description4.css('display', 'none');
        photo1.css('display', 'block');
        photo2.css('display', 'none');
        photo3.css('display', 'none');
        photo4.css('display', 'none');
        timer1.css('display', 'block');
        timer2.css('display', 'none');
        timer3.css('display', 'none');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-01');
        break;
      case 2:
        timer1.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'block');
        description3.css('display', 'none');
        description4.css('display', 'none');
        photo1.css('display', 'none');
        photo2.css('display', 'block');
        photo3.css('display', 'none');
        photo4.css('display', 'none');
        timer1.css('display', 'none');
        timer2.css('display', 'block');
        timer3.css('display', 'none');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-02');
        break;
      case 3:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'none');
        description3.css('display', 'block');
        description4.css('display', 'none');
        photo1.css('display', 'none');
        photo2.css('display', 'none');
        photo3.css('display', 'block');
        photo4.css('display', 'none');
        timer1.css('display', 'none');
        timer2.css('display', 'none');
        timer3.css('display', 'block');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-03');
        break;
      case 4:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'none');
        description3.css('display', 'none');
        description4.css('display', 'block');
        photo1.css('display', 'none');
        photo2.css('display', 'none');
        photo3.css('display', 'none');
        photo4.css('display', 'block');
        timer1.css('display', 'none');
        timer2.css('display', 'none');
        timer3.css('display', 'none');
        timer4.css('display', 'block');
        photoContainer.removeClass();
        photoContainer.addClass('ui-04');
        break;
    }
    manualChange = false;
  }

  // If the timer has reached zero...
  if (timeRemaining === 0) {
    // Reset the time remaining
    timeRemaining = timerLength;

    // Increment the current item
    currentItem++;

    switch (currentItem) {
      case 1:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'block');
        description2.css('display', 'none');
        description3.css('display', 'none');
        description4.css('display', 'none');
        photo1.css('display', 'block');
        photo2.css('display', 'none');
        photo3.css('display', 'none');
        photo4.css('display', 'none');
        timer1.css('display', 'block');
        timer2.css('display', 'none');
        timer3.css('display', 'none');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-01');
        break;
      case 2:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'block');
        description3.css('display', 'none');
        description4.css('display', 'none');
        photo1.css('display', 'none');
        photo2.css('display', 'block');
        photo3.css('display', 'none');
        photo4.css('display', 'none');
        timer1.css('display', 'none');
        timer2.css('display', 'block');
        timer3.css('display', 'none');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-02');
        break;
      case 3:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'none');
        description3.css('display', 'block');
        description4.css('display', 'none');
        photo1.css('display', 'none');
        photo2.css('display', 'none');
        photo3.css('display', 'block');
        photo4.css('display', 'none');
        timer1.css('display', 'none');
        timer2.css('display', 'none');
        timer3.css('display', 'block');
        timer4.css('display', 'none');
        photoContainer.removeClass();
        photoContainer.addClass('ui-03');
        break;
      case 4:
        timer1.css('width', '20%');
        timer2.css('width', '20%');
        timer3.css('width', '20%');
        timer4.css('width', '20%');
        description1.css('display', 'none');
        description2.css('display', 'none');
        description3.css('display', 'none');
        description4.css('display', 'block');
        photo1.css('display', 'none');
        photo2.css('display', 'none');
        photo3.css('display', 'none');
        photo4.css('display', 'block');
        timer1.css('display', 'none');
        timer2.css('display', 'none');
        timer3.css('display', 'none');
        timer4.css('display', 'block');
        photoContainer.removeClass();
        photoContainer.addClass('ui-04');
        break;
    }

    // If we have reached the end of the accordion items...
    if (currentItem > 4) {
      // Reset the current item to the first one
      currentItem = 1;
      timer1.css('width', '20%');
      timer2.css('width', '20%');
      timer3.css('width', '20%');
      timer4.css('width', '20%');
      description1.css('display', 'block');
      description2.css('display', 'none');
      description3.css('display', 'none');
      description4.css('display', 'none');
      photo1.css('display', 'block');
      photo2.css('display', 'none');
      photo3.css('display', 'none');
      photo4.css('display', 'none');
      timer1.css('display', 'block');
      timer2.css('display', 'none');
      timer3.css('display', 'none');
      timer4.css('display', 'none');
      photoContainer.removeClass();
      photoContainer.addClass('ui-01');
    }

    // Set active state on the next item
    setActiveClass();
  }
}

// Set initial active class
setActiveClass();

// Start the timer for the first accordion item
let timer = setInterval(function() {
  updateTimer();
}, 1000);

const reset = (item) => {
  // Clear any existing timers
  clearInterval(timer);

  // Set to the item we want to reset it to
  currentItem = item;

  timeRemaining = 6;
  manualChange = true;

  // Update immediately, then rely on timer
  timer = updateTimer();

  // Set active state on the next item
  setActiveClass();

  timer = setInterval(function() {
    updateTimer();
  }, 1000);
};

// When the left arrow is clicked, we want to move to the previous item
leftArrow.click(() => {
  // Decrement the current item
  currentItem--;

  // If we have reached the first item, we want to start over at the last item
  if (currentItem < 1) {
    currentItem = 4;
  }

  reset(currentItem);
});

// When the right arrow is clicked, we want to move to the next item
rightArrow.click(() => {
  // Increment the current item
  currentItem++;

  // If we have reached the last item, we want to start over at the first item
  if (currentItem > 4) {
    currentItem = 1;
  }

  reset(currentItem);
});

// // When the user touches the photo container, we want to move to the next or previous item
// photoContainer.on('touchmove', (event) => {
//   // Get the touch position
//   const touchPosition = event.originalEvent.touches[0].clientX;

//   // Get the width of the photo container
//   const containerWidth = photoContainer.width();

//   // If the touch position is on the left half of the photo container, we want to move to the previous item
//   if (touchPosition < containerWidth / 2) {
//     // Decrement the current item
//     currentItem--;

//     // If we have reached the first item, we want to start over at the last item
//     if (currentItem < 1) {
//       currentItem = 4;
//     }
//   }
//   // If the touch position is on the right half of the photo container, we want to move to the next item
//   else {
//     // Increment the current item
//     currentItem++;

//     // If we have reached the last item, we want to start over at the first item
//     if (currentItem > 4) {
//       currentItem = 1;
//     }
//   }
//   reset(currentItem);
// });

// Set up event listeners for the accordion items
accordion1.on('click', ()=> reset(1));
accordion2.on('click', ()=> reset(2));
accordion3.on('click', ()=> reset(3));
accordion4.on('click', ()=> reset(4));
