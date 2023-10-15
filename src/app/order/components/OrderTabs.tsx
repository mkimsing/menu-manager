import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
  handleChangeIndex?: (index: number, indexLatest: number, meta: any) => void;
  activeTabIndex: number;
};
export default function OrderTabs({
  children,
  handleChangeIndex,
  activeTabIndex,
}: Props) {
  return (
    <SwipeableViews
      axis={"x"}
      index={activeTabIndex}
      onChangeIndex={handleChangeIndex}
    >
      {children}
    </SwipeableViews>
  );
}
