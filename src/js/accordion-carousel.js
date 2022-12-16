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
const timer1 = $('#timer-1');
const timer2 = $('#timer-2');
const timer3 = $('#timer-3');
const timer4 = $('#timer-4');

// Create a variable to track the remaining time on the timer
let timeRemaining = timerLength;

// Create a variable to track the current accordion item
let currentItem = 1;

// Create a variable to track the manual change
let manualChange = false;

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
    }
  }
}

// Start the timer for the first accordion item
let timer = setInterval(function() {
  updateTimer();
}, 1000);

const reset = (item) => {
  // Clear any existing timers
  clearInterval(timer);

  // Set the current item to 1 and start the timer
  currentItem = item;
  timeRemaining = 6;
  manualChange = true;
  timer = setInterval(function() {
    updateTimer();
  }, 1000);
};

// Set up event listeners for the accordion items
accordion1.on('click', ()=> reset(1));
accordion2.on('click', ()=> reset(2));
accordion3.on('click', ()=> reset(3));
accordion4.on('click', ()=> reset(4));
