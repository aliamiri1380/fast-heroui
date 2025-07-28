"use client"

import Button from './button'
import { Badge } from "@heroui/badge"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from './icon'


export default ({items=[], count, size="sm", className="", ...props}) => {
	const [active, setActive] = useState(window.location.pathname)
	const navigate = useNavigate()
	
	return (
		<footer id='footer-actions' className={"rounded-full bg-white dark:bg-black max-w-full bg-opacity-10 dark:bg-opacity-80 z-50 shadow-md shadow-slate-100 dark:shadow-slate-900 backdrop-blur-sm backdrop-saturate-50 h-12 fixed px-3 bottom-4 left-[50%] w-fit " + className} style={{ 'transform': 'translateX(-50%)' }}>
			<div className="flex gap-3 flex-row justify-center h-full items-center m-auto">
				{items.map(r => 
				<Badge content={r.count} showOutline={Boolean(count)} color="primary">
					<Button onClick={(e) => {
						r.redirect ? window.location.href = r.url :  navigate(r.url)
						setActive(r.url)
					}} size={size} isIconOnly className={active == r.url ? 'bg-primay text-white' : 'bg-transparent'} radius="full">
						<Icon size="2xl">{r.icon}</Icon>
					</Button>
				</Badge>
				)}
			</div>
		</footer>
	);
}