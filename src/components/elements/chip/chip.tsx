import Div from "../div";
import Text from "../text";
import {ChipProps} from "./chip.props.ts";

const Chip = ({value = '0'}: ChipProps) => {
  return (
    <Div className={'bg-[#AFBBC133] w-fit rounded-full px-2'}>
      <Text className={'text-xs font-semibold text-charcoal h-5 '}>{value}</Text>
    </Div>
  )
}

export default Chip;