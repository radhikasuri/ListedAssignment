import React from 'react'
import '../../styles/Dashboard/SideMenu.css'
import Image from 'next/image'

const SideMenu = () => {
  return (
    <div className='maindiv'>
       
        <div className='innerClass'>
            <div className='content'><h1>Board.</h1></div>
           <div className='content'><Image src="/dashboard_icon.png" alt="" width="18" height="20" />Dashboard</div>
          
          <div className='content'><Image src="/transaction_icon.png" alt="" width="18" height="20" />Transactions</div> 
           <div className='content'><Image src="/schedule_icon.png" alt="" width="18" height="20" />Schedules</div>
           <div className='content'><Image src="/user_icon.png" alt="" width="18" height="20" />Users</div>
           <div className='content'><Image src="/setting_icon.png" alt="" width="18" height="20" />Settings</div>
           </div>

        <div className='innerClass2'>
          <div>Help</div>
          <div>Contact us</div>
        </div>
        
        </div>
  )
}

export default SideMenu