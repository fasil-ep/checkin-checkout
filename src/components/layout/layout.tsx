import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./header/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            backgroundColor: "rgba(248, 248, 248, 1)",
            px: 15,
            pt: 4,
            pb: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
