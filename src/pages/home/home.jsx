import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/chart/Chart'
import {userData} from "../../dummydata"

const home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default home