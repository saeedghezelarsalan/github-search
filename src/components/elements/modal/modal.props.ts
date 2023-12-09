import {ReactNode} from "react";

export interface ModalProps {

  open: boolean;

  position?: 'float' | 'bottom';

  children?: ReactNode;

  onClose?: () => void;

  className?: string;
}

export interface ModalPropsColorOverrides {

}