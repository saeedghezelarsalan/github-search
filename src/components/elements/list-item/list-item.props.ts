import {ReactNode} from "react";
import {Colors} from "../../../types/colors";

export interface ListItemProps {
  value: any;

  startAdornment?: ReactNode;

  color?: Colors;

  clickHandler?: () => void;

  className?: string;
}