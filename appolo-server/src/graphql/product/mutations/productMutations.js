import { gql } from 'apollo-server'

export const productMutations = gql`
createProduct(input: ProductInput): ProductRegistred
updateProduct(id: ID!,input: ProductInput): ProductRegistred
deleteProduct(id: ID!): ProductRegistred`;

export const Resolvers = {
  createProduct: async (_, { input }, { models }) => {
    const product = new models.Product({ ...input });
    await product.save();
    return {
      product
    }
  },
  updateProduct: async (_, { input, id }, { models }) => {
    const product = await models.Product.findById({ _id: id })
    product.designation = input.designation
    product.price = input.price
    product.category = input.category
    product.image = input.image
    product.rate = input.rate
    product.description = input.description
   
    await product.save()
    return {
      product
    }
  },
  deleteProduct: async (_, { id }, { models }) => {
    const product = await models.Product.deleteOne({ _id: id })

    return { product }
  }
}
