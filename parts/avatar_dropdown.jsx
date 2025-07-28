import Dropdown from "./dropdown.jsx";
import Circle from './circle.jsx'

export default (props) => {
  return (
    <Dropdown>
        <div className="flex items-center">
          <Circle isBordered as="button" className="transition-transform" {...props} />
          {props.showName ? <p className="pr-4 text-lg">{props.name}</p> : ''}
        </div>
    </Dropdown>
  )
}