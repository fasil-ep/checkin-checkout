import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, seMessage] = React.useState(false);

  console.log(email, "email");
  console.log(password, "pass");

  const router = useRouter();

  const submitButton = (event: any) => {
    event?.preventDefault();
    if (email === "checkin@gmail.com" && password === "12345") {
      localStorage.setItem("emailData", "checkin@gmail.com");
      localStorage.setItem("passwordData", "12345");
      router.push("/dashboard");
    } else {
      seMessage(true);
    }
  };

  return (
    <Stack direction={"row"} justifyContent={"center"} pt={10}>
      <Box
        minWidth={400}
        sx={{ border: "1px solid #037DC3", p: 3, borderRadius: "4px" }}
      >
        <form onSubmit={submitButton}>
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
              onChange={(e: any) => setEmail(e.target.value)}
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
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Stack>
          {message && (
            <Typography sx={{ color: "red" }}>
              Your crydentials are incorrect
            </Typography>
          )}

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
