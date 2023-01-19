import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {format} from "timeago.js"
import './_ListHomeLeft.scss'
import Option from '../../components/OptionAdmin/Option';
const ListHomeLeft = () => {

  const [data, setData] = useState([])

  const [productImage, setProductImage] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [contents, setContents] = useState("")

  const handleImage = (e) =>{
      const file = e.target.files[0]
      TranformFile(file)
  }
  const TranformFile = (file) =>{
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
      reader.onloadend = () =>{
        setProductImage(reader.result)
      }
    }else{
      setProductImage("")
    }
  }
  const handleClick = (e) =>{
    e.preventDefault()

    axios.post("http://localhost:5000/api/events/postevent", {
      title:title,
      desc:desc,
      image: productImage
    })
  }

  useEffect(()=>{
    axios.get("http://localhost:5000/api/events/getevent")
      .then((res)=>{
          setData(res.data)
       })
 },[])

 const handleDelete = (id) =>{
    axios.delete(`http://localhost:5000/api/events/deleteevent/${id}`)
    window.location.reload()
 }
  return (
    <>
    <Option/>
    <h1>Dữ Liệu Từ Bản Sự Kiện</h1>
    <div className=" flex flex-col w-32 space-y-6  justify-center ">
      <form onSubmit={handleClick}>
        <input 
          type="file" 
          accept="image/"
          onChange={handleImage}
          required
          className="bg-gray-600" />
        <input 
          type="text"  
          required
          onChange={e => setTitle(e.target.value)}
          className="bg-gray-600" placeholder="Title:"/>
        <input 
          type="text"  
          required
          onChange={e => setDesc(e.target.value)}
          className="bg-gray-600" placeholder="Desc:"/>
        <input 
          type="text"  
          required
          onChange={e => setContents(e.target.value)}
          className="bg-gray-600" placeholder="Contents"/>
          <button type="submit" className='border border-red-900 p-2'>SAVE</button>
      </form>
    </div>
    <br />
    <br />
    { 
      data.map((list,key) => {
      return (
        <div key={key} className="border border-2 py-2 mb-2">
          <div className="flex space-x-2">
              <div> <img src={list.image.url} alt="" className='w-32'/> </div>
              <div>
                <div className='text-red-600'>Time: {format(list.createdAt)}</div> 
                <div className='text-red-600'>Title: {list.title}</div> 
                <div className='text-gray-900'>Desc: {list.desc} </div>
                Contents: {list.contents}
              </div>
              <div><button onClick={()=>handleDelete(list._id)}>Delete</button></div>
          </div>
        </div>
      
      )
    })
    }
    </>
    

  );
}

export default ListHomeLeft;
