"use client"

import { User, Link } from "@heroui/react";
import Rating from "./rating";
import Button from "./button";
import { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom/client';
import Icon from "./icon";
import ComponentStack from "./component_stack";
import { prettyDate } from "../utils";

const Template = (props) => {
    const [comments, setComments] = useState([])
    const ref = useRef()

    useEffect(() => {
        if (!comments.length) return
        console.log(comments);
        
        const div = document.createElement('div');
        div.style.paddingTop = "1pc"
        ref.current.appendChild(div);
        const root = ReactDOM.createRoot(div);
        root.render(<ComponentStack divide divideHidden component={<Template icon={props.icon} />} items={
            comments.map(r => ({ ...r, date: prettyDate(r.date), children: r.text }))} />)
    }, [comments])
    
    return <>
        <div ref={ref} className={`w-full px-5 ${props.className}`}>
            <div className="h-full h-12 flex items-center">
                <User name={props.name} description={props.username ? (<span dir="ltr" href={process.env.USER_URL_PATH.replace("USERNAME", props.username)} size="sm">@{props.username}</span>) : ''} avatarProps={{ src: props.pic, icon: props.icon }} />
                <div className="text-left">
                    {props.rate ? <Rating filled={props.rate} readOnly size="1pc" /> : ''}
                    {props.date ? <span className="text-xs block pt-[3px] pr-2 text-slate-500">{props.date}</span> : ''}
                </div>
            </div>
            <p className="w-full leading-7 text-base pt-1 text-justify">
                {props.children}
            </p>
            {parseInt(props.count_replies) > 0 ? <Button variant="light" size="sm" className="opacity-50" onClick={() => props.getComments(setComments, 1, props.id)}>{props.count_replies} پاسخ</Button> : ''}
        </div>
    </>

}

export default ({ id = null, count_replies = null, name = null, pic = null, username = null, rate = null, className = '', icon = null, date = null, children, getComments = () => "" }) => {

    return <Template id={id} count_replies={count_replies} name={name} pic={pic} username={username} rate={rate} className={className} icon={icon} date={date} children={children} getComments={getComments} />
}