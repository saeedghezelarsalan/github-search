import Div from "../../../../../components/elements/div";
import Button from "../../../../../components/elements/button";
import SortIcon from "../../../../../icons/sort-icon.tsx";
import UseToggle from "../../../../../hooks/use-toggle";
import Modal from "../../../../../components/elements/modal";
import FilterLanguage from "../../../filter-language/filter-language.tsx";
import AdvanceFilter from "../../../advance-filter";
import Text from "../../../../../components/elements/text";
import CloseIcon from "../../../../../icons/close-icon.tsx";
import Divider from "../../../../../components/elements/divider";

const AdvanceLanguageFilter = () => {
  const {show, showHandler, toggleHandler} = UseToggle();

  return (
    <>
      <Button className={'h-7'} onClick={showHandler} startAdornment={<SortIcon/>}>Filter</Button>
      <Modal className={'flex-col'} open={show} onClose={toggleHandler}>
        <Div className={'flex-col w-full h-full overflow-y-scroll rounded shadow-2xl'}>
          <Div className={'p-8 border-b items-center justify-between sticky top-0 bg-white'}>
            <Text align={'left'}>Filters</Text>
            <Div onClick={toggleHandler}>
              <CloseIcon/>
            </Div>
          </Div>
          <Div className={'flex-col'}>
            <Divider className={'my-2'}/>
            <Text className={'px-4 py-1'} align={'left'}>Languages</Text>
            <FilterLanguage/>
            <Divider className={'my-2'}/>
            <Text className={'px-4 py-1'} align={'left'}>Advance</Text>
            <AdvanceFilter/>
          </Div>
        </Div>
      </Modal>
    </>
  )
}

export default AdvanceLanguageFilter;