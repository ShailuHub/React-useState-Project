import "./UserDetails.css";
import Card from "../UI/Card";
import NewUser from "./NewUser";
import { useState } from "react";

const users = [];

function UserDetails() {
  const [user, setUser] = useState(users);
  const [userCount, setUserCount] = useState(0);
  const addUserHandler = (newUser) => {
    setUser((previousState) => {
      return [...previousState, newUser];
    });
    setUserCount((prevCount) => prevCount + 1); // Update userCount when a new user is added
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      {userCount > 0 && (
        <Card className="user-form-container">
          {user.map((user, idx) => {
            return (
              <div key={idx} className="user-detail-container">
                <p>
                  {user.username} {user.age}
                </p>
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
}

export default UserDetails;
