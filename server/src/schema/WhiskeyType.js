import { gql } from 'apollo-server';

export const WhiskeyType = gql`
  extend type Query {
    whiskies: [Whiskey]
  }

  type Whiskey {
    id: Int!
    name: String
    age: String
    type: String
    alcoholByVolume: Float
  }
`;

export const WhiskeyResolvers = {
  Query: {
    whiskies: (_, __, context) => {
      return context.whiskeyService.getWhiskies();
    },
  },

  Whiskey: {
    type: async (whiskey, _, context) => {
      const response = await context.whiskeyTypeService.getWhiskeyTypeById(
        whiskey.type_id
      );

      return response.type;
    },
    alcoholByVolume: whiskey => {
      return whiskey.alcohol_by_volume;
    },
  },
};
