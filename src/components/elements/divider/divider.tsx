import classNames from "../../../utils/helper/class-names.ts";
import Div from "../div";

export const Divider = ({className}: { className?: string | undefined }) => {
  return (
    <Div className={classNames('w-full border-t border-solid', className)}/>
  )
}

export default Divider