'use client'

import $ from 'jquery'
import { useEffect, useRef } from 'react';

export default ({text, maxShow}) => {
    const div = useRef()
    useEffect(() => {
        const delay = 50
        const words = $(div.current).find("span.to-be-visible");
        let currentDelay = 0;

        words.each(function (index, word) {
            setTimeout(() => {
                $(word).addClass("showed");
            }, currentDelay);
            currentDelay += delay;
        });
    }, [div])
    return <div ref={div} key={0} className='animatedText'>
        {
            text.trim().split(' ').map((r,i) => i < maxShow ? <span key={i}>{r + ' '}</span> : <span className="to-be-visible">{r + ' '}</span>)
        }
    </div>
}