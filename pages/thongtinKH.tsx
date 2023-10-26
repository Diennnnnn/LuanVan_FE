import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import { useEffect, useState } from "react";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const thongtinKH = () =>{
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string
  }
  const [hotenKH, setHotenKH] = useState("")
  const [CMND, setCMND] = useState("")
  const [SDT, setSDT] = useState("")
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
        setRoll(res.gioitinh)
      })

    }
  }, []);
 
  return(
    <div className={roboto.className }>
        <Header/>
        <div className="w-8/12 mt-8 border-2 border-gray-100 m-auto rounded-md">
          <p className="font-semibold text-xl uppercase text-center m-5 ">thông tin khách hàng</p>
          <div className="grid grid-cols-2 gap-3 m-3 ">
            <div className="col-span-1 ">
              <div className="flex ">
                <div className="basis-1/4 space-y-5 ">
                <p>Họ và tên: </p>
                <p>Ngày sinh:</p>
                <p>Giới tính:</p>
                </div>

                <div className="basis-3/4 space-y-5">
                <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" value={hotenKH}/>
                <input type="date" className="outline-none w-4/5 border-b-2 border-gray-400" value={ngaysinh}/>
                <div className="space-x-7 ">
                  <input type="radio" className=""  value='Nam' name='roll' checked={roll === "Nam"}/>  Nam
                  <input type="radio" className=""  value='Nữ' name='roll' checked={roll === "Nữ"}/>  Nữ
                </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 ">
              <div className="flex ">
                <div className="basis-1/4 space-y-5 ">
                <p>CCCD:</p>
                <p>Số điện thoại:</p>
                <p>Email:</p>
                </div>

                <div className="basis-3/4 space-y-5">
                <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" value={CMND}/>
                <input type="" className="outline-none w-4/5 border-b-2 border-gray-400 " value={SDT}/>
                <input type="" className="outline-none w-4/5 border-b-2 border-gray-400" value={email}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
    </div>

  )
}
export default thongtinKH;
