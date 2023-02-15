import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CheckInForm = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} pt={2}>
      <Box
        minWidth={500}
        sx={{ border: "1px solid #037DC3", p: 3, borderRadius: "4px" }}
      >
        <Stack sx={{ mb: 1 }}>
          <Typography
            sx={{
              fontSize: "22px",
              textAlign: "center",
              color: "#037DC3",
              fontWeight: "700",
            }}
          >
            Check IN Form
          </Typography>
        </Stack>
        <Stack pt={2} pb={1}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontWeight: "500", color: "#222222", pb: 1 }}
          >
            First Name
          </InputLabel>
          <TextField name="first_name" placeholder="First Name" />
        </Stack>
        <Stack pt={2} pb={4}>
          <InputLabel sx={{ fontWeight: "500", color: "#222222", pb: 1 }}>
            Last Name
          </InputLabel>
          <TextField name="last_name" placeholder="Last Name" />
        </Stack>

        <Stack pt={2} pb={4}>
          <InputLabel sx={{ fontWeight: "500", color: "#222222", pb: 1 }}>
            Age
          </InputLabel>
          <TextField name="Age" placeholder="Age" />
        </Stack>
        <Stack pt={2} pb={4}>
          <InputLabel sx={{ fontWeight: "500", color: "#222222", pb: 1 }}>
            Date & Time
          </InputLabel>
          <Stack direction={"row"} gap={2}>
            <TextField name="state" type="date" placeholder="State" />
            <TextField name="state" type="time" placeholder="State" />
          </Stack>
        </Stack>
        <Stack>
          <Button fullWidth variant="contained">
            Check IN
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CheckInForm;
