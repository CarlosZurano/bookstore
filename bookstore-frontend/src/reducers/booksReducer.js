export const booksReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKS":
                return {
                    ...state,
                    allBooks: action.payload,
                    filteredBooks: action.payload
                };

        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        
        case "SET_SEARCH":
            const searchTerm = action.payload.toLowerCase();
            return {
                ...state,
                filteredBooks: state.allBooks.filter(
                    (book) =>
                        book.title.toLowerCase().includes(searchTerm)
                    ||
                        book.author.toLowerCase().includes(searchTerm)
                ),
            };
        default:
            return state;
    }
}