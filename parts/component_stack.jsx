import { cloneElement } from "react";
import {Divider} from "@heroui/divider";
import { filter_keys } from "@/src/utils";

export default (props) => {
    return (
      <>
          {
            props.items.map((r,i) =>
              <>
                {cloneElement(props.component, filter_keys(r, ['children']), <>{props.component.props.children}{r.children}</>)}
                {
                  i+1 != props.items.length && props.divide ? <div className={props.dividerSize ? 'p-'+props.dividerSize : ''}>{props.divideHidden ? '' : <Divider />}</div> : ''
                }
              </>
            )
          }
      </>
      );
  }  