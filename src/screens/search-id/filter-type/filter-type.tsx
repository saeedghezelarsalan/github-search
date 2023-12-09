import CodeIcon from "../../../icons/code-icon.tsx";
import Div from "../../../components/elements/div";
import FilterTypeItem from "./filter-type-item";
import RepositoriesIcon from "../../../icons/repositories-icon.tsx";
import IssuesIcon from "../../../icons/issues-icon.tsx";
import DiscussionsIcon from "../../../icons/discussions-icon.tsx";
import UsersIcon from "../../../icons/users-icon.tsx";
import ShowMoreButton from "./show-more-button";

const FilterType = ({show = true}: { show?: boolean }) => {
  return (
    <Div className={'flex-col pt-2'}>
      <FilterTypeItem value={'Code'} startAdornment={<CodeIcon/>} count={'31.9k'}/>
      <FilterTypeItem value={'Repositories'} startAdornment={<RepositoriesIcon/>} count={'31.9k'}/>
      <FilterTypeItem value={'Issues'} startAdornment={<IssuesIcon/>} count={'31.9k'}/>
      <FilterTypeItem value={'Pull requests'} startAdornment={<RepositoriesIcon/>} count={'31.9k'}/>
      <FilterTypeItem value={'Discussions'} startAdornment={<DiscussionsIcon/>} count={'31.9k'}/>
      <FilterTypeItem value={'Users'} startAdornment={<UsersIcon/>} count={'31.9k'}/>
      {show ? <ShowMoreButton/> : null}
    </Div>
  )
}

export default FilterType;