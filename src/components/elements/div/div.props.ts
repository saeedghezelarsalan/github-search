import {CSSProperties, ReactNode} from "react";

export interface DivProps {
  tag?: Tags;

  itemScope?: any

  itemType?: string

  itemProp?: string

  children?: ReactNode

  className?: string | undefined

  style?: CSSProperties | undefined;

  onClick?: (event: any) => void

  dangerouslySetInnerHTML?: any

  role?: string

  dir?: string

  id?: string

  ref?: any

  dataTestId?: string

  onMouseOver?: (event: any) => void

  onMouseLeave?: () => void
}

type Tags = 'div' | 'main' | 'section' | 'aside' | 'ul' | 'li';