import {ReactNode} from "react";
import {Types} from "../text/text.props";

export interface ButtonProps {
  children?: ReactNode


  className?: string

  onClick?: (event?: any) => void

  onTouchStart?: (event?: any) => void

  onTouchEnd?: (event?: any) => void

  onMouseDown?: (event?: any) => void

  onMouseUp?: (event?: any) => void

  type?: "button" | "submit" | "reset"

  disabled?: boolean

  style?: any

  startAdornment?: ReactNode

  startAdornmentClassName?: string

  endAdornment?: ReactNode

  endAdornmentClassName?: string

  fontType?: Types

  href?: any

  dataTestId?: string
}