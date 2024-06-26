import { Alert, AlertTitle } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { Loader } from "../components/loader";
import { Context } from "../context";
import { PathConstants } from "../routes";
import { instance } from "../routes/url-config";
import { URL } from "../routes/url-config";

export function Auth() {
  const [isError, setIsError] = useState(false);
  const [loading, setloading] = useState(false);
  const { token, setToken } = useContext(Context);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setloading(true);
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const json = JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      });

      const res = await instance.post(URL.AUTH, json);
      setloading(false);

      if (res.data.error_code !== 0) {
        setIsError(true);
      } else {
        setToken(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
      }
    } catch (e) {
      throw new Error(`Something wrong when try fetching, ${e}`);
    }
  };

  if (token) {
    return <Navigate to={PathConstants.TABLE} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login Form
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="username"
                autoComplete="username"
                defaultValue="username13"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
          {isError && (
            <Alert severity="warning">
              <AlertTitle sx={{ width: "300px" }}>Warning</AlertTitle>
              Wrong username or password. Try again.
            </Alert>
          )}

          <Typography variant="body2" color="text.secondary" align="center">
            <Link color="inherit" href="#">
              Gingerbread
            </Link>
          </Typography>
        </>
      )}
    </Container>
  );
}
