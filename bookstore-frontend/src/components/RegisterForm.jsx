import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "../hook/useForm";
import Swal from "sweetalert2";
import { api } from "../api/api";

export const RegisterForm = ({ onSubmit }) => {
  // Configuración del hook con validaciones
  const { formData, handleChange, resetForm, handleSubmit } = useForm({
    initialValues: { username: "", email: "", password: "" },
    validations: {
      username: { required: true },
      email: { required: true, email: true },
      password: { required: true, minLength: 6 },
    },
  });

  // Función a pasar al hook para ejecutar el registro si todo está bien
  
const onRegister = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    // Registro exitoso
    Swal.fire("¡Éxito!", "Registro completado correctamente", "success");
    if (onSubmit) onSubmit(response.data);
    resetForm();
  } catch (error) {
    // Manejo de errores
    console.error(error);
    Swal.fire(
      "Error",
      error.response?.data?.message || "Ocurrió un error al registrar el usuario",
      "error"
    );
  }
};

  return (
    <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400, margin: "auto", mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Registro
      </Typography>
      <form onSubmit={(e) => handleSubmit(e, onRegister)}>
        <TextField
          fullWidth
          label="Nombre de usuario"
          margin="normal"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
          Registrarse
        </Button>
      </form>
    </Paper>
  );
};
