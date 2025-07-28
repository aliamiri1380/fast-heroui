import {Button} from "@heroui/button";

export default (props) => {
  return <Button {...props} dir="ltr">{props.children}</Button>
}
