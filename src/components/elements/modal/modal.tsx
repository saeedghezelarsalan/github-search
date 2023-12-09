import {useEffect} from 'react'
import {ModalProps} from './modal.props'
import Div from '../div'
import classNames from "../../../utils/helper/class-names.ts";

export const Modal = ({open, children, onClose, className, ...rest}: ModalProps) => {

  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);
if(open) {
  return (
    <Div className={
      classNames(
        `justify-center items-center bg-[#1f23287f] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] w-full h-screen`,
        className,
      )
    }>
      <Div className={`-z-10 w-screen h-screen absolute bg-[#1f23287f]`} onClick={onClose} {...rest}/>
      <Div className={'bg-white w-full max-w-[640px] h-sidebar rounded-xl overflow-hidden'}>
        {children}
      </Div>
    </Div>
  )
}

return null;
}
export default Modal;
