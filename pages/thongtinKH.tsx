import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import { useEffect, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import dayjs from "dayjs";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const thongtinKH = () => {
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string,
    avt: string
  }
  const [hotenKH, setHotenKH] = useState("")
  const [CMND, setCMND] = useState("")
  const [SDT, setSDT] = useState("")
  const [avt, setAvt] = useState("")

  const [email, setEmail] = useState("")
  const [ngaysinh, setNgaysinh] = useState("")
  const [gioitinh, setGioitinh] = useState("")
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [id_KH, setId_KH] = useState(Number);
  const [roll, setRoll] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // if (e.target.value === roll) {
    // setRoll('false')
    // } else {
    setRoll(e.target.value)
    // }
    console.log(roll)
  }
  useEffect(() => {

    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');

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
        setGioitinh(res.gioitinh)
        setNgaysinh(res.ngaysinh)
        setCMND(res.CMND)
        setEmail(res.email)
        setSDT(res.SDT)
        if (res.avt != null){
          setAvt(new Buffer(res.avt, "base64").toString("binary"))
        }

        setRoll(res.gioitinh)
      })

    }
  }, []);

  return (
    <div className={roboto.className}>
      <Header />
      <div className="w-8/12 mt-8 border-2 border-gray-100 m-auto shadow-xl rounded-md pb-8">
        <p className="font-semibold text-xl uppercase text-center m-5 ">thông tin khách hàng</p>
        <div className="flex justify-center">
          <div className="basis-4/12">
            <img
                         src={avt}

            //  src={new Buffer(avt, "base64").toString("binary")}
              className="h-52 w-52 rounded-full ml-[10%] mt-5" />
          </div>

          <div className=" basis-6/12 space-y-5 ">
            <div className="flex">
              <p className="basis-4/12">Họ và tên: </p>
              <p className="w-4/5 border-b-2 border-gray-400" >{hotenKH}</p>
            </div>
            <div className="flex">
              <p className="basis-4/12">Ngày sinh:</p>
              <p className="w-4/5 border-b-2 border-gray-400">{dayjs(ngaysinh).format("DD/MM/YYYY")}</p>
            </div>
            <div className="flex">
              <p className="basis-4/12">Giới tính:</p>
              <p className="w-4/5 border-b-2 border-gray-400">{gioitinh}</p>
            </div>
            <div className="flex">
              <p className="basis-4/12">CCCD:</p>
              <p className="w-4/5 border-b-2 border-gray-400" >{CMND} </p>
            </div>
            <div className="flex">
              <p className="basis-4/12">Số điện thoại:</p>
              <p className="w-4/5 border-b-2 border-gray-400 " >{SDT} </p>
            </div>
            <div className="flex">
              <p className="basis-4/12">Email:</p>
              <p className="w-4/5 border-b-2 border-gray-400" >{email} </p>
            </div>
          </div>


        </div>
      </div>
      {/* <Footer/> */}
    </div>

  )
}
export default thongtinKH;
