const db = require('../database')

const getPosts = async (req,res) =>{
    db.query('select * from post')
    .then(response => {
        console.log(response.rows)
        res.status(200).json(response.rows)
    })
    .catch(error => {
        res.json(error.code)
    })
}
const createPosts = async (req,res) =>{
    const {name,description} = req.body
    db.query('INSERT INTO post (name,description) VALUES ($1,$2) RETURNING *,id',[name,description])
    .then(response =>{
        res.status(200).json({
            message: 'Post creado correctamente',
            post:{
                id:response.rows[0].id,
                name,
                description
            }
        })
    })
    .catch(error =>res.status(400).send('error'))
}
const deletePost = async (req,res) =>{
    const id = req.body.id
    db.query('DELETE FROM post WHERE id =$1',[id])
    .then(response =>{
        console.log(id)
        res.status(200).json({
            message:'Post eliminado con exito'
        })
    })

}

module.exports = {
    getPosts,
    createPosts,
    deletePost
}