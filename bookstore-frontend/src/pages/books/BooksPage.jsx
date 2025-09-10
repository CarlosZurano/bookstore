import { useEffect, useReducer } from "react";
import { booksReducer } from "../../reducers/booksReducer";
import { api } from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { BookList } from "../../components/BookList";

const initialState = { allBooks: [], filteredBooks: [], loading: true };

export const BooksPage = ({ searchTerm }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Traer libros de la API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books");
        dispatch({ type: "SET_BOOKS", payload: res.data });
      } catch (err) {
        console.error(err);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    fetchBooks();
  }, []);

  // Aplicar filtro cuando searchTerm cambie
  useEffect(() => {
    dispatch({ type: "SET_SEARCH", payload: searchTerm });
  }, [searchTerm]);

  if (state.loading) {
    // Spinner centrado
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <h1>Lista de libros</h1>
      <BookList books={state.filteredBooks} />
    </div>
  );
};
