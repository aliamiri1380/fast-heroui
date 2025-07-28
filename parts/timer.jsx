import { Spinner } from '@heroui/react'
// import { useEffect, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useTodoStore from '@/store'
import chroma from 'chroma-js'
import { getPrimaryColor } from './utils'

export default ({ mode = "timer", isPlaying = false, width = "w-[180px]", height = "h-[180px]", fontSize = "text-[2pc]", colors, duration = 10 }) => {
    
    const settings = useTodoStore(s => s.settings)
    if (!colors){
        colors = [chroma(getPrimaryColor()).hex(), '#f5a524', '#f31260']
    }
    const get_value = (elapsedTime, remainingTime) => {

        if (mode == "timer") {
            return <div className='flex items-center text-center'>
                <span className={`w-full block ${fontSize} absolute left-0 `}>{remainingTime}</span>
            </div>
        }
        else if (mode == "chronometer") {
            // return parseFloat(elapsedTime).toFixed(2);
            const minutes = Math.floor(elapsedTime / 60)
            const seconds = elapsedTime % 60
            return (
                <div className='flex items-center text-center'>
                    <Spinner classNames={{ wrapper: `${width} ${height} ${isPlaying ? "" : 'hidden'} transition-opacity`, 'circle1': `animate-5s border-8`, 'circle2': `animate-5s border-8` }} variant="default" />
                    <span className={`w-full block ${fontSize} absolute left-0 `}>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0').split('.')[0]}</span>
                </div>
            )
        }
    }

    return <div>
        <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={mode == "timer" ? duration : 100**100}
            colors={mode == 'timer' ? colors : ['rgba(150,150,150,0.1)']}
            colorsTime={[duration, duration * .5, 0]}
            strokeWidth={mode == 'timer' ? 12 : isPlaying ? 0 : 10}
            trailColor='rgba(150,150,150,0.1)'
        >
            {({ elapsedTime, remainingTime }) => get_value(elapsedTime, remainingTime)}
        </CountdownCircleTimer>
    </div>
}
