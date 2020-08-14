const { Router } = require('express')
const router = Router()
const {getPosts,createPosts,deletePost} = require('../controllers/post.controller')

router.get('/posts', getPosts)
router.post('/post', createPosts)
router.delete('/post',deletePost)


module.exports = router