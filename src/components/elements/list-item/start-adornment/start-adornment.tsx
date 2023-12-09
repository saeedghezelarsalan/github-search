import Div from "../../div";
import {StartAdornmentProps} from "./start-adornment.props.ts";
import classNames from "../../../../utils/helper/class-names.ts";
import {COLORS} from "../../styles/colors.style.ts";

const StartAdornment = ({startAdornment, color = 'green'}: StartAdornmentProps) => {
  if (startAdornment) {
    return (
      <>
        {startAdornment}
      </>
    )
  }

  return (
    <Div className={classNames(
      'w-[10px] h-[10px] rounded-full',
      COLORS[color],
    )}
    />
  )
}

export default StartAdornment