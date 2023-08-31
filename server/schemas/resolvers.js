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
            throw new AuthenticationError("Not logged in")
        },
        users: async () => {
            return User.find(). select("-__v -password").populate("book");
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

            return { token, user }
        }
    }
}

