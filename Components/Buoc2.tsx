import B1 from "@/Components/B1";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Datphong, Loaiphong, Loaiphong_tenLP, Phong, Phong_idLP, Phong_tenphong } from "@/Service/userService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
type Props = {
  hotenkhacho: any,
  CCCDkhacho: any,
  SDTkhacho: any,
  roll: any,

};
const Buoc2 = (
  // { hotenkhacho, CCCDkhacho, SDTkhacho,roll }: Props
  ) => {
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string
  }
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [CMND, setCMND] = useState("")
  const [SDT, setSDT] = useState("")
  const [email, setEmail] = useState("")
  const [id_KH, setId_KH] = useState(Number);
  const [hotenKH, setHotenKH] = useState("")
  useEffect(() => {

    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');

    // if (items) {
    //   setKhachhang(items);
    // }
    if (Object.keys(khachhang1).length === 0) {
      console.log("true");
    } else {
      // console.log("ITEM",khachhang1.khachhang);
      setKhachhang(khachhang1);

      const ressss: Khachhang[] = khachhang1;
      // console.log("jhjj", ressss)

      ressss.map((res) => {
        setHotenKH(res.hotenKH)
        setId_KH(res.id)
        setCMND(res.CMND)
        setEmail(res.email)
        setSDT(res.SDT)
      })
    }
  }, [])


  return (
    <div className={roboto.className}>
      <div className=" w-6/12 m-auto mt-6 ">
        <div className="text-center space-y-1">
          <p className="font-semibold text-3xl">The Kupid Homestay</p>
          <p className="text-sm">47 Đặng Thái Thân, Phường 3, Đà Lạt</p>
        </div>

        <div className="grid grid-cols-2 mt-5 shadow-inner bg-[#F8F8FF] rounded-md pl-[5%]">
          <div className="col-span-1  space-y-2 space-x-2 m-3">
            <p className="text-lg font-semibold">Thông tin người đặt:</p>
            <div className="flex space-x-2">
              <p className="">Họ và tên:</p>
              <p className="">{hotenKH}</p>
            </div>
            <div className="flex space-x-2">
              <p className="">Số điện thoại:</p>
              <p className="">{SDT}</p>
            </div>
            <div className="flex space-x-2">
              <p className="">CCCD:</p>
              <p className="">{CMND}</p>
            </div>
            <div className="flex space-x-2">
              <p className="">Email:</p>
              <p className="">{email}</p>
            </div>
          </div>
          <div className="col-span-1 space-y-2 space-x-2 m-3 pl-[5%]">
            <p className="text-lg font-semibold">Thông tin người ở:</p>
            <div className="flex space-x-2">
              <p className="">Họ và tên:</p>
              {/* <p className="">{hotenkhacho}</p> */}
            </div>
            <div className="flex space-x-2">
              <p className="">Số điện thoại:</p>
              {/* <p className="">{SDTkhacho}</p> */}
            </div>
            <div className="flex space-x-2">
              <p className="">CCCD:</p>
              {/* <p className="">{CCCDkhacho}</p> */}
            </div>

          </div>
        </div>

        <div className=" mt-5 shadow-inner bg-[#F8F8FF] rounded-md ">
          <div className="pl-[5%] p-3 space-y-2 space-x-2">
            <p className="text-lg font-semibold">Thông tin phòng:</p>
            <div className="flex ">
              <div className="basis-2/5 space-y-2">
                <div className="flex space-x-2">
                  <p className="">Ngày nhận:</p>
                  <p className="font-semibold">16/12/2023</p>
                </div>
                <div className="flex space-x-2">
                  <p className="">Tên phòng:</p>
                  <p className="font-semibold">A302</p>
                </div>
              </div>
              <div className="basis-3/5 space-y-2">
                <div className="flex space-x-2 ">
                  <p className="">Ngày trả:</p>
                  <p className="font-semibold">18/12/2023</p>
                </div>
                <div className="flex space-x-2 ">
                  <p className="">Loại phòng:</p>
                  <p className="font-semibold">View thung lũng - 2 người</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 shadow-inner bg-[#F8F8FF] rounded-md ">
          <div className="pl-[5%] p-3 space-y-2 space-x-2">
            <div className="flex space-x-2 text-2xl font-semibold">
              <p className=" ">Tổng tiền:</p>
              <p className="">1200000 VNĐ</p>
            </div>
          </div>
        </div>
        <input type="checkbox" className="mt-6 ml-5 mr-2 text-slate-700 font-bold" /><label className="text-slate-500 font-bold">Chắn chắn rằng tất cả thông tin trên trang này là chính xác trước khi thanh toán.</label>

      </div>


    </div>

  )
}

export default Buoc2;