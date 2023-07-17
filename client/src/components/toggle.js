
import React from 'react'
import './toggle.css'

const Toggle = ({onClick}) => {

  return (
    <label class="switch">
      <input type="checkbox" onClick={onClick} />
      <span class="slider round"></span>
    </label>
  )
}

// function activateButton(button) { // You missed this part
//   button.addEventListener('click', clickHandler);
// }
// function disableButton(button) { // You missed this part
//   button.removeEventListener('click', clickHandler);
// }

// function toggleButtons(value, button) {    
//   if (value === 1) {
//       activateButton(button);  
//   } else {
//       disableButton(button); 
//   }


export default Toggle;