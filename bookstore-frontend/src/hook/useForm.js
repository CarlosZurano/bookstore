import { useState } from "react";
import Swal from "sweetalert2";

export const useForm = ({ initialValues = {}, validations = {} }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(initialValues);

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();

    // Validaciones básicas
    for (const field in validations) {
      const value = formData[field];
      const rules = validations[field];

      if (rules.required && !value) {
        Swal.fire("Error", `${field} es obligatorio`, "error");
        return;
      }

      if (rules.minLength && value.length < rules.minLength) {
        Swal.fire(
          "Error",
          `${field} debe tener al menos ${rules.minLength} caracteres`,
          "error"
        );
        return;
      }

      if (rules.email && !/\S+@\S+\.\S+/.test(value)) {
        Swal.fire("Error", "El email no es válido", "error");
        return;
      }
    }

    // Si pasa las validaciones, ejecutar callback
    onSubmit(formData);
  };

  return {
    formData,
    
    handleChange,
    resetForm,
    handleSubmit,
  };
};
