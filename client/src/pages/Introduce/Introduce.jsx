import React from 'react';
import img1 from './img1.jfif'
import img2 from './img2.jfif'
import img3 from './img3.jfif'
import Card_Of_Page_GioiThieu from '../../components/Card_Of_Page_GioiThieu/Card_Of_Page_GioiThieu';
import './_Introduce.scss'

const string =(<>Đổi mới sáng tạo trong 5 lĩnh vực nghiên cứu sâu: <br/>-Trí tuệ nhân tạo, dữ liệu lớn<br/>-Khoa học quản lý xã hội và cộng đồng doanh nghiệp</>)
const stringpvhd ='Đổi mới sáng tạo trong 5 lĩnh vực nghiên cứu sâu: -Trí tuệ nhân tạo, dữ liệu lớn \n-Khoa học quản lý xã hội và cộng đồng doanh nghiệp'

const Introduce = () => {
    console.log(string)
  return (
  <section className='scroll-smooth bg-[#364153] py-[30px] '>
      <section className=' flex flex-col text-center xl:flex-row xl:text-left xl:justify-center xl:mt-[20px]'>
            <div className='w-[100%] xl:w-[270px] '>
                <h1 className=' text-[#f8e164] text-3xl font-medium '>A I I T</h1>
                <h1 className=' text-white text-4xl mt-3 leading-tight'>TRƯỜNG ĐẠI HỌC QUỐC TẾ SÀI GÒN</h1>
                <p className=' text-white text-xs font-semibold mt-3 '>VIỆN ĐỔI MỚI CÔNG NGHỆ</p>
                <button className=' w-[85px] h-[30px] text-[#f8e164] text-[14px] bg-transparent border border-current mt-3 rounded hover:scale-105 '>Trang Chủ</button>
            </div>
            <div className=' flex gap-4 mt-[25px] overflow-scroll mx-[5%] snap-x
            md:justify-center md:snap-none xl:overflow-auto '>
                <img src={img1} className=' max-w-[175px] h-[115px] rounded-lg shadow-md snap-center '></img>
                <img src={img2} className=' max-w-[175px] h-[115px] rounded-lg shadow-md snap-center '></img>
                <img src={img3} className=' max-w-[175px] h-[115px] rounded-lg shadow-md snap-center '></img>
            </div> 
          

      </section>
      
      <section>
            <h1 className=' mt-[50px] text-center text-3xl text-white font-semibold  '>GIÁ TRỊ CỐT LÕI</h1>
            {/* div chứa 3 card */}
            <div className='mx-[auto] px-[4%] mt-[30px] w-auto 
            md:grid md:grid-cols-[repeat(3,minmax(300px,380px))] md:gap-[25px] md:mx-[15%] md:overflow-x-scroll md:snap-x
            lg:mx-[0] lg:[overflow-x:unset] lg:justify-center '>
                <Card_Of_Page_GioiThieu 
                title='Tầm Nhìn'
                description='Đến năm 2025, Viện AIIT sẽ trở thành một viện kiểu mẫu về kết nối thúc đẩy đổi mới sáng tạo tiên phong của SIU. Đến năm 2030 trở thành đơn vị chuyển đổi mới sáng tạo của tập đoàn GAIE.'
                /> 
                <Card_Of_Page_GioiThieu 
                title='Sứ Mạng'
                description='Viện có sứ mạng xây dựng tinh thần đổi mới sáng tạo cho đội ngũ giảng viên khoa học trình độ cao của SIU; sẵn sàng kết nối cộng đồng bên trong của SIU, GAIE với đối tác uy tín bên ngoài, các tổ chức trong nước và quốc tế; đồng thời mở rộng hợp tác, đổi mới đào tạo và nghiên cứu nhằm nâng cao thương hiệu SIU.'    
                />
                <Card_Of_Page_GioiThieu 
                title="Phạm Vi Hoạt Động"
                description={<>Đổi mới sáng tạo trong 5 lĩnh vực nghiên cứu sâu:
                    <br/>
                    -Trí tuệ nhân tạo, dữ liệu lớn
                    <br/>
                    -Khoa học quản lý xã hội và cộng đồng doanh nghiệp
                    <br/>
                    -Khoa học giáo dục & chuyển đổi số
                    <br/>
                    -Tài nguyên, môi trường và kinh tế biển
                    <br/>
                    -Sức khỏe và y tế.
                </>}/>        
            </div>
            
      </section>
  </section>
  );
}

export default Introduce;
