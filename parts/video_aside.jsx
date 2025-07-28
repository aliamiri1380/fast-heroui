import CardDetails from './card_details'
import { User } from "@heroui/user"
import useWindowSize from './useWindowSize';
import VideoPreviewCard from './video_preview_card';
import Circle from './circle';
import Button from './button';
import { render_max_text } from '@/src/utils'
import { Image } from "@heroui/react";

export default ({ title, username, small_poster, views, publish_date, profilePhoto, sender_name, uid }) => {
    return (
        <a href={`/watch/${uid}`} className='video-preview'>
            <div className='grid sm:grid-cols-[160px_1fr]'>
                <div className="w-full h-[220px] sm:h-[100px] rounded-lg overflow-hidden poster">
                    {/* <div className='w-full h-full rounded-lg bg-contain' style={{ 'background': `url(${small_poster}) no-repeat center center`, 'backgroundSize': '100% 100%' }}></div> */}
                    <Image loading='lazy' alt={title} title={title} src={small_poster} classNames={{wrapper: 'h-full !max-w-full'}} className='w-full h-full' style={{ objectFit: 'cover', objectPosition: 'center center'}}  />
                </div>
                <div className="w-full py-2 pr-2 max-sm:hidden">
                    <h3 className='py-[2px] leading-6'>{render_max_text(title, 72)}</h3>
                    <p className='text-slate-500 text-xs py-[2px]'>{username}</p>
                    <p className='text-slate-500 text-xs py-[2px]'>{views}</p>
                </div>
                <div className='py-3 flex items-center sm:hidden'>
                    <div>
                        <Circle size="md" src={profilePhoto} />
                    </div>
                    <div className='pr-2 relative grow'>
                        <Button className="absolute left-0 " size="sm" variant="light" isIconOnly><i className='bx bx-sm bx-dots-horizontal-rounded'></i></Button>
                        <p>{String(title).substring(0, 50)}</p>
                        <p className='text-slate-500 text-xs pt-1'>{username}</p>
                        <p className='text-slate-500 text-xs video-card-details'>{views}</p>
                        <p className='text-slate-500 text-xs video-card-details'>{publish_date}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}