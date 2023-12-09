import Div from "../../../../components/elements/div";
import TypeFilter from "./type-filter/type-filter.tsx";
import AdvanceLanguageFilter from "./advance-language-filter";
import SortFilterButton from "./sort-filter-button/sort-filter-button.tsx";

const RepositoryFilter = () => {
  return (
    <Div className={'justify-between px-4 pb-0 w-full h-auto'}>
      <TypeFilter/>
      <Div className={'ml-auto relative w-auto gap-x-2'}>
        <AdvanceLanguageFilter/>
        <SortFilterButton/>
      </Div>
    </Div>
  )
}

export default RepositoryFilter;