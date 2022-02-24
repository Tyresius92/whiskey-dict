import { merge } from 'lodash';

import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { ExampleQueryType, ExampleQueryResolvers } from './ExampleType.js';
import { BottlerType, BottlerResolvers } from './BottlerType.js';
import { DistilleryType, DistilleryResolvers } from './DistilleryType';
import { WhiskeyType, WhiskeyResolvers } from './WhiskeyType';

export const typeDefs = [
  RootQueryType,
  ExampleQueryType,
  BottlerType,
  DistilleryType,
  WhiskeyType,
];

export const resolvers = merge(
  RootQueryResolvers,
  ExampleQueryResolvers,
  BottlerResolvers,
  DistilleryResolvers,
  WhiskeyResolvers
);
