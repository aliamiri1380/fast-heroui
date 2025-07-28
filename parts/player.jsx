"use client"

import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'; // Import Plyr CSS

const PlyrPlayer = (props) => {
    const videoRef = useRef(null); // Ref for the video element

    useEffect(() => {
        // Initialize Plyr when the component mounts
        const player = new Plyr(videoRef.current, {
            controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'], // Customize controls
        });

        // Cleanup Plyr instance when the component unmounts
        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []);

    return (
        <div className={'w-full ' + (props.className ?? '')}>
            <video ref={videoRef} controls className={'w-full ' + (props.className ?? '')} width={props.width} height={props.height}>
                <source src={props.src} type="video/mp4" />
                مرورگر شما از ویدئو پشتیبانی نمیکنه
            </video>
        </div>
    );
};

export default PlyrPlayer;