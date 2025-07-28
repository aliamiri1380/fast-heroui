"use client"


import { useEffect, useState } from "react";

const AverageColor = ({ src }) => {
    const [averageColor, setAverageColor] = useState(null);
    

    const getAverageColor = (img) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set canvas size to match the image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        context.drawImage(img, 0, 0, img.width, img.height);

        try {
            const imageData = context.getImageData(0, 0, img.width, img.height);
            const { data } = imageData;
            let r = 0, g = 0, b = 0;

            // Sum up all the pixel data
            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            // Calculate the average of red, green, and blue values
            const pixelCount = data.length / 4;
            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);

            // Set the average color state
            setAverageColor(`rgb(${r}, ${g}, ${b})`);
        } catch (e) {
            console.error("Error accessing canvas data:", e);
        }
    };

    useEffect(() => {
        // Ensure that this runs only in the browser
        if (typeof window !== "undefined") {
            const img = document.createElement("img");
            img.crossOrigin = "Anonymous"; // Set crossOrigin to "Anonymous"
            img.src = src;
            
            // Once the image is loaded, calculate the average color
            img.onload = () => {
                getAverageColor(img);
            };
            
            // Handle image loading errors
            img.onerror = () => {
                console.error("Image failed to load:", src);
            };
        }
    }, [src]);

    return (
        <div style={{backgroundColor: averageColor}}></div>
    );
};

export default AverageColor;
