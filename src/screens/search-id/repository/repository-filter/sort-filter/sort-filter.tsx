import Div from "../../../../../components/elements/div";
import ListItem from "../../../../../components/elements/list-item";
import {sortData} from "./sort-data.ts";
import {SortFilterProps} from "./sort-filter.props.ts";
import useQueryParam from "../../../../../hooks/use-query-param";
import TickIcon from "../../../../../icons/tick-icon.tsx";
import {useNavigate} from "react-router-dom";

const SortFilter = () => {
  const navigate = useNavigate();
  const nameQuery = useQueryParam('s');
  const sortQuery = useQueryParam('o');

  const clickHandler = ({sort, direction}: { sort: string, direction: string }) => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    if (sort) currentSearchParams.set('s', sort);
    if (direction) currentSearchParams.set('o', direction);

    navigate(`/search?${currentSearchParams.toString()}`);
  }

  return (
    <Div className={'flex-col'}>
      {sortData.map((item: SortFilterProps) => {
        const isMatched = item.value === nameQuery && item.sort === sortQuery;
        const isDefault = !nameQuery && !sortQuery && item.id === '1';

        return (
          <Div onClick={()=>clickHandler({sort:item.value,direction:item.sort})} key={item.id} className={'w-full rounded-[6px] cursor-pointer hover:bg-[#d0d7de51] py-1.5 px-2 gap-x-2'}>
            {(isMatched || isDefault) ? <TickIcon/> : <Div className={'w-4 h-4'}/>}
            <ListItem value={item.name}/>
          </Div>
        );
      })}
    </Div>
  );
};

export default SortFilter;