export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.id} {book.title} - {book.author} - {book.price}
        </li>
      ))}
    </ul>
  );
};
