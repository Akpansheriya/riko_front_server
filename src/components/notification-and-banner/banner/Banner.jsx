import React from 'react'
import "./banner.scss"
import editIcon from "../../assets/edit.png"
import deleteIcon from "../../assets/delete.png"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Banner() {
    const navigate = useNavigate()
    const handleClick = () => {
navigate("/dashboard/add-banner")
    }
  return (
    <div className='banner-tab-main'>
        <div className='add-btn'><Button onClick={handleClick}>+ Add New Notification</Button></div>
<div className="table-headings">
      <div>
        <p className="heading-text">Sr. No</p>
      </div>
      <div>
        <p className="heading-text">
         Notification Name
        </p>
      </div>
      <div>
        <p className="heading-text">
       Notification Active?
          
        </p>
      </div>
      <div>
        <p className="heading-text">
         Action
        </p>
      </div>
      
      
      
    </div>
    <div className="table-body">
      <div>
        <p className="heading-text">01</p>
      </div>
      <div>
        <p className="heading-text">Banner 1</p>
      </div>
      <div>
      <p className="heading-text">
                <div class="material-switch pull-right">
                  <input
                    id="someSwitchOptionDefault"
                    name="someSwitchOption001"
                    type="checkbox"
                  />
                  <label
                    for="someSwitchOptionDefault"
                    class="label-default"
                  ></label>
                </div>
              </p>
      </div>
      <div>
        <div className="actions"><img src={editIcon} alt={editIcon} /> <img src={deleteIcon} alt={deleteIcon} /></div>
      </div>
     
     
    </div>
    </div>
  )
}

export default Banner