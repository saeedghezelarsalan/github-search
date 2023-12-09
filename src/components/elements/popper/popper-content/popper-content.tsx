import Div from "../../div";
import {PopperContentProps} from "./popper-content.props";
import classNames from "../../../../utils/helper/class-names.ts";

const PopperContent = ({className, children}: PopperContentProps) => {

  return (
    <Div
      className={classNames(
        'hidden absolute h-auto',
        className,
      )}
    >
      {children}
    </Div>
  );
}

export default PopperContent;