import React from "react";
// import { ScrollShadow } from "@heroui/scroll-shadow";
import { limit_text } from "@/utils";
import Circle from "./circle";
import ScrollShadow from "./xscroll_shadow";

export default (props) => {
  return (
    // <ScrollShadow hideScrollBar orientation="horizontal" className="w-full" dir="ltr">
    //       <Swiper modules={[FreeMode]} spaceBetween={0} slidesPerView={'auto'}>
    //         {props.items.map(r => (
    //           <SwiperSlide style={{'display': 'flex'}} className="flex items-center flex-col w-[100px] min-w-[100px] max-w-[100px]">
    //                 <Avatar {...r} style={{'background': r.bg, 'color': r.color}} size="lg" />
    //                 {r.text ? <p className="text-center text-[12px] font-bold py-1.5 h-12 w-[100px] min-w-[100px] max-w-[100px]">{limit_text(r.text, 20)}</p> : ''}
    //           </SwiperSlide>
    //         ) )}
    //       </Swiper>
    // </ScrollShadow>


    <ScrollShadow hideScrollBar orientation="horizontal" className="w-full" dir="ltr">
        <div className="flex gap-2 items-center w-fit py-2 px-4">
            {props.items.map(r => (
                <div className="flex items-center flex-col w-[80px] min-w-[80px] max-w-[80px]">
                    <Circle {...r} />
                    {r.text ? <p className="text-center text-[12px] font-bold py-1.5 h-12 w-[100px] min-w-[100px] max-w-[100px]">{limit_text(r.text, 20)}</p> : ''}
                </div>
            ) )}
        </div>
    </ScrollShadow>

    // <ScrollShadow>
    //   <div className="flex gap-2 items-center w-fit py-2 px-4">
    //     {props.items.map(r => (
    //       <div className="flex items-center flex-col w-[80px] min-w-[80px] max-w-[80px]">
    //         <Circle {...r} />
    //         {r.text ? <p className="text-center text-[12px] font-bold py-1.5 h-12 w-[100px] min-w-[100px] max-w-[100px]">{limit_text(r.text, 20)}</p> : ''}
    //       </div>
    //     ))}
    //   </div>
    // </ScrollShadow> 
  );
}
