import { useState } from 'react';
import Timeline from 'persian-react-calendar-timeline';
import './timeline.sass';
import moment from 'moment-jalaali';

// Enable Persian (Jalali) calendar
moment.loadPersian({ dialect: 'persian-modern' });

// const colors = [
//     "red",
//     "orange",
//     "amber",
//     "yellow",
//     "lime",
//     "green",
//     "emerald",
//     "teal",
//     "cyan",
//     "sky",
//     "blue",
//     "indigo",
//     "violet",
//     "purple",
//     "fuchsia",
//     "pink",
//     "rose",
//     "slate",
//     "gray",
//     "zinc",
//     "neutral",
//     "stone",
// ].map(r => [300,500,700].map(r2 => `bg-${r}-${r2}`)).flat()

const colors = [ "bg-red-300", "bg-red-500", "bg-red-700", "bg-orange-300", "bg-orange-500", "bg-orange-700", "bg-amber-300", "bg-amber-500", "bg-amber-700", "bg-yellow-300", "bg-yellow-500", "bg-yellow-700", "bg-lime-300", "bg-lime-500", "bg-lime-700", "bg-green-300", "bg-green-500", "bg-green-700", "bg-emerald-300", "bg-emerald-500", "bg-emerald-700", "bg-teal-300", "bg-teal-500", "bg-teal-700", "bg-cyan-300", "bg-cyan-500", "bg-cyan-700", "bg-sky-300", "bg-sky-500", "bg-sky-700", "bg-blue-300", "bg-blue-500", "bg-blue-700", "bg-indigo-300", "bg-indigo-500", "bg-indigo-700", "bg-violet-300", "bg-violet-500", "bg-violet-700", "bg-purple-300", "bg-purple-500", "bg-purple-700", "bg-fuchsia-300", "bg-fuchsia-500", "bg-fuchsia-700", "bg-pink-300", "bg-pink-500", "bg-pink-700", "bg-rose-300", "bg-rose-500", "bg-rose-700", "bg-slate-300", "bg-slate-500", "bg-slate-700", "bg-gray-300", "bg-gray-500", "bg-gray-700", "bg-zinc-300", "bg-zinc-500", "bg-zinc-700", "bg-neutral-300", "bg-neutral-500", "bg-neutral-700", "bg-stone-300", "bg-stone-500", "bg-stone-700"]
const shadows = [ "shadow-red-300", "shadow-red-500", "shadow-red-700", "shadow-orange-300", "shadow-orange-500", "shadow-orange-700", "shadow-amber-300", "shadow-amber-500", "shadow-amber-700", "shadow-yellow-300", "shadow-yellow-500", "shadow-yellow-700", "shadow-lime-300", "shadow-lime-500", "shadow-lime-700", "shadow-green-300", "shadow-green-500", "shadow-green-700", "shadow-emerald-300", "shadow-emerald-500", "shadow-emerald-700", "shadow-teal-300", "shadow-teal-500", "shadow-teal-700", "shadow-cyan-300", "shadow-cyan-500", "shadow-cyan-700", "shadow-sky-300", "shadow-sky-500", "shadow-sky-700", "shadow-blue-300", "shadow-blue-500", "shadow-blue-700", "shadow-indigo-300", "shadow-indigo-500", "shadow-indigo-700", "shadow-violet-300", "shadow-violet-500", "shadow-violet-700", "shadow-purple-300", "shadow-purple-500", "shadow-purple-700", "shadow-fuchsia-300", "shadow-fuchsia-500", "shadow-fuchsia-700", "shadow-pink-300", "shadow-pink-500", "shadow-pink-700", "shadow-rose-300", "shadow-rose-500", "shadow-rose-700", "shadow-slate-300", "shadow-slate-500", "shadow-slate-700", "shadow-gray-300", "shadow-gray-500", "shadow-gray-700", "shadow-zinc-300", "shadow-zinc-500", "shadow-zinc-700", "shadow-neutral-300", "shadow-neutral-500", "shadow-neutral-700", "shadow-stone-300", "shadow-stone-500", "shadow-stone-700"]


export default ({...props}) => {
    const groups = [
        { id: 1, title: 'گروه اول' },
        { id: 2, title: 'گروه دوم' },
    ];

    const [items, setItems] = useState([
        {
            id: 1,
            group: 1,
            title: 'آیتم ۱',
            start_time: moment(),
            end_time: moment().add(1, 'hour'),
            canMove: true,
            canResize: 'both'
        },
        {
            id: 2,
            group: 2,
            title: 'آیتم ۲',
            start_time: moment().subtract(30, 'minutes'),
            end_time: moment().add(30, 'minutes'),
            canMove: true,
            canResize: 'both'
        },
        {
            id: 3,
            group: 1,
            title: 'آیتم ۳',
            start_time: moment().add(2, 'hour'),
            end_time: moment().add(3, 'hour'),
            canMove: true,
            canResize: 'both'
        },
    ]);

    const handleItemMove = (itemId, dragTime, newGroupOrder) => {
        const group = groups[newGroupOrder];

        const updatedItems = items.map((item) =>
            item.id === itemId
                ? {
                    ...item,
                    start_time: moment(dragTime),
                    end_time: moment(dragTime).add(item.end_time.diff(item.start_time)),
                    group: group.id,
                }
                : item
        );
        setItems(updatedItems);
    };

    // Handle resize
    const handleItemResize = (itemId, time, edge) => {
        const updatedItems = items.map((item) => {
            if (item.id !== itemId) return item;

            return {
                ...item,
                start_time: edge === 'left' ? moment(time) : item.start_time,
                end_time: edge === 'left' ? item.end_time : moment(time),
            };
        });
        setItems(updatedItems);
    };

    return (
        <div dir="ltr">
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().subtract(2, 'hour')}
                defaultTimeEnd={moment().add(2, 'hour')}
                canMove={true}
                canResize="both"
                onItemMove={handleItemMove}
                onItemResize={handleItemResize}
                {...props}
            />
        </div>
    );
}
