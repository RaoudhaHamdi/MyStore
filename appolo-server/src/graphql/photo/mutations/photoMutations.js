import { gql } from 'apollo-server';

export const photoMutations = gql`
createPhoto(input: PhotoInput): PhotoRegistred
updatePhoto(id: ID!,input: PhotoInput): PhotoRegistred
deletePhoto(id: ID!): PhotoRegistred
`;

export const Resolvers = {
  createPhoto: async (_, { input }, { models }) => {
    const photo = new models.Photo({ ...input });
    await photo.save();
    return {
      photo,
    };
  },
  updatePhoto: async (_, { input, id }, { models }) => {
    const photo = await models.Photo.findById({ _id: id });
    photo.url = input.url;
    photo.title = input.title;
    await photo.save();
    return {
      photo,
    };
  },
  deletePhoto: async (_, { id }, { models }) => {
    const photo = await models.Photo.deleteOne({ _id: id });

    return { photo };
  },
};
