import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const featuredInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹1,72,366</span>
                <span className="featuredMoneyRate negative">
                    -20.4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Since Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹2,27,956</span>
                <span className="featuredMoneyRate negative">
                    -9.4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Since Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹72,500</span>
                <span className="featuredMoneyRate">
                    +7.7 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Since Last month</span>
        </div>
    </div>
  )
}

export default featuredInfo