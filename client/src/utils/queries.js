import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savdBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;