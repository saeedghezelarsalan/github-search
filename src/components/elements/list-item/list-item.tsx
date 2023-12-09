import Div from "../div";
import {ListItemProps} from "./list-item.props.ts";
import classNames from "../../../utils/helper/class-names.ts";
import StartAdornment from "./start-adornment";

const ListItem = ({value, startAdornment, color, clickHandler, className}: ListItemProps) => {
  return (
    <Div onClick={clickHandler} className={classNames('items-center gap-x-2', className)}>
      {startAdornment || color ? <StartAdornment startAdornment={startAdornment} color={color}/> : null}
      <span className={'text-sm'}>{value}</span>
    </Div>
  )
}

export default ListItem;