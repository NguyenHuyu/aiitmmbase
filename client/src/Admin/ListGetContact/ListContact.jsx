import React ,{ useEffect, useState}  from 'react';
import axios from 'axios';
import './_ListContact.scss'
import Option from '../../components/OptionAdmin/Option';
const ListContact = () => {
  const [lists, setLists] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/contacts/getform")
      .then((response)=>{
        setLists(response.data)
    })
  },[])

  const handleDelted = (id) =>{
    axios.delete(`http://localhost:5000/api/contacts/deleteform/${id}`)
    window.location.reload()
  }

  return (
    <div> 
      <Option/>
      <h1 className='text-4xl flex justify-center'>Dữ liệu từ bản Liên Hệ</h1>
        { 
        lists.map((list ,key) => {
          return (
            <div key={key} className="border order-red-800 flex justify-between items-center px-2">
              <div className='py-4'>
                  <h2 className='text-2xl'>{list.name}</h2>
                  <p>{list.email}</p>
                  <p>{list.phone}</p>
                  <p>{list.contents}</p>
              </div> 
              <button className='border border-red-700 h-full p-2'
                      onClick={()=>handleDelted(list._id)} >Xóa</button>
            </div>
          )
        })
        }
    </div>
  );
}

export default ListContact;
