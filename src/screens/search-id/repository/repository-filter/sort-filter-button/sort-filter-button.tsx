import Popper from "../../../../../components/elements/popper";
import PopperHandler from "../../../../../components/elements/popper/popper-handler";
import Button from "../../../../../components/elements/button";
import PopperContent from "../../../../../components/elements/popper/popper-content";
import Div from "../../../../../components/elements/div";
import ExpandIcon from "../../../../../icons/expand-icon.tsx";
import SortFilter from "../sort-filter";
import UseToggle from "../../../../../hooks/use-toggle";

const SortFilterButton = () => {
  const {show, toggleHandler} = UseToggle();

  return (
    <Popper position={'bottom-right'} showPopper={show} handlePopper={toggleHandler} className={'gap-y-2'}>
      <PopperHandler>
        <Button className={'shadow-sm h-7'} endAdornment={<ExpandIcon/>}>
        </Button>
      </PopperHandler>
      <PopperContent className={'!w-[256px] shadow-2xl p-2 pb-3 pt-0 bg-white'}>
        <Div className={'flex-col rounded-xl translate-y-1 w-full'}>
          <SortFilter/>
        </Div>
      </PopperContent>
    </Popper>

  )
}

export default SortFilterButton;