
import CardDetails from './card_details'
import { User } from "@heroui/user"
import useWindowSize from './useWindowSize';
import VideoPreviewCard from './video_preview_card';
import { Image } from "@heroui/react";

export default ({visit_cnt, uid, create_date, profilePhoto, description, title, big_poster, sender_name}) => {
    return (
        <a href={`/watch/${uid}`} className='video-preview'>
            <div className='grid max-sm:max-w-[400px] mx-auto sm:grid-cols-[300px_1fr]'>
                <div className="w-full h-[180px] poster">
                    {/* <div className='w-full h-full rounded-lg' style={{'background': `url(${big_poster}) no-repeat center center`}}></div> */}
                    <Image loading='lazy' alt={title} title={title} src={big_poster} classNames={{wrapper: 'h-full !max-w-full'}} className='w-full h-full' style={{objectFit: 'cover', objectPosition: 'center center'}}  />
                </div>
                <div className="w-full py-2 pr-2">
                    <h3 className='text-lg'>{title}</h3>
                    <h6 className='text-xs text-slate-500'>{description}</h6>
                    <User className='py-2 !text-xs' classNames={{name: 'text-xs'}} name={sender_name} avatarProps={{size: 'sm',src: profilePhoto}}/>
                    <CardDetails items={[`${visit_cnt} بازدید`, create_date]} />
                </div>
            </div>
        </a>
    )
}