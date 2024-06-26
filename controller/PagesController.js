const HomePage = (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error)
    }
}

const CategoryPage = (req, res) => {
    try {
        res.render('category')
    } catch (error) {
        console.log(error)
    }
}

const SinglePage = (req, res) => {
    try {
        res.render('single')
    } catch (error) {
        console.log(error)
    }
}

const SearchPage = (req, res) => {
    try {
        res.render('search')
    } catch (error) {
        console.log(error)
    }
}

const AuthorPage = (req, res) => {
    try {
        res.render('author')
    } catch (error) {
        console.log(error)
    }
}



export { HomePage, CategoryPage, SinglePage, SearchPage,AuthorPage }
