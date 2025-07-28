import Toman from "./toman"

export default (props) => {
    return <div className="px-4">
        <p className="py-2 flex justify-between">
            <span className={`text-right ${props.rightClassName}`}>{props.right}</span>
            <span className={`text-left ${props.leftClassName}`}>{props.left} {props.toman ? <Toman className="scale-[2]" /> : ''}</span>
        </p>
    </div>
}