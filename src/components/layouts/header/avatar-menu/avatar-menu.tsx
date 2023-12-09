import Drawer from "../../../elements/drawer";
import UseToggle from "../../../../hooks/use-toggle";
import Avatar from "../../../../../public/images/avatar.jpg"
import Div from "../../../elements/div";
import CloseIcon from "../../../../icons/close-icon.tsx";
import ListItem from "../../../elements/list-item";

const AvatarMenu = () => {
  const {show, toggleHandler} = UseToggle();

  return (
    <>
      <Div className={'cursor-pointer'} onClick={toggleHandler}>
        <img className={'w-8 h-8 rounded-full'} src={Avatar} alt={'sibche'}/>
      </Div>
      <Drawer position={'right'} isOpen={show} clickHandler={toggleHandler}>
        <Div className={'flex-col w-full p-4'}>
          <Div className={'w-full justify-between items-center'}>
            <Div className={'gap-x-2 items-center'}>
              <img className={'w-8 h-8 rounded-full'} src={Avatar} alt={'sibche'}/>
              <p className={'text-xs'}>Sibche</p>
            </Div>
            <Div onClick={toggleHandler} className={'w-8 h-8 bg-gray-200 items-center justify-center rounded'}>
              <CloseIcon/>
            </Div>
          </Div>
          <ListItem value={'Set status'}/>
        </Div>
      </Drawer>
    </>
  )
}

export default AvatarMenu;