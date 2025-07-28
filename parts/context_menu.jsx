"use client"

import { useState, useEffect, useRef } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Button from "./button"


export default ({content}) => {
	const [idx, setIdx] = useState(0);
	const swRef = useRef()
	const [menuContent, setMenuContent] = useState([]);
	const [selectedOption, setSelectedOption] = useState({});
	const observer = new MutationObserver((mutationsList) => {
        // This will be called anytime the observed element or its children are modified
        setTimeout(() => {
			if (swRef.current) {
				console.log(123);
                swRef.current.updateHeight();
            }
        }, 100);
    });
	useEffect(() => {
		if (content && content.length)
			setMenuContent(content)
		document.querySelector('.swipper > div') && observer.observe(document.querySelector('.swipper > div'), {
            childList: true, // Observe direct children changes (additions/removals)
            subtree: true,   // Observe changes in descendants (subtree)
            attributes: false, // Set to true if you want to observe changes to attributes
            characterData: false, // Set to true if you want to observe changes to text nodes
        });
	}, [content])

	return (
		<div>
			<SwipeableViews ref={swRef} enableMouseEvents index={idx} onChangeIndex={(i) => setIdx(i)} className='swipper max-w-[300px] min-h-[200px] bg-slate-100' axis='x-reverse'>
				<div className='w-full h-full p-2'>
					{
						menuContent.map(r => r.option)
					}
				</div>
				<div className='p-1' dir="rtl">
					<div>
						<Button size="sm" variant="light" onClick={() => setIdx(Math.max(idx-1))} className="text-slate-900">برگشت <i className='bx bx-chevron-right bx-sm'></i></Button>
					</div>
					<div>
						{selectedOption['content']}
					</div>
				</div>
			</SwipeableViews>
		</div>
	)
};