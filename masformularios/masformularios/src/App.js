import { useState } from 'react';
import './App.css';
import UserForm from './Component/Component';


function App() {
  const [user, setUser]= useState({})
  return (
    <div className="form">
      <div>
      <UserForm setUser={setUser}/>
      <h4> Your name: {user.firstName}</h4>
      <div></div>
      <h4> Last name: {user.lastName}</h4>
      <div></div>
      <h4> Email: {user.email} </h4>
      <div></div>
      <h4> Password: {user.password}</h4>
      <div></div>
      <h4> Repeated password :{user.password2} </h4>
      </div>

    </div>
    
  );
}

export default App;
