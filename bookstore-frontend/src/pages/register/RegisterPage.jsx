import { Box, Typography, Paper } from "@mui/material";
import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <RegisterForm />
    </Box>
  );
};
