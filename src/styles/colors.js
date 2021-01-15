export const BG_COLOR = "white";
export const TEXT_COLOR_PRIMARY = "black";
export const TEXT_COLOR_SECONDARY = "grey";
export const ACCENT_COLOR = "#8A3FFC";

// Create a function for getting a variable value

/*
function myFunctionGet() {
  var r = document.querySelector(':root');
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --accent-color is: " + rs.getPropertyValue('--accent-color'));
  alert("The value of --bg-color is: " + rs.getPropertyValue('--bg-color'));
  alert("The value of --text-color-primary is: " + rs.getPropertyValue('--text-color-primary'));
  alert("The value of --text-color-secondary is: " + rs.getPropertyValue('--text-color-secondary'));
}
*/

export function SetColorVars() {
  if (typeof document !== `undefined`) {
    var r = document.querySelector(':root');
    r.style.setProperty('--accent-color', ACCENT_COLOR);
    r.style.setProperty('--bg-color', BG_COLOR);
    r.style.setProperty('--text-color-primary', TEXT_COLOR_PRIMARY);
    r.style.setProperty('--text-color-secondary', TEXT_COLOR_SECONDARY);
  }
}
