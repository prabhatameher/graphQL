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
    }
}

module.exports = { resolvers }