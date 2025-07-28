"use client"

import { Image } from "@heroui/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default ({images}) => {
    return (
        <>
            <PhotoProvider>
                {images.map((r,i) => (
                    <div key={i}>
                        <PhotoView key={i} src={r.src}>
                            <Image {...r} />
                        </PhotoView>
                    </div>
                ))}
            </PhotoProvider>
        </>
    );
}