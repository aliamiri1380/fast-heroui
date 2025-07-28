export default (props) => {
    return (
        <div>
            {
                props.items.map(r => <div className="card-details">{r.icon} {r.text}</div>)
            }
        </div>
    );
}
