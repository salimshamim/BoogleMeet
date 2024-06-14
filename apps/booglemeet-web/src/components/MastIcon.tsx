import React from 'react'

type MastIconParam = {
    toolTipLabel: string;
    iconPath: string;
    iconAlt: string;
}

function MastIcon({ toolTipLabel, iconPath, iconAlt }: MastIconParam) {
    return (
        <div className='outer_mast_icon'>
            <div className='mast_icon'>
                <img src={iconPath} alt={iconAlt} />
            </div>
            <span>{toolTipLabel}</span>
        </div>
    )
}

export default MastIcon