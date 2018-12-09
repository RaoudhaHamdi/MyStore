import { gql } from 'apollo-server';

const user = gql`

input UserInput {
    username: String!
    email: String!
    password: String!
}

type User {
    id: ID!
    username: String
    email: String
    password: String
}

input LoginInput {
    email: String!
    password: String!
}

type UserLogged {
    user: User!
}
`;
export default [user];
