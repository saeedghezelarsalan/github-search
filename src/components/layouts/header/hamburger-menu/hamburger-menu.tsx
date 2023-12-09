import Drawer from "../../../elements/drawer";
import UseToggle from "../../../../hooks/use-toggle";
import Button from "../../../elements/button";
import HamburgerMenuIcon from "../../../../icons/hamburger-menu-icon.tsx";
import Div from "../../../elements/div";
import Logo from '../../../../../public/images/logo.png'
import CloseIcon from "../../../../icons/close-icon.tsx";
import FilterType from "../../../../screens/search-id/filter-type";
import Divider from "../../../elements/divider";
import ShowMoreFilter from "../../../../screens/search-id/filter-type/show-more-filter";

const HamburgerMenu = () => {
  const {show, toggleHandler} = UseToggle();

  return (
    <>
      <Button onClick={toggleHandler} className={'h-8'} startAdornment={<HamburgerMenuIcon/>}/>
      <Drawer position={'left'} isOpen={show} clickHandler={toggleHandler}>
        <Div className={'w-full flex-col p-4 gap-y-4'}>
          <Div className={'w-full justify-between'}>
            <img className={'w-8 h-8'} src={Logo} alt={'logo'}/>
            <Div className={'cursor-pointer'} onClick={toggleHandler}><CloseIcon/></Div>
          </Div>
          <Div className={'flex-col'}>
            <FilterType/>
            <Divider className={'my-2'}/>
            <ShowMoreFilter/>
          </Div>
        </Div>
      </Drawer>
    </>
  )
}

export default HamburgerMenu;