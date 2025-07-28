// import React, { useState, useRef, useLayoutEffect } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import $ from 'jquery';

// const SmoothSlideToggle = ({ content, ...props }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const contentRef = useRef(null);

//     // Measure content height dynamically
//     const [contentHeight, setContentHeight] = useState(0);
//     useLayoutEffect(() => {
//         if (contentRef.current) {
//             isOpen ? $(contentRef.current).slideDown() : $(contentRef.current).slideUp()
//         }
//     }, [isOpen]);

//     const animation = useSpring({
//         height: 'fit-content',
//         opacity: isOpen ? 1 : 0,
//         config: {
//             mass: 0.5,
//             tension: 310,
//             friction: 26,
//             clamp: false,
//         }
//     });

//     return (
//         <div style={{ width: '100%', margin: 'auto' }}>
//             {
//                 React.cloneElement(props.children, {
//                     ...props.children.props,
//                     onClick: (e) => {
//                         setIsOpen(!isOpen);
//                     },
//                 })
//             }
//             <animated.div style={{ ...animation, overflow: 'hidden' }}>
//                 <div ref={contentRef} style={{ padding: '15px' }}>
//                     {content}
//                 </div>
//             </animated.div>
//         </div>
//     );
// };

// export default SmoothSlideToggle;


import React, { memo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './icon';

const SmoothSlideToggle = ({ content, defaultOpen, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(defaultOpen)
    }, [defaultOpen])

    return (
        <div className="w-full">
            <div className='grid grid-rows-0 relative grid-cols-[0px,1fr] items-center'>
                <div className='absolute right-[-.4pc] min-h-[1.5pc] h-[calc(90%_-_1pc)] rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700' onClick={(e) => setIsOpen(!isOpen)}>
                    <Icon center size="sm" className={`px-1 h-fit transition-transform text ${isOpen ? 'rotate-90' : ''}`}>chevron-left</Icon>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [1, 0, 0, 1] }}
                        style={{
                            overflow: 'hidden',
                            // paddingRight: padding
                        }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default memo(SmoothSlideToggle);
