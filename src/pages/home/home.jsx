import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/chart/chart'

const home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart/>
    </div>
  )
}

export default home