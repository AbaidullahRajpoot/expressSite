const AdminHomePage = (req, res) => {
    try {
        res.render('admin/index')
    } catch (error) {
        console.log(error)
    }
}

const PostPage = (req, res) => {
    try {
        res.render('admin/post')
    } catch (error) {
        console.log(error)
    }
}

const AddCategoryPage = (req, res) => {
    try {
        res.render('admin/add-category')
    } catch (error) {
        console.log(error)
    }
}

const AddPostPage = (req, res) => {
    try {
        res.render('admin/add-post')
    } catch (error) {
        console.log(error)
    }
}

const AddUserPage = (req, res) => {
    try {
        res.render('admin/add-user')
    } catch (error) {
        console.log(error)
    }
}

const AdminCategoryPage = (req, res) => {
    try {
        res.render('admin/category')
    } catch (error) {
        console.log(error)
    }
}

const UpdateCategoryPage = (req, res) => {
    try {
        res.render('admin/update-category')
    } catch (error) {
        console.log(error)
    }
}

const UpdatePostPage = (req, res) => {
    try {
        res.render('admin/update-post')
    } catch (error) {
        console.log(error)
    }
}

const UpdateUserPage = (req, res) => {
    try {
        res.render('admin/update-user')
    } catch (error) {
        console.log(error)
    }
}

const UserPage = (req, res) => {
    try {
        res.render('admin/users')
    } catch (error) {
        console.log(error)
    }
}



export { AdminHomePage, PostPage, AddCategoryPage, AddPostPage, AddUserPage, AdminCategoryPage, UpdateCategoryPage, UpdatePostPage, UpdateUserPage, UserPage }
