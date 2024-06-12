import React from 'react';
import ClockLabel from '@/components/ClockLabel';
import MastIcon from '@/components/MastIcon';

function TopMast() {
  return (
    <div className='top_mast'>
      <div className='top_mast_start'>
          <a href='/' className='meet_google_logo'>
            <img src='/images/meet_logo.png'/>
            <span>Meet</span>
          </a>
      </div>
      <div className='top_mast_end'>
          <ClockLabel/>
          <MastIcon toolTipLabel={'Support'} iconPath={'icons/support.svg'} iconAlt='Support'/>
          <MastIcon toolTipLabel={'Report a problem'} iconPath={'icons/report.svg'} iconAlt='Report'/>
          <MastIcon toolTipLabel={'Settings'} iconPath={'icons/settings.svg'} iconAlt='Settings'/>
          <MastIcon toolTipLabel={'Apps'} iconPath={'icons/apps.svg'} iconAlt='Apps'/>
      </div>
    </div>
  )
}

export default TopMast