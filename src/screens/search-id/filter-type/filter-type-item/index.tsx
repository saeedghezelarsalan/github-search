import {useNavigate} from "react-router-dom";
import {FilterTypeItemProps} from "./filter-type-item.props.ts";
import Div from "../../../../components/elements/div";
import ListItem from "../../../../components/elements/list-item";
import Chip from "../../../../components/elements/chip";
import classNames from "../../../../utils/helper/class-names.ts";
import useQueryParam from "../../../../hooks/use-query-param";

const FilterTypeItem = ({value = 'repositories', startAdornment, count}: FilterTypeItemProps) => {
  const queryType = useQueryParam('type');
  const navigate = useNavigate();
  // const nameQuery = useQueryParam('s');

  const clickHandler = (value: string) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set('type', value?.toLowerCase());

    navigate(`/search?${currentSearchParams.toString()}`);
  }

  return (
    <Div>
      <Div onClick={() => clickHandler(value)} className={classNames(
        'justify-between w-full rounded-[6px] cursor-pointer py-[6px] px-2 hover:bg-[#d0d7de51]',
        queryType === value.toLowerCase().replace(/\s+/g, '') ? 'bg-[#d0d7de3d]' : '',
      )}>
        <ListItem value={value} startAdornment={startAdornment}/>
        <Chip value={count}/>
      </Div>
    </Div>
  )
}

export default FilterTypeItem;