import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export default function Tab({ children, dir, index, value, ...rest }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
