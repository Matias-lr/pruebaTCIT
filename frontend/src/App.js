import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {initPost,addPost,seatchPost, deletePost} from './redux/actions'
import Post from './post'
import axios from 'axios';
import Input from './components/InpuText'
import './app.css'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.post)

  useEffect(async()=>{
    const result =await axios('http://localhost:5000/posts',)
    dispatch(initPost(result.data))
  },[])

  const handleSubmit = async(event) =>{
    event.preventDefault()
    await axios.post('http://localhost:5000/post',{name:event.target.nombre.value,description:event.target.descripcion.value})
    .then(response => {
      alert(response.data.message)
      dispatch(addPost({id:response.data.post.id,name:response.data.post.name,description:response.data.post.description}))
    })
  }

  const handleSearch = (event)=>{
    dispatch(seatchPost(event.target.value))
    console.log(event.target.value)
  }

  const handleDelete = async(event) => {
    event.preventDefault()
    var c = window.confirm('estas seguro que quieres eliminar este post?')
    if(c){
      const id = event.target.id
      await axios.delete('http://localhost:5000/post',{data:{id}})
      .then(response=>{
        alert(response.data.message)
        dispatch(deletePost(id))
        document.getElementById('search').value = ''
      })
    }
  }
  return (
    <div className="App col-lg-12">
      <div className="headerApp">
        <h1>Post App TCIT</h1>
      </div>
      <div className="bodyApp">
        <div className="InsertForm">
          <form onSubmit={handleSubmit}>
            <div className="row col-lg-12">
              <div className="col-lg-4">
                <Input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre del post"/>
              </div>
              <div className="col-lg-4">
                <Input type="text" id="descripcion" name="descripcion" placeholder="Ingrese la descripcion del post"/>
              </div>
              <div className="buttonDetails">
                <input type="submit" className="btn-success" value="Crear Post"></input>
              </div>
            </div>
          </form>
        </div>
        <div className="tableContainer row col-lg-12">
          <table className="Table">
            <tr>
              <th>nombre</th>
              <th>descripcion</th>
              <th>acciones</th>
            </tr>
          {state.post && state.post.map(result => <Post
          id={result.id}
          name={result.name}
          description={result.description}
          handleDelete={handleDelete}/>)}
          </table>
        </div>
        <div className="search">
          <Input type="text" id="search" className="col-lg-6" name="search" placeholder="Que buscas?" onChange={handleSearch}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
