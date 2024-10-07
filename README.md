# Book Search Application

This is a simple React application for searching books using the Open Library Search API. The app allows users to search for books, view details such as author name, book title, edition count, and first publishing year. The search results are displayed with pagination, and only authenticated users can access the search page.

## Features

- **Search Field**: Users can search for books using the Open Library API.
- **Live Search**: The search is performed as the user types, with a debounce to avoid overwhelming the server.
- **Results Table**: Displays author name, book title, edition count, and first publishing year.
- **Pagination**: Allows users to browse through the search results.
- **Authentication**: Users must log in to access the search page.
- **Average Search Duration**: Displays the average duration of API calls for searches.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Material UI**: For UI components and styling.
- **Axios**: For making HTTP requests to the Open Library API.
- **React Router**: For routing between pages.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NikitaPletnev/book-search-app.git
   cd book-search-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open a browser and navigate to `http://localhost:3000`.

## Usage

1. **Login**: Navigate to the login page and enter a username and password to log in.
2. **Search for Books**: After logging in, use the search field to search for books. Results will be displayed in a table with pagination.
3. **Logout**: Click the logout button in the header to log out.

## Project Structure

- **src/components**: Contains reusable components such as `Header` and `BookTable`.
- **src/contexts**: Contains `AuthContext` for managing authentication state.
- **src/pages**: Contains main pages like `LoginPage` and `SearchPage`.
- **src/App.tsx**: Main entry point for routing.

## Authentication

This app uses a simple client-side mock for authentication. The `AuthContext` is used to manage the user's logged-in state. If the user is not authenticated, they will be redirected to the login page.

## API Integration

The app uses the Open Library Search API (`https://openlibrary.org/search.json?q={searchTerm}`) to fetch book information based on the user's query.

## Contact

For any questions or suggestions, feel free to open an issue or submit a pull request.

