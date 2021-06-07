import React from 'react'
import { useState } from 'react'

const PredictedSection = ({ predictedImage }) => {
    
    return (
        <div id='prededsec'>
            <img src={predictedImage} alt="predicted image" />
        </div>
    )
}

export default PredictedSection
