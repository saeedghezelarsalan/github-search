import Div from "../../../components/elements/div";
import FilterType from "../filter-type";
import Text from "../../../components/elements/text";
import Divider from "../../../components/elements/divider";
import FilterLanguage from "../filter-language/filter-language.tsx";
import AdvanceFilter from "../advance-filter/advance-filter.tsx";
import ListItem from "../../../components/elements/list-item";
import AdvanceSearchIcon from "../../../icons/advance-search-icon.tsx";

const Sidebar = () => {
  return (
    <Div tag={'aside'} className={'sticky overflow-y-scroll hidden sm:flex flex-col w-[296px] border-r py-4 px-2 h-screen top-0'}>
      <Text align={'left'} className={'px-2 pb-2'} type={'bold'}>Filter by</Text>
      <FilterType/>
      <Divider className={'my-2'}/>
      <Text align={'left'} className={'px-2 pb-2'} type={'bold'}>Languages</Text>
      <FilterLanguage/>
      <Divider className={'my-2'}/>
      <Text align={'left'} className={'px-2 pb-2'} type={'bold'}>Advance</Text>
      <AdvanceFilter/>
      <Divider className={'my-2'}/>
      <ListItem value={'Advance search'} startAdornment={<AdvanceSearchIcon/>} className={'p-2 text-blue-600'} />
    </Div>
  )
}

export default Sidebar;