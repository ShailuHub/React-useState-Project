import { useState } from "react";
import "./ErrorModal.css";

function ErrorModal(props) {
  const classes = `button ${props.buttonType}`;
  const { username, age, both } = props.invalidReason;
  let message = "";
  if (username) {
    message = username;
  } else if (age) {
    message = age;
  } else if (both) {
    message = both;
  }

  return (
    <>
      <div className="invalid-container">
        <div className="invalid-input">Invalid Input</div>
        <div className="invalid-message">
          <p>{message}</p>
        </div>
        <div className={classes}>
          <button className="btn" onClick={props.onModalClose}>
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorModal;
