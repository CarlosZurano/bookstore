import { useState } from "react";

export const SearchBar = ({ searchTerm = "", onSearchChange }) => {
  
    const [value, setValue] = useState(searchTerm);

    const handleChange = (e) => {
        const term =  e.target.value;
        setValue(term);
        onSearchChange(term) //llama al reducer con el nuevo termino
    }

    return (
        <input type="text" 
        placeholder="Buscar libros por titulo o autor"
        value={value}
        onChange={handleChange}/>
    )
};
