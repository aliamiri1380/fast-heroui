import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default (props) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (document.querySelectorAll("#nnn").length){
            console.log(123);
            
            WAVES({ 
                el: myRef.current.getAttribute('id'), // element selector string or DOM object reference
                color: 0x000000,
                waveHeight: 20,
                shininess: 50,
                waveSpeed: 1.5,
                zoom: 0.75
            })
        }
    }, [document.querySelectorAll("#nnn").length])
    return <div ref={myRef} id="nnn" className='h-[100vh]'>
        Foreground content goes here
    </div>
}