import React, { Component } from 'react'
import { Userinfo } from './Component/Userinfo'

export default class App extends Component {
  state = {
    userData: [
      {
        FirstName: "Tolulope",
        LastName: "Olabode",
        EmailAddress: "tolulopepeter12@gmail.com",
        PhoneNumber: "09060603130"
      },

      {
        FirstName: "busuyi",
        LastName: "peter",
        EmailAddress: "tolulopepeter12@gmail.com",
        PhoneNumber: "09060603130"
      },

      {
        FirstName: "taiye",
        LastName: "olufunto",
        EmailAddress: "tolulopepeter12@gmail.com",
        PhoneNumber: "09060603130"
      },

      {
        FirstName: "precious",
        LastName: "sope",
        EmailAddress: "toulikei2@gmail.com",
        PhoneNumber: "09234603130"
      }
    ]
    
  }
  render() {
    return (
      <div>
        <Userinfo name ={this.state.userData[0].FirstName} surname ={this.state.userData[0].LastName} email = {this.state.userData[0].EmailAddress} phone = {this.state.userData[0].PhoneNumber} />
        <br/>
        <Userinfo name ={this.state.userData[1].FirstName} surname ={this.state.userData[1].LastName} email = {this.state.userData[1].EmailAddress} phone = {this.state.userData[1].PhoneNumber} />
        <br/>
        <Userinfo name ={this.state.userData[2].FirstName} surname ={this.state.userData[2].LastName} email = {this.state.userData[2].EmailAddress} phone = {this.state.userData[2].PhoneNumber} />
        <br/>
        <Userinfo name ={this.state.userData[3].FirstName} surname ={this.state.userData[3].LastName} email = {this.state.userData[1].EmailAddress} phone = {this.state.userData[3].PhoneNumber} />


      </div>
    )
  }
}
