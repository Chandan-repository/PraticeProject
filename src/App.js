import React from "react";
import AddUser  from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import "./style.css";

export default function App() {
    return (
      <div>
        <AddUser />
        <UsersList users={[]} />
      </div>
    );
  
}
