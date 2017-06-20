import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = /* GraphQL */ `
  type Channel {
    id: ID!
    name: String
    messages: [Message]!
  }

  input MessageInput{
    channelId: ID!
    text: String
  }

  type Message {
    id: ID!
    text: String
  }

  type Query {
    channels: [Channel]
    channel(id: ID!): Channel
  }

  type Mutation {
    addChannel(name: String!): Channel
    addMessage(message: MessageInput!): Message
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema }
