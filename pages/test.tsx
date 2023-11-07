import * as React from 'react';


export default function Playground() {

  return (
    <div className='w-5/12 shadow-lg m-auto mt-10 space-y-5 pb-10'>
      <p className='uppercase text-2xl text-center font-semibold'>thông tin khách hàng</p>
      <div className='w-11/12  m-auto space-y-3 pl-[3%]'>
        <div className='flex space-x-3'>
          <p className='basis-3/12'>Họ tên khách hàng:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex space-x-3'>
          <p className='basis-3/12'>Giới tính:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex  space-x-3'>
          <p className='basis-3/12'>Ngày sinh:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex space-x-3 '>
          <p className='basis-3/12'>Email:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex  space-x-3'>
          <p className='basis-3/12'>Số điện thoại:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex space-x-3'>
          <p className='basis-3/12'>Địa chỉ:</p>
          <input type='text' className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex space-x-3'>
          <p className='basis-3/12'>Mã thẻ thành viên:</p>
          <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
        <div className='flex space-x-3'>
          <p className='basis-3/12'>Điểm tích lũy:</p>
          <p className='border-dotted outline-none border-b-2 border-gray-400 w-3/5 ' />
        </div>
      </div>

      <div className='hover:text-blue-600 text-sm pl-[5%] pt-4'>Chỉnh sửa thông tin?</div>
      <div className='text-end space-x-5 pr-[10%]'>
        <button className='hover:text-blue-600'>Hủy</button>
        <button className='bg-red-400 hover:bg-red-500 h-8 w-36 rounded-md'>Cập nhật thông tin</button>

      </div>
    </div>

  );
}
