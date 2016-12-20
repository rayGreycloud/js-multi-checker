// Add logic so user can hold shift and check
// multiple checkboxes with one click

// Grab all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// Initalize variable to track last box checked
let lastChecked;

// Event handler
function handleCheck(event) {
  // Flag indicating item is in between checked boxes
  let inBetween = false;
  // Trigger only if shift key down AND box being checked
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
  // If box is one clicked or previous one, toggle inBetween flag
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Start/End Inbetween Check');
      }
  // Mark boxes checked while inBetween is true
      if (inBetween) checkbox.checked = true;
    });
  }
  // Mark item last checked
  lastChecked = this;
}
// Add event listener for checkbox clicks
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
