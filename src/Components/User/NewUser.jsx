import UserForm from "./UserForm";
function NewUser(props) {
  const saveExpenseUserHandler = (newUser) => {
    const newUserData = {
      ...newUser,
      id: Math.random().toString(),
    };
    props.onAddUser(newUserData);
  };
  return <UserForm onSaveUserData={saveExpenseUserHandler} name="Shailu" />;
}

export default NewUser;
