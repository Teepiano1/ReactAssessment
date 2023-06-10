import React from 'react'

export const Userinfo = ({name, surname, email, phone}) => {
  return (
    <div style={{backgroundColor: "pink", color: "blue" }}>
        <div>First Name: {name}</div>
        <div>Last Name: {surname}</div>
        <div>Email Address: {email}</div>
        <div>Phone Number: {phone}</div>
    </div>
  )
}
