"use client";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import React, { useState } from "react";
const MENU_ITEMS = [
  { label: "Menu", icon: <RestaurantMenuIcon /> },
  { label: "Orders", icon: <ReceiptLongIcon /> },
];

const drawer = (
  <List>
    {MENU_ITEMS.map((item, index) => (
      <React.Fragment key={item.label + index}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </List>
);

type Props = {
  width: number;
};
export default function Sidebar({ width }: Props) {
  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box
      component="nav"
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
            top: 48, // Avoid header bar
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
            top: 48,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
