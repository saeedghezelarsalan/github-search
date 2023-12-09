import ListItem from "../../../components/elements/list-item";
import Div from "../../../components/elements/div";
import {advanceFilterData} from "./advance-filter-data.ts";
import {AdvanceFilterProps} from "./advance-filter.props.ts";
import AddIcon from "../../../icons/add-icon.tsx";
import {useDispatch} from "react-redux";
import {SearchActions} from "../../../store/search/search-actions.ts";

const AdvanceFilter = () => {
  const dispatch = useDispatch();

  const clickFilterHandler = (payload:string) => {
    // dispatch(SearchActions.closeSearch())
    dispatch(SearchActions.searchType({type:payload}))
  }
  return(
    <Div className={'flex-col px-2'}>
      {advanceFilterData.map((item: AdvanceFilterProps) => (
        <ListItem clickHandler={()=>clickFilterHandler(item.payload)} value={item.name} startAdornment={<AddIcon/>} className={'w-full rounded-[6px] cursor-pointer hover:bg-[#d0d7de51] py-1.5 px-2'}/>
      ))}
    </Div>
  )
}

export default AdvanceFilter;