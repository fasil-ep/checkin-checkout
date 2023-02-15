import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const initialRef: any = null;

  const email = React.useRef(initialRef);
  const password = React.useRef(initialRef);

  // console.log(email.current.value, "email");

  // const getEmail = localStorage.getItem("emailData");
  // const getPassword = localStorage.getItem("passwordData");

  // console.log(getEmail, "getEmail");

  const loginemail = "checkin@gmail.com";
  const loginpassword = "12345";

  const handleSubmit = () => {
    if (
      email.current?.value == "abc@gmail.com" &&
      password.current?.value == "12345"
    ) {
      localStorage.setItem("emailData", loginemail);
      localStorage.setItem("passwordData", loginpassword);
    }
  };
  return (
    <Stack direction={"row"} justifyContent={"center"} pt={10}>
      <Box
        minWidth={400}
        sx={{ border: "1px solid #037DC3", p: 3, borderRadius: "4px" }}
      >
        <form onSubmit={handleSubmit}>
          <Stack sx={{ mb: 1 }}>
            <Typography
              sx={{
                fontSize: "22px",
                textAlign: "center",
                color: "#037DC3",
                fontWeight: "700",
              }}
            >
              Login
            </Typography>
          </Stack>
          <Stack pt={2} pb={1}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontWeight: "500", color: "#222222", pb: 1 }}
            >
              Email
            </InputLabel>
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              ref={email}
            />
          </Stack>
          <Stack pt={2} pb={1}>
            <InputLabel sx={{ fontWeight: "500", color: "#222222", pb: 1 }}>
              Password
            </InputLabel>
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              ref={password}
            />
          </Stack>

          <Stack pt={1} pb={1}>
            <Typography sx={{ color: "#037DC3", cursor: "pointer" }}>
              forgot password?
            </Typography>
          </Stack>
          <Stack>
            <Button type="submit" fullWidth variant="contained">
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
