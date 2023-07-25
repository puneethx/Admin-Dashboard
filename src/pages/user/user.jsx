import { CalendarToday, LocationOnOutlined, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import "./user.css";

export default function user() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
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
                        <span className="userShowInfoTitle">+91 9502478335</span>
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
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}
