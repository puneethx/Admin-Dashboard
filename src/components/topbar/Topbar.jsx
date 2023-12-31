import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">PUNEETH</span>
            </div>
            <div className='topright'>
                <Link to="/notifications" className='link'>
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                </Link>
                <Link to = "/settings" className='link'>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                </Link>
                <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar