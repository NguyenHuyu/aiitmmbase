import React from 'react';
import Option from '../../components/OptionAdmin/Option';


import './_ListHomeLeft.scss'
const ListHomeLeft = () => {
  return (
    <div>
      <Option/>
      <h1 className='text-4xl flex justify-center'>Dữ liệu từ bản Diễn biến mới</h1>
    </div>
  );
}

export default ListHomeLeft;
