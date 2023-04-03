import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color:'#01CB22',
                borderRadius: '10',
                length: '147',
                width: '800px'
            }}
          

            aria-label="Default" valueLabelDisplay="auto"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
