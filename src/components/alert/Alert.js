import React from 'react';
import './alert.css';

export default function Alert() {
  const handleClose = (e) => {
    e.stopPropagation();
    toggleAlert();
  };
  return (
    <div
      className='alert-base-container'
      id='alert-component'
      onClick={handleClose}
    >
      <div className='alert-container'>
        <h3 className='alert-heading'>Alert!</h3>
        <p className='alert-text'>This is sample alert module!</p>
        <button className='alert-close-button' onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

let visible = false;
export function toggleAlert() {
  visible = !visible;

  const alert_node = document.querySelector('#alert-component');
  if (visible) {
    alert_node.style.visibility = 'visible';
  } else {
    alert_node.style.visibility = 'hidden';
  }
}
