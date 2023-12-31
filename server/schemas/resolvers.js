// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
// import authentication error
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password').populate("book");
                return userData;
            }
            throw new AuthenticationError("Not logged in");
        },
        users: async () => {
            return User.find().select("-__v -password").populate("book");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select("-__v -password")
                .populate("book");
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { newBook }, context) => {
            console.log(context.user);
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: newBook }},
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in");
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const book = await User.findbyIdAndUpdate(
                    { _id: context.user._id},
                    { $pull: { savedBooks: args } },
                    { new: true }
                );
                return book;
            }
            throw new AuthenticationError("You need to be logged in");
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true } 
                );
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in")
        },
    },
};

module.exports = resolvers;

