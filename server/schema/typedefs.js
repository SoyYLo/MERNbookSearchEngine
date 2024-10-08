const typeDefs = `
type Book{
  authors:[String]
  description:String
  bookId: ID!
  image: String
  link: String
  title: String
}

type User{
_id:ID!
username: String
email: String
password: String
savedBooks: [Book]
bookCount: Int
}

type Auth{
user:User
token:ID!
}

type Query{
me:User
}

input BookInput{
 authors:[String]
  description:String
  bookId: String!
  image: String
  link: String
  title: String
}

type Mutation{
signup(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
saveBook(newBook: BookInput):User
removeBook(bookId: ID!): User
}

`

module.exports = typeDefs;