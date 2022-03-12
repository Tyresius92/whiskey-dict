import { merge } from 'lodash';

import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { BottlerType, BottlerResolvers } from './BottlerType.js';
import { DistilleryType, DistilleryResolvers } from './DistilleryType';
import { WhiskeyType, WhiskeyResolvers } from './WhiskeyType';

export const typeDefs = [
  RootQueryType,
  BottlerType,
  DistilleryType,
  WhiskeyType,
];

export const resolvers = merge(
  RootQueryResolvers,
  BottlerResolvers,
  DistilleryResolvers,
  WhiskeyResolvers
);
