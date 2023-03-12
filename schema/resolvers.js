const { UserList, MovieList } = require("../FakeData")

// console.log(UserList.filter(user => user.id === 1)[0])

const resolvers = {
    Query: {
        msg: () => {
            return "Hello GraphQl";
        },
        users: () => {
            return UserList
        },
        user: (_, args) => {
            const id = args.id
            let userData = UserList.filter(user => user.id == id)[0]
            console.log(userData)
            return userData
        },
        movies: () => {
            return MovieList
        },
        getMovie: (_, args) => {
            const year = args.release
            let movie = MovieList.filter(mov => mov.release >= year)
            console.log(movie)
            return movie
        },

    },
    User: {
        favouriteMovie: () => {
            let movies = MovieList.filter(mov => mov.release <= 2000)
            return movies
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            console.log(user)
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, username } = args.input
            let userUpdate;
            UserList.forEach((user) => {
                if (user.id == Number(id)) {
                    user.username = username;
                    userUpdate = user
                }
            })
            console.log(userUpdate)
            return userUpdate
        },

        deleteUser: (parent, args) => {
            const id = args.id
            console.log(args.id)
            let users;
            users = UserList.filter((user) => user.id !== Number(id))
            // console.log(users)
            return users
        }

    }
}

module.exports = { resolvers }