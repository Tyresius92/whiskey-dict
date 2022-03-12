import { gql } from 'apollo-server';

export const DistilleryType = gql`
  type Distillery {
    id: Int!
    name: String!
  }

  extend type Query {
    distilleries: [Distillery]
  }

  extend type Whiskey {
    distillery: Distillery
  }
`;

export const DistilleryResolvers = {
  Query: {
    distilleries: (_, __, context) =>
      context.distilleryService.getDistilleries(),
  },

  Whiskey: {
    distillery: (whiskey, _, context) =>
      context.distilleryService.getDistilleryById(whiskey.distillery_id),
  },
};
