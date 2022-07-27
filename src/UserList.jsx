import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { graphql } from "graphql";

//Query to fetch data from server
const GET_USERS = ({dataUserSelect},permissions) =>{ 
    // console.log(value.dataUserSelect);
    console.log(dataUserSelect + "test 2")
    console.log(permissions + "test 2")
    return gql`
    query UserListQuery
      {
        users (role: "${dataUserSelect}", createCustomer:"${permissions}" ){
          name
          role
          permissions {
            createCustomer
          }
        }
      }
      `
    };


export const UserList =(value)=>{
  console.log(value.permissionsChecked);
  console.log(value.dataUserSelect);
  console.log("testing selection");
    
    const {loading, error, data } = useQuery(GET_USERS(value, value.permissionsChecked));
    
    
    if(!data){
      return <div >loading</div>
    }
    console.log(data.users);
    // console.log();

    if(data.loading){
      return(
        <li>Loading Users</li>
      )
    } else {
      return(
        data.users.map(user => {
          // filterUsersByRole(data.users, this.props.select)
          // console.log(this.props.select)
          console.log("test")
          // let data = filterUsersByRole(data.users, this.props.select)
          if(user.permissions.createCustomer ){
            return(
              <div key={Math.random().toString()}>
              <li >{user.name}</li>
              <button style={{float: "right"}}>Create User</button>
              </div>
            )
          } else {
            return(
              <li key={Math.random().toString()}>{user.name}</li>
            )
          }
        })
      )
    }

    // const displayUsers = () =>{
    //     var data = this.props.data;
    //     if(data.loading){
    //       return(<div>Loading Users</div>)
    //     } else {
    //       return data.users.map(user => {
    //         return(
    //           <li>{user.name}</li>
    //         )
    //       })
    //     }
    //   }
    //  const render= () =>{
    //     return(
    //       <div>
    //         <ul>
    //           {this.displayUsers()}
    //         </ul>
    //       </div>
    //     )
    //   }
}


