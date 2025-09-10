import { useState } from "react";
import { Route, Routes } from "react-router";
import { BooksPage } from "./pages/books/BooksPage";
import { LoginPage } from "./pages/login/LoginPage";
import { AdminPage } from "./pages/admin/AdminPage";
import { Navbar } from "./layout/Navbar";
import { RegisterPage } from "./pages/register/RegisterPage";

export const BookstoreFrontApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar onSearchChange={setSearchTerm} />
      <Routes>
        <Route path="/books" element={<BooksPage searchTerm={searchTerm} />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/registerUser" element={<RegisterPage/>} />
      </Routes>
    </>
  );
};
