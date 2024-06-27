import express from "express"
import { HomePage, CategoryPage, SinglePage, SearchPage, AuthorPage } from "../controller/PagesController.js"
import { AdminHomePage, PostPage, AddCategoryPage, AddPostPage, AddUserPage, AdminCategoryPage, UpdateCategoryPage, UpdatePostPage, UpdateUserPage, UserPage } from "../controller/AdminPagesController.js"


//================Initialize Express ==============

const router = express.Router()

//================Routes=============================

//============Pages===================

router.get('/', HomePage)
router.get('/category', CategoryPage)
router.get('/single', SinglePage)
router.get('/search', SearchPage)
router.get('/author', AuthorPage)

//==============Admin Pages==============

router.get('/admin', AdminHomePage)

router.get('/admin/post', PostPage)
router.get('/admin/category', AdminCategoryPage)
router.get('/admin/users', UserPage)

router.get('/admin/add-post', AddPostPage)
router.get('/admin/add-category', AddCategoryPage)
router.get('/admin/add-user', AddUserPage)

router.get('/admin/update-post', UpdatePostPage)
router.get('/admin/delete-post', PostPage)

router.get('/admin/update-category', UpdateCategoryPage)
router.get('/admin/delete-category', AdminCategoryPage)

router.get('/admin/update-user', UpdateUserPage)
router.get('/admin/delete-user', UserPage)

//==============Not Found Pages===========

router.all('*', (req, res) => {
    res.send('Page Not Found..')
})

export default router