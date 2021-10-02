
import './App.css';
import React from "react";
import Address from "./Component/Profile/Address";
import {FullName} from "./Component/Profile/FullName";
import {ProfilePhoto} from "./Component/Profile/ProfilePhoto";
 
const App = () => {
  return (
    <div className="App">
      <Address/>
      <FullName/>
      <ProfilePhoto/>
    </div>
  );
}
export default App;