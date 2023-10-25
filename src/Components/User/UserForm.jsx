import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./UserForm.css";

function UserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [invalidReason, setInvalidReason] = useState({});

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      username: enteredName,
      age: enteredAge,
    };

    if (Number(enteredAge.trim()) < 1 && enteredName.trim().length === 0) {
      setInvalidReason((previousState) => {
        return { ...previousState, both: `Username and age can't be empty` };
      });
      setIsValid(false);
      return;
    }

    if (enteredName.trim().length === 0) {
      setInvalidReason((previousState) => {
        return { ...previousState, username: `Username can't be empty` };
      });
      setIsValid(false);
      return;
    }

    if (Number(enteredAge.trim()) < 1) {
      setInvalidReason((previousState) => {
        return {
          ...previousState,
          age: `Age can't be empty or less than equal to 0`,
        };
      });
      setIsValid(false);
      return;
    }

    props.onSaveUserData(userDetails);
    setEnteredAge("");
    setEnteredName("");
    setInvalidReason((previousState) => {
      return { ...previousState, both: ``, username: "", age: "" };
    });
    setIsValid(true);
  };

  const onModalCloseHandler = () => {
    setIsValid(true);
  };

  return (
    <div>
      <div className="user-form-container">
        <form className="user-form" onSubmit={onSubmitHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            id="userName"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            id="age"
          />
          <div className="button">
            <button className="btn" type="submit">
              Add User
            </button>
          </div>
        </form>
      </div>
      {!isValid && (
        <ErrorModal
          buttonType="confirm-button"
          onModalClose={onModalCloseHandler}
          invalidReason={invalidReason}
        />
      )}
    </div>
  );
}

export default UserForm;
