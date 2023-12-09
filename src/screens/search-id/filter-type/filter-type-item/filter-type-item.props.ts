import {ListItemProps} from "../../../../components/elements/list-item/list-item.props.ts";

export interface FilterTypeItemProps extends listItemType {
  count: string;
}

type listItemType = Pick<ListItemProps, 'value' | 'startAdornment'>
