"use client"

import { Chip } from "@heroui/react";
import Rating from 'react-animated-rating';


export default (props) => {
    return (
        <div className='ltr' dir='ltr'>
            <div className='w-max relative'>
                {props.isNew ? <Chip color='warning' variant='flat'>{props.noCommentsText ?? "بدون نظر"}</Chip> : <div><Rating {...props} /></div>}
                {props.readOnly ? <div className='w-full top-0 h-full absolute'></div> : ''}
            </div>
        </div>
    )
}