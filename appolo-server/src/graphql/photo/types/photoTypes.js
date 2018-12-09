import { gql } from 'apollo-server';

const photo = gql`

input PhotoInput {
    url: String!
    title: String!
}

type Photo {
    id: ID!
    url: String
    title: String
}
type PhotoRegistred {
    photo: Photo!
}
`;
export default [photo];
