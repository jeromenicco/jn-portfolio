import React from 'react'

import './css/Stripes.css'
import StripesTop from './StripesTop'
import StripesBottom from './StripesBottom'

const Stripes = () => {

    return(
        <div className='stripes__container'>
            <StripesTop />
            <StripesBottom />
        </div>
    )
}

export default Stripes