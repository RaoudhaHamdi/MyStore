import { gql } from 'apollo-server';

const product = gql`

input ProductInput {
  designation: String!
  price: String!
  category: String!
  image: String!
  rate: Int!
  description: String!
}

type Product {
    id: ID!
    designation: String!
    price: String!
    category: String!
    image: String!
    rate: Int!
    description: String!
}
type ProductRegistred {
    product: Product!
}
`;
export default [product];
