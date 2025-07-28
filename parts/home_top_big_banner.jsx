"use client"

import { Tooltip } from "@heroui/tooltip"
import Button from './button'
import { Image } from "@heroui/image"
import Circle from './circle'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Chips from './chips'

export default (props) => {
    const images = [
        'https://m.media-amazon.com/images/I/91sEWuRZDcL.jpg',
        'https://getthechance.wales/wp-content/uploads/2017/10/Thor_Ragnarok_Promo_Banner.jpg',
        'https://lumiere-a.akamaihd.net/v1/images/the-acolyte-54-hero-mobile_e247425f.jpeg?region=0,0,1280,720',
      ];
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [index]);
    return (
      <div className={'w-full h-[700px] absolute right-0 top-0 overflow-hidden z-[-1] ' + (props.className ?? '')}>
        <div className='w-full h-full overflow-hidden relative'>
          <div className="top-big-poster-overlay"></div>
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt={`Image ${index + 1}`}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 10 }}
              style={{ position: 'absolute', 'borderRadius': '12px', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
      </div>
    )
}