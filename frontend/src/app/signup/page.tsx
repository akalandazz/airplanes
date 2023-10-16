"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FormLabel from "@mui/material/FormLabel";
import Copyright from "../components/copyright";

const SignUp = () => {
  const [userType, setUserType] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const passwordRepeat = data.get("passwordRepeat");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!firstName) {
      newErrors.firstName = "Name is required";
    }
    if (!lastName) {
      newErrors.lastName = "Surname is required";
    }
    if (!email) {
      newErrors.email = "email is required";
    }
    if (!password) {
      newErrors.password = "password is required";
    }
    if (!passwordRepeat) {
      newErrors.passwordRepeat = "passwordRepeat is required";
    }

    if (!userType) {
      newErrors.userType = "Select your profession";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./login/signup.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  name="firstName"
                  autoComplete="name"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Surname"
                  name="lastName"
                  autoComplete="surname"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="passwordRepeat"
                  label="Repeat Password"
                  type="password"
                  id="passwordRepeat"
                  error={!!errors.passwordRepeat}
                  helperText={errors.passwordRepeat}
                />
              </Grid>
              <Grid item xs={12}>
                {!!errors.userType ? (
                  <FormLabel sx={{ color: "red" }}> Select User type</FormLabel>
                ) : (
                  <FormLabel>User type</FormLabel>
                )}

                <ToggleButtonGroup
                  orientation="horizontal"
                  value={userType}
                  exclusive
                  onChange={(event, value) => {
                    setUserType(value);
                  }}
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  <ToggleButton value="mechanic" aria-label="mechanic">
                    <EngineeringIcon sx={{ mr: 1 }} />
                    Mechanic
                  </ToggleButton>
                  <ToggleButton value="pilot" aria-label="pilot">
                    <EngineeringIcon sx={{ mr: 1 }} />
                    Pilot
                  </ToggleButton>
                  <ToggleButton value="aviator" aria-label="aviator">
                    <EngineeringIcon sx={{ mr: 1 }} />
                    Aviator
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  back to main
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  Login
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
