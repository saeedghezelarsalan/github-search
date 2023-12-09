import Popper from "../../../../../components/elements/popper";
import UseToggle from "../../../../../hooks/use-toggle";
import PopperHandler from "../../../../../components/elements/popper/popper-handler";
import Button from "../../../../../components/elements/button";
import ArrowDownIcon from "../../../../../icons/arrow-down-icon.tsx";
import ListItem from "../../../../../components/elements/list-item";
import Chip from "../../../../../components/elements/chip";
import PopperContent from "../../../../../components/elements/popper/popper-content";
import Div from "../../../../../components/elements/div";
import FilterType from "../../../filter-type";
import ShowMoreFilter from "../../../filter-type/show-more-filter";
import useQueryParam from "../../../../../hooks/use-query-param";

const TypeFilter = () => {
  const {show, toggleHandler} = UseToggle();
  const typeQuery = useQueryParam('type')

  return (
    <Popper position={'bottom-left'} showPopper={show} handlePopper={toggleHandler} className={'mr-auto gap-y-1'}>
      <PopperHandler>
        <Button className={'shadow-sm h-7'} endAdornment={<ArrowDownIcon/>}>
          <ListItem value={typeQuery}/>
          <Chip value={'1.3k'}/>
        </Button>
      </PopperHandler>
      <PopperContent className={'!w-[256px] shadow-2xl p-2 pb-3 pt-0 bg-white'}>
        <Div className={'flex-col rounded-xl translate-y-1 w-full'}>
          <FilterType show={false}/>
          <ShowMoreFilter/>
        </Div>
      </PopperContent>
    </Popper>
  )
}

export default TypeFilter;