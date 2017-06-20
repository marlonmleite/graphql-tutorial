export const typeDefs = /* GraphQL */ `

  type Channel {
    id: ID!
    name: String
  }

  type Query {
    channels: [Channel]
  }
`
