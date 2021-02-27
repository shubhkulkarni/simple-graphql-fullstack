const graphql = require("graphql");
const _ = require("lodash");
const Author = require("../models/author");
const Book = require("../models/book");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// const books = [
//   {
//     name: "Wings of fire",
//     genre: "insprational",
//     id: "1",
//     authorId: "11",
//   },
//]
// const authors = [
//   { name: "APJ Abdul Kalam", age: 70, id: "11" },
//   { name: "PK Atre", age: 55, id: "12" },
//   { name: "VS Khandekar", age: 60, id: "13" },
// ];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent._id });
        // return _.filter(books, { authorId: parent.id }); //whenever you have  { } in query, you will require resolve function  ex. book(id:1){  author{ name}}
      },
    },
  }),
});
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
        //here parent will be the book object found by the query, so we can access book properties like parent.name etc.
        // return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
        //database calls will go here      the main function of the resolve function is to to implement the query
        // return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //the args object is the args (arguments we provided in the query)
        return Author.findById(args.id);
      },
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
        // return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
        // return authors;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return Author.create(args);
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Book.create(args);
      },
    },
    deleteBook:{
      type:BookType,
      args:{
        id:{type:new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent,args){
        return Book.findByIdAndDelete(args.id)
      }
    }
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
