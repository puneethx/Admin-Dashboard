import { CalendarToday, LocationOnOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./user.css";
import React from 'react'
import {Link} from "react-router-dom";


export default function user() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic"
                        alt=""
                        className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">T Puneeth Reddy</span>
                        <span className="userShowUserTitle">Web Developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">puneethx</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">05-04-2004</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+91 95024 78335</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">puneeth.21bce7948@vitapstudent.ac.in</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationOnOutlined className="userShowIcon"/>
                        <span className="userShowInfoTitle">Tirupati | Andhra Pradesh</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type='text' 
                                className="userUpdateInput" 
                                placeholder="puneethx"
                                
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                                type='text' 
                                className="userUpdateInput" 
                                placeholder="T Puneeth Reddy"
                            />
                            <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type='text' 
                                className="userUpdateInput" 
                                placeholder="puneeth.21bce7948@vitapstudent.ac.in"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                                type='text' 
                                className="userUpdateInput" 
                                placeholder="+91 950247 8335"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type='text' 
                                className="userUpdateInput" 
                                placeholder="Tirupati | Andhra Pradesh"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input id="file" type="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
