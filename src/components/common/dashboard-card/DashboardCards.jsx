import React from 'react'
import "./dashboardCard.scss"
function DashboardCards({title,amount,percentage,icon,growth,growthClass,backgroundClass,type}) {
  return (
    <div className='dashboard-card'>
<div className='card-left-sec'>
    <p className='title'>{title}</p>
    {
      type === "gst" || type === "revenue" ?  <p className='gst-amount'>{amount}</p> :  <p className='amount'>{amount}</p>
    }
   {
    type === "dashboard" ?  <p className={`percentage ${growthClass}`}><img className='growth-text' src={growth} alt={growth} />{percentage}</p> : "" 
   }
   
</div>
<div className={`card-right-sec ${backgroundClass}`}> <img src={icon} alt={icon} /></div>
    </div>
  )
}

export default DashboardCards