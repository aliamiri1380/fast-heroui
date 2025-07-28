"use client"

import Button from "./button";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { setCookie } from "../utils";


export default (props) => {
    const [isDarkMode, setDarkMode] = React.useState();

    React.useEffect(() => {
        setDarkMode(document.querySelector("html").classList.contains('dark'))
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        setCookie('darkmode', !isDarkMode, 120)
    };
    const onClick = (e, isDark) => {
        if (props.animated){
            const from_mode = isDark ? 'dark' : 'light'
            const to_mode = isDark ? 'light' : 'dark'
            const page = document.querySelector('html');
            const btnRect = e.target.getBoundingClientRect();
            const cx = btnRect.left + btnRect.width / 2;
            const cy = btnRect.top + btnRect.height / 2;

            // Clone the page content
            const clone = page.cloneNode(true);
            // Remove the old theme class and add dark theme plus a special class for animation
            clone.classList.remove(from_mode);
            clone.classList.add(to_mode, 'page-clone');

            // Position the clone exactly on top of the original
            // (Assuming the .page container is positioned relative to its parent)
            clone.style.top = page.offsetTop + 'px';
            clone.style.left = page.offsetLeft + 'px';

            // Set the clip-path center variables to the toggle’s center coordinates
            clone.style.setProperty('--cx', cx + 'px');
            clone.style.setProperty('--cy', cy + 'px');

            // Append the clone to the same parent (here, the body)
            page.appendChild(clone);
            
            // clone.scrollTop = document.documentElement.scrollTop
            document.querySelectorAll('html')[1].scrollTop = document.documentElement.scrollTop

            // Force reflow so the browser registers the initial clip-path (0px)
            void clone.offsetWidth;

            // Compute a radius that will cover the entire viewport (using the diagonal)
            const finalRadius = Math.hypot(window.innerWidth, window.innerHeight);

            // Animate the clip-path to reveal the new theme
            clone.style.clipPath = `circle(${finalRadius}px at ${cx}px ${cy}px)`;

            // When the animation completes, remove the clone and update the original page's theme
            clone.addEventListener('transitionend', () => {
                page.classList.add('diable-transitions');
                clone.classList.add('diable-transitions');
                setTimeout(() => clone.remove(), 500000)
                page.classList.remove(from_mode);
                page.classList.add(to_mode);
                page.classList.remove('diable-transitions');
            }, { once: true });
        }
        else{
            document.querySelector('html').classList.toggle('dark')
        }
    };
    return <Button variant="light" onClick={(e) => {toggleDarkMode();onClick(e, isDarkMode)}} className="flex items-center" isIconOnly>
        <DarkModeSwitch
            checked={isDarkMode}
            size={20}
        />
    </Button>
}