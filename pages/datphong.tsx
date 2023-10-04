import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Montserrat } from "next/font/google";
import Router from "next/router";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
const datphong = () =>{



  return(
    <div className={roboto.className}>
      <Header/>
      <hr className="border-green-500 mt-4 w-96 m-auto"/>

      <div className="flex space-x-2 justify-end w-11/12 mt-8">
        <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full bg-green-400">1</p>
        <p className="">Nhập thông tin</p>
        <p className="">------</p>
        <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">2</p>
        <p className="">Xem lại</p>
        <p className="">------</p>
        <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">3</p>
        <p className="">Thanh toán</p>
        <p className="">------</p>
        <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">4</p>
        <p className="">Phiếu xác nhận</p>
      </div>

      <div className="grid w-8/12 m-auto mt-6">
        <p className="text-gray-700 font-bold">Hãy chắn chắn rằng tất cả thông tin trên trang này là chính xác trước khi thanh toán.</p>
        <div className="grid grid-cols-6 mt-5 ">
          <div className="col-span-4 m-3 ">
            <p className="font-semibold text-2xl">Chi tiết liên hệ</p>
            <div className="shadow-lg  p-5">
              <p className="font-semibold">Học và tên:</p>
              <input type="text" className="border-gray-300 border-2 mt-2 w-10/12 h-8 rounded-md"/>
              <div className="flex mt-4 ">
                <p className="pr-[1%] font-semibold">Số CMND: </p>
                <input className="border-gray-300 border-2 h-8 rounded-md"/>
                <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                <input type="tel"  className="border-gray-300 border-2 h-8 rounded-md"/>
              </div>
              <p className="mt-4 font-semibold ">Email: <input type="text"  className="border-gray-300 border-2 rounded-md h-8 w-5/12"/></p>
            </div>
            <div className="bg-gray-200 h-14 shadow-md rounded-b-lg space-y-5 space-x-10 pl-5 ">
              <input type="radio" />  Đặt cho mình
              <input type="radio"/> Đặt cho người khác
            </div>

            <div className="pt-5">
              <p className="text-xl font-semibold">Thông tin khách:</p>
              <div className="shadow-md rounded-b-lg p-5">
              <p className="font-semibold">Học và tên:</p>
              <input type="text" className="border-gray-300 border-2 mt-2 w-10/12 h-8 rounded-md"/>
              <div className="flex mt-4 ">
                <p className="pr-[1%] font-semibold">Số CMND: </p>
                <input className="border-gray-300 border-2 h-8 rounded-md"/>
                <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                <input type="tel"  className="border-gray-300 border-2 h-8 rounded-md"/>
              </div>
              <p className="mt-4 font-semibold ">Email: <input type="text"  className="border-gray-300 border-2 rounded-md h-8 w-5/12"/></p>
            </div>
            </div>
          </div>
          <div className="col-span-2 shadow-inner bg-gray-50 rounded-md">
            <div className="text-center pt-5">
              <p className="font-semibold text-lg">The Kupid Homestay</p>
              <p className="text-sm">47 Đặng Thái Thân, Phường 3, Đà Lạt</p>
            </div>
            <div className="bg-gray-200 mt-5 p-[3%] h-32 text-slate-700 text-base space-y-2">
              <div className="flex">
                <p className="text-sm basis-40">Ngày nhận phòng: </p>
                <p className="text-base">Thu, 13/10/2023, Từ 14:00</p>
              </div>
              
              <div className="flex">
                <p className="text-sm basis-44">Ngày trả phòng: </p>
                <p className="text-base">Fri, 14/10/2023, Trước 12:00</p>
              </div>
            </div>
            <p className="font-semibold m-5 text-lg">Phòng A101</p>
            <div className="flex m-5">
              <p className="basis-40 text-slate-500">Khách/phòng</p>
              <p className="">2 khách</p>
            </div>
            <div className="flex m-5">
              <p className="basis-40 text-slate-500">Giá</p>
              <p className="">1.200.00đ</p>
            </div>
            <div className="flex m-5">
              <p className="basis-40 text-slate-500">Giảm giá</p>
              <p className="">10%</p>
            </div>    

            <div className="flex m-5">
              <p className="basis-40 font-semibold text-lg">Tổng tiền</p>
              <p className="font-semibold text-lg">1.080.000đ</p>
            </div>   

          </div>
        </div>

      </div>
      <Footer/>
    </div>

  )
}
export default datphong;