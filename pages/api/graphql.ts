import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String
    username: String
  }
`;

const users = [{ name: 'Foo Bar', username: 'foobar' }];

const resolvers = {
  Query: {
    users() {
      return users;
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
});

export default startServerAndCreateNextHandler(server);
