import UseToggle from "../../../../hooks/use-toggle";
import ListItem from "../../../../components/elements/list-item";
import ArrowDownIcon from "../../../../icons/arrow-down-icon.tsx";
import Div from "../../../../components/elements/div";
import ShowMoreFilter from "../show-more-filter";

const ShowMoreButton = () => {
  const {show, showHandler} = UseToggle();

  if (!show) {
    return (
      <Div className={'w-full rounded-[6px] cursor-pointer py-[6px] px-2 hover:bg-[#d0d7de51]'} onClick={showHandler}>
        <ListItem value={'More'} startAdornment={<ArrowDownIcon/>}/>
      </Div>
    )
  }

  return (
    <ShowMoreFilter/>
  )
}

export default ShowMoreButton;