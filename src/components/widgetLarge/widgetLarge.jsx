import React from 'react'
import "./widgetLarge.css"


export default function widgetLarge() {
  
  const Button = ({type}) =>{
    return <button className={" widgetLargeButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className='widgetLargeTr'>
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" 
            alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">T Puneeth Reddy</span>
          </td>
          <td className="widgetLargeDate">20 Jan 2023</td>
          <td className="widgetLargeAmount">₹18000</td>
          <td className="widgetLargestatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" 
            alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">T Puneeth Reddy</span>
          </td>
          <td className="widgetLargeDate">20 Jan 2023</td>
          <td className="widgetLargeAmount">₹18000</td>
          <td className="widgetLargestatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" 
            alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">T Puneeth Reddy</span>
          </td>
          <td className="widgetLargeDate">20 Jan 2023</td>
          <td className="widgetLargeAmount">₹18000</td>
          <td className="widgetLargestatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" 
            alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">T Puneeth Reddy</span>
          </td>
          <td className="widgetLargeDate">20 Jan 2023</td>
          <td className="widgetLargeAmount">₹18000</td>
          <td className="widgetLargestatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://media.licdn.com/dms/image/D5603AQHVdswp3GN-DQ/profile-displayphoto-shrink_800_800/0/1666363601384?e=2147483647&v=beta&t=PY52LedOd_e85UZIbU4cN5qwO5-0PhLEsBjwa6aecic" 
            alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">T Puneeth Reddy</span>
          </td>
          <td className="widgetLargeDate">20 Jan 2023</td>
          <td className="widgetLargeAmount">₹18000</td>
          <td className="widgetLargestatus">
            <Button type="Declined"/>
          </td>
        </tr>
      </table>
    </div>
  )
}