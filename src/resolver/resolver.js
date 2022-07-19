import { books, authors } from "../data/static.js";
import { AuthorSchema } from "../models/Author.js";
import { BookSchema } from "../models/Book.js";
export const resolvers = {
  //Query
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book?.id == args?.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, args) => {
      //khong co arg vi khong co dang author(id: ID!): Author
      return authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },
  //Mutation
  Mutation: {
    createAuthor: (parent, args) => {
      const newAuthor = new AuthorSchema({
        args
      })
    },
    createBook: (parent, args) => args,
  },
};
