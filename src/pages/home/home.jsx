import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/chart/chart'
import {userData} from "../../dummydata"
import WidgetLarge from '../../components/widgetLarge/widgetLarge' 
import WidgetSmall from '../../components/widgetSmall/widgetSmall' 


const home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
      <WidgetSmall/>
      <WidgetLarge/>
        
      </div>
    </div>
  )
}

export default home