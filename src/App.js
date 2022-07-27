import {React, Component, useState} from "react";
import logo from "./acre-logo.svg";
import "./App.css";
import {client} from "./index.js";
import {UserList} from "./UserList";
import { ApolloProvider } from "react-apollo";
import { useEffect } from "react";

// const client = new ApolloClient();

// const client = index.client;

// const filteredUsers = users.filter((users) => user.role.includes())

const App = () => {
  const handleSearch = (event)=>{
    setSearchedUsers(event.target.value);
  }
  const handlePermissions = (event) =>{
    // console.log(event.target.checked);
    // console.log("handled permissions checked");
    // console.log(permissionsChecked + " states permissions");
    setPermissions(event.target.checked);
  }

  // const handleNameless = (event) =>{
  //   setNameless(event.target.value);
  // }

  
  
  const [select,setSearchedUsers]=useState();
  const [permissionsChecked, setPermissions]=useState();
  // const [namelessChecked, setNameless]=useState();
  // useEffect(()=>setSearchedUsers("ADMIN"));
  
  return (
    //Added ApolloProvider so nested components can access GraphQL Data
    <div className="app">
      
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />

        <h1>Welcome to acre</h1>
        <h2>Users</h2>
        <h1>{select}</h1>

        <ApolloProvider client={client}>
        <select value={select} onChange={handleSearch}>
          <option value="ADMIN">Admin</option>
          <option value="BROKER">Broker</option>
          <option value="ADVISOR">Advisor</option>
        </select>
        <div>
          <input type="checkbox" id="12" name="that" value="permissions" onChange={handlePermissions}></input><label>Create User Permissions</label>
        </div>
        <ul>
          <UserList dataUserSelect={select} permissionsChecked={permissionsChecked}/> 
          <li id="1" key="1">
            Adam
          </li>
          <li id="2" key="2">  
            Mary <strong>Admin</strong>
          </li>
        </ul>
        </ApolloProvider>
      </header>
    </div>
  );
};


export default App;
