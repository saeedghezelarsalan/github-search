import CommitsIcon from "../../../../icons/commits-icon.tsx";
import PackagesIcon from "../../../../icons/packages-icon.tsx";
import WikisIcon from "../../../../icons/wikis-icon.tsx";
import TopicsIcon from "../../../../icons/topics-icon.tsx";
import MarketplaceIcon from "../../../../icons/marketplace-icon.tsx";
import Div from "../../../../components/elements/div";
import FilterTypeItem from "../filter-type-item";

const ShowMoreFilter = () => {
  return (
    <Div className={'flex-col'}>
      <FilterTypeItem value={'Commits'} startAdornment={<CommitsIcon/>} count={'80k'}/>
      <FilterTypeItem value={'Packages'} startAdornment={<PackagesIcon/>} count={'80k'}/>
      <FilterTypeItem value={'Wikis'} startAdornment={<WikisIcon/>} count={'80k'}/>
      <FilterTypeItem value={'Topics'} startAdornment={<TopicsIcon/>} count={'80k'}/>
      <FilterTypeItem value={'MarketPlace'} startAdornment={<MarketplaceIcon/>} count={'80k'}/>
    </Div>
  )
}

export default ShowMoreFilter;