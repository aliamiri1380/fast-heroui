import Icon from "./icon"


const icons = [

    "hourglass",
    "calendar-event",
    "cake",
    "flame",
    "calendar",
    "calendar-time",
    "scoreboard",


    "heart",
    "hearts",
    "heart-handshake",
    "heartbeat",
    "hearts",
    "mail-heart",
    "paw",


    "user",
    "user-plus",
    "user-heart",
    "users",
    "user-circle",
    "user-check",
    "user-x",


    "trophy",
    "medal",
    "star",
    "medal-2",
    "award",


    "beach",
    "umbrella",
    "balloon",
    "flask",
    "pizza",
    "confetti",


    "target",
    "flag",
    "flag-2",
    "pig",
    "moneybag",
    "car",
    "plane",
    "rocket"
];


export default () => {
    return (
        <div className="w-[300px] bg-white h-fit flex flex-wrap justify-center rounded-lg shadow-xs gap-4 p-5">
            {icons.map(r => <div className="w-[30px] text-center cursor-pointer aspect-square pt-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"><Icon>{r}</Icon></div>)}
        </div>
    )
}