"use client"
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { render_children } from './utils';
import { useEffect, useRef, useState } from 'react';


export default (props) => {
	const swiperRef = useRef(null);
	const childRefs = useRef([]);
	const [currentIndex, setCurrentIndex] = useState(0)

	console.log('++++',childRefs.current.map(r => r));
	window['objs'] = childRefs.current.map(r => r)
	

	return (
		<Swiper autoHeight autoplay={{ delay: props.autoplayDelay ?? 4000, disableOnInteraction: false, }} onSlideChange={(e) => {setCurrentIndex(e.activeIndex);(props.onSlideChange ? props.onSlideChange(e.activeIndex) : '')}} onSwiper={props.onSwiper} modules={(props.pagination ? [Pagination] : []).concat((props.autoplay ? [Navigation, Autoplay] : []))} navigation={true} className={`rounded-lg my-2 ${props.whitePagination ? 'white-pagination' : ''} ${props.className ?? ''}`} pagination={{ clickable: true }} spaceBetween={props.spaceBetween ?? 0} slidesPerView={props.slidesPerView ?? 'auto'} style={{ 'padding': props.disablePaddingContainer ? '' : '0 1pc 0 1pc', 'width': childRefs.current[currentIndex]?.offsetWidth }}>
			{render_children(props.children, props.flat).map((r,i) => {
				return <SwiperSlide style={{ 'padding': `0 ${props.disablePadding ? '0' : props.padding ?? '5px'}` }}><div ref={(el) => childRefs.current[i] = el} className={`${currentIndex == i ? 'opacity-100' : 'opacity-0'} w-max overflow-hidden`}>{r}</div></SwiperSlide>
			})}
		</Swiper>
	);
};
