import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./header/header";
import { useMediaQuery } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const matchesm = useMediaQuery("(min-width:500px)");
  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            backgroundColor: "rgba(248, 248, 248, 1)",
            px: matchesm ? 15 : 5,
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
