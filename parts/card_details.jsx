export default ({items}) => {
    return <div>
        {items.map(r => <p className='text-slate-500 text-xs video-card-details'>{r}</p>)}
    </div>
}