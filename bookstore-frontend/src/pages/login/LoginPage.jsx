import { useState } from "react";
import { Modal, Box, Fade } from "@mui/material";
import { LoginForm } from "../../components/LoginForm";


export const LoginPage = () => {
  const [open, setOpen] = useState(true); // true para mostrar modal al cargar

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        style: { backgroundColor: 'rgba(0,0,0,0.8)' } 
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            minWidth: 300,
          }}
        >
          <LoginForm />
        </Box>
      </Fade>
    </Modal>
  );
};
