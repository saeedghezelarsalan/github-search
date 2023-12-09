import React, {ReactNode, useEffect, useRef} from 'react';
import Div from "../div";
import classNames from "../../../utils/helper/class-names.ts";

interface DrawerProps {
  isOpen: boolean;
  position: 'left' | 'right';
  clickHandler: () => void;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({isOpen, position = 'left', children, clickHandler}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Improved click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        clickHandler();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, clickHandler]);

  return (
    <Div
      className={classNames(
        `w-screen h-screen fixed bottom-0 left-0 right-0 z-[1300] items-end`,
        // className,
        isOpen
          ? position === 'left' ? 'translate-x-0 justify-start transition-all duration-700' : '-translate-x-0 justify-end transition-all duration-700'
          : position === 'left' ? '-translate-x-full justify-start' : 'translate-x-full justify-end'
      )}
    >
      <Div onClick={clickHandler} className={'-z-10 w-full h-screen absolute bg-mist opacity-40'}/>
      <Div
        className={classNames(
          'h-full  justify-center overflow-hidden w-11/12 sm:w-80 bg-white border shadow',
          position === 'left' ? 'rounded-tr-2xl rounded-br-2xl' : 'rounded-tl-2xl rounded-bl-2xl',
        )}
      >
        {children}
      </Div>

    </Div>
  );
};

export default Drawer;
