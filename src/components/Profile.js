import React, { useContext } from "react"; // import the hook
import { UserContext } from "../context/user"; // import the actual component  
import Interests from "./Interests";
import { ThemeContext } from '../context/user'

function Profile() {

  // calling the hook
  const { user } = useContext(UserContext)
  

  if (!user) return <h2>Please Login To View Profile</h2>;
  console.log(user)
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
