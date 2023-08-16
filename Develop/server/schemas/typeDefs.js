const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]!
    description: String
    title: String
    image: String
    link: string
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: Array!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(bookId: ID!): User
  }
`;

module.exports = typeDefs;
