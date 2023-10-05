import B1 from "@/Components/B1";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { useEffect, useState } from "react";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})

const datphong = () => {


  const [roll, setRoll] = useState('')
  const [step, setStep] = useState("Buoc1");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // if (e.target.value === roll) {
    // setRoll('false')
    // } else {
    setRoll(e.target.value)
    // }
    console.log(roll)
  }



  return (
    <div className={roboto.className}>
      <Header />
      <hr className="border-green-500 mt-4 w-96 m-auto" />

      {step === "Buoc1" && (
        <div>
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
            <div className="grid grid-cols-6 mt-5 ">
              <div className="col-span-4 m-3 ">
                <p className="font-semibold text-2xl">Chi tiết liên hệ</p>
                <div className="shadow-lg  p-5">
                  <p className="font-semibold">Họ và tên:</p>
                  <input type="text" className="border-gray-300 border-2 mt-2 pl-2 w-10/12 h-8 rounded-md" />
                  <div className="flex mt-4 ">
                    <p className="pr-[1%] font-semibold">Số CMND: </p>
                    <input className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" />
                    <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                    <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" />
                  </div>
                  <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md font-normal h-8 w-5/12" /></p>
                </div>
                <div className="bg-gray-200 h-14 shadow-md rounded-b-lg space-y-5 space-x-10 pl-5 ">
                  <input onChange={onChange} type="radio" value="datchominh" name='roll' checked={roll === "datchominh"} /> Đặt cho mình
                  <input onChange={onChange} type="radio" value="datchonguoithan" name='roll' checked={roll === "datchonguoithan"} /> Đặt cho người khác
                  {/* <input type="radio" />  Đặt cho mình
                          <input type="radio"/> Đặt cho người khác */}
                </div>


                {
                  roll === 'datchonguoithan' ? (
                    <div className="pt-5">
                      <p className="text-xl font-semibold">Thông tin khách:</p>
                      <div className="shadow-md rounded-b-lg p-5">
                        <p className="font-semibold">Họ và tên:</p>
                        <input type="text" className="border-gray-300 border-2 mt-2 w-10/12 h-8 pl-2 rounded-md" />
                        <div className="flex mt-4 ">
                          <p className="pr-[1%] font-semibold">Số CMND: </p>
                          <input className="border-gray-300 border-2 h-8 rounded-md pl-2" />
                          <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                          <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2" />
                        </div>
                        <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md h-8 w-5/12" /></p>
                      </div>
                    </div>
                  ) : ""
                }
                <input type="checkbox" className="mt-10 ml-5 mr-2 text-slate-700 font-bold" /><label className="text-slate-500 font-bold">Chắn chắn rằng tất cả thông tin trên trang này là chính xác trước khi thanh toán.</label>
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
                  <p className="">1.200.000đ</p>
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

          <div className="text-center mt-6"><button onClick={() => setStep("Buoc2")} className="border-2 border-green-600 text-xl uppercase h-10 w-56 rounded-lg hover:bg-green-600">Tiếp tục</button></div>
        </div>
      )}
      {step === "Buoc2" && (
        <div>
          <div className="flex space-x-2 justify-end w-11/12 mt-8">
            <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full bg-green-400">1</p>
            <p className="">Nhập thông tin</p>
            <p className="">------</p>
            <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full bg-green-400">2</p>
            <p className="">Xem lại</p>
            <p className="">------</p>
            <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">3</p>
            <p className="">Thanh toán</p>
            <p className="">------</p>
            <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">4</p>
            <p className="">Phiếu xác nhận</p>
          </div>
          <div className="w-8/12 border-2 border-green-400 m-auto mt-10">
            <p className="text-lg font-semibold">Vui lòng xem lại chi tiết đặt phòng của bạn trước khi đến bước thanh toán</p>
            <div className="flex mt-5">
              <div className="basis-2/3 border-2 border-gray-100 shadow-xl m-3">
                <div className="flex m-3">
                  <div className=" bg-center bg-cover bg-[url('../public/hinh1.jpg')] h-36 w-36 rounded-md"/>

                  <div className="pl-[6%] ">
                    <p className="text-xl font-semibold">The Kupid Homstay</p>
                    <p className="text-gray-500 text-sm">47 Đặng Thái Thân Phường 3 TP Đà Lạt</p>
                    <div className="flex  space-x-7">
                      <div className="mt-3">
                        <p className="text-sm ">Ngày nhận phòng:</p>
                        <p className="font-semibold">Thu, 12/10/2023</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm ">Ngày trả phòng:</p>
                        <p className="font-semibold">Thu, 12/10/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-3 space-y-3">
                  <p className="mt-5">Phòng A101</p>
                  <p className="">Khách/phòng: 2 khách</p>
                  <p className="">Giá: 1.200.000đ</p>
                  <p className="">Giảm giá: 10%</p>
                </div>

              </div>

              <div className="basis-1/3 ">
                <div className="m-3 p-2 border-2 border-gray-100 shadow-xl rounded-md">
                  <p className="font-semibold">Chi tiết người liên lạc</p>
                  <hr/>
                  <div className="text-sm leading-6">
                    <p>Họ và tên: Luong Vu Khoa</p>
                    <p>CMND: 023698547123</p>
                    <p>SĐT: 0366655650</p>
                    <p>Email: luongvukhoa@gmail.com</p>
                  </div>
                </div>

                <div className="m-3 p-2 border-2 border-gray-100 shadow-xl rounded-md">
                  <p className="font-semibold">Chi tiết người ở</p>
                  <hr/>
                  <div className="text-sm leading-6">
                    <p>Họ và tên: Luong Vu Khoa</p>
                    <p>CMND: 023698547123</p>
                    <p>SĐT: 0366655650</p>
                    <p>Email: luongvukhoa@gmail.com</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </div>

  )
}

export default datphong;