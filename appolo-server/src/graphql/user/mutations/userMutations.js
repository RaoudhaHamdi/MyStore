import { gql } from 'apollo-server';
import bcrypt from 'bcrypt';

export const userMutations = gql`
createUser(input: UserInput): UserLogged
login(input: LoginInput): UserLogged
updateUser(id: ID!,input: UserInput): UserLogged
deleteUser(id: ID!): UserLogged
`;
export const Resolvers = {
  createUser: async (_, { input }, { models }) => {
    const passwordHash = bcrypt.hashSync(input.password, 10);
    const user = new models.User({ ...input, password: passwordHash });
    await user.save();
    return {
      user,
    };
  },
  login: async (_, { input }, { models }) => {
    const user = await models.User.findOne({ email: input.email });
    if (!user) {
      throw new Error('wrong email');
    }
    if (!bcrypt.compareSync(input.password, user.password)) {
      throw new Error('Wrong password');
    }
    return {
      user,
    };
  },
  updateUser: async (_, { input, id }, { models }) => {
    const user = await models.User.findById({ _id: id });
    user.username = input.username;
    user.email = input.email;
    await user.save();
    return {
      user,
    };
  },
  deleteUser: async (_, { id }, { models }) => {
    const user = await models.User.deleteOne({ _id: id });

    return { user };
  },
};
