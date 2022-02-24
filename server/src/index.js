import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import bottlerService from './services/bottlerService';
import distilleryService from './services/distilleryService';
import whiskeyService from './services/whiskeyService';
import whiskeyTypeService from './services/whiskeyTypeService';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    bottlerService,
    distilleryService,
    whiskeyService,
    whiskeyTypeService,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
