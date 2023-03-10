import React from 'react';
import Card from  '../UI/Card';
import classes from './AddUser.module.css';


const AddUser= props =>{
  const addUserHandler=(event) => {
    event.preventDefault();
  };
 return(
   <card className={classes.input}>
   <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id="username" tyep="text"/>
    <label htmlFor="age">Age</label>
    <input id="age" type="number"/>
    <button type="submit">AddUser</button>
   </form>
   </card>
 );

};

export default AddUser;