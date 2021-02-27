import { gql } from "@apollo/client";

export const QUERIES = {
  getBooksQuery: gql`
    {
      books {
        name
        genre
        id
        author {
          name
          age
          id
          books {
            name
            genre
          }
        }
      }
    }
  `,
  getAuthorsQuery: gql`
    {
      authors {
        name
        age
        id
      }
    }
  `,
  addBookQuery: gql`
    mutation addBookHandler($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        genre
      }
    }
  `,
  deleteBookQuery: gql`
    mutation deleteBookHandler($id: ID!) {
      deleteBook(id: $id) {
        name
      }
    }
  `,
};
