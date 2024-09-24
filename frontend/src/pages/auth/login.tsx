import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import { loginAPI } from "../../service/auth";
import Swal from "sweetalert2";
import Link from "next/link"; // Import Link

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit = (data: LoginFormData) => {
    const reqData = {
      email: data.email,
      password: data.password,
    };


    console.log("User logged in:", reqData);

    loginAPI(reqData, (res: any) => {
      console.log("res", res);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Sign in successfully",
        });
        const { token, user } = res.data;
        // Store token in localStorage or context
        localStorage.setItem('token', token);
        localStorage.setItem('role', user.role);
        router.push('/dashboard');
      } else {
        console.log(res.data.error)
        Swal.fire({
          icon: "error",
          title: res?.data?.error || "Login failed",
        });
      }
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, width: "100%", borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login"
            style={{ width: "100%", maxWidth: "300px", marginBottom: "16px" }}
          />
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link href="/auth/signup" passHref>
                  <Typography component="a" sx={{ color: "primary.main", cursor: "pointer" }}>
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
