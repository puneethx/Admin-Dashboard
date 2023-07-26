import React from 'react'
import "./newUser.css"

export default function newUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <div className="newUserContainer">
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type='text' placeholder='puneethx'/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type='text' placeholder='T Puneeth Reddy'/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type='email' placeholder='puneeth.21bce7948@vitapstudent.ac.in'/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type='password' placeholder='password'/>
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type='text' placeholder='+91 9502478335'/>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type='text' placeholder='Tirupati | Andhra Pradesh'/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type='radio' name='gender' id='radio' value="male"/>
                    <label className="radioSelect" for="male">Male</label>
                    <input type='radio' name='gender' id='radio' value="female"/>
                    <label className="radioSelect" for="female">Female</label>
                    <input type='radio' name='gender' id='radio' value="other"/>
                    <label className="radioSelect" for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className='newUserSelect' name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
    </div>
  )
}
