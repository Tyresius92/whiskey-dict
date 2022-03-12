import { gql } from 'apollo-server';

export const BottlerType = gql`
  type Bottler {
    id: Int!
    name: String!
  }

  extend type Query {
    bottlers: [Bottler]
  }

  extend type Whiskey {
    bottler: Bottler
  }
`;

export const BottlerResolvers = {
  Query: {
    bottlers: (_, __, context) => context.bottlerService.getBottlers(),
  },

  Whiskey: {
    bottler: (whiskey, _, context) =>
      context.bottlerService.getBottlerById(whiskey.bottler_id),
  },
};
