import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { SuaTTKH } from "@/Service/userService";
import CommonUtils from "@/Components/CommonUtils";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const capnhatthongtinKH = () => {
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
  const [ngaysinh, setNgaysinh] = useState(new Date())
  const [gioitinh, setGioitinh] = useState("")
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  // const [id_KH, setId_KH] = useState(Number);
  const [roll, setRoll] = useState('')
  const [id, setId] = useState(Number)
  const [prevURLIMG, setPrevURLIMG] = useState("");


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // if (e.target.value === roll) {
    // setRoll('false')
    // } else {
    setRoll(e.target.value)
    // }
    console.log(roll)
  }
  const handleCapnhatTTKH = async () => {
    console.log("id", id)
    console.log("hotenKH", hotenKH)
    console.log("gioitinh", gioitinh)
    console.log("ngaysinh", ngaysinh)
    console.log("CMND", CMND)
    console.log("SDT", SDT)
    console.log("email", email)
    console.log("avt", avt)


    let date1 = new Date(ngaysinh)

    let res = await SuaTTKH(
      {
        id: id,
        hotenKH: hotenKH,
        gioitinh: gioitinh,
        ngaysinh: ngaysinh,
        CMND: CMND,
        SDT: SDT,
        email: email,
        avt: new Buffer(avt, "base64").toString("binary")

      }
    );
    if (res && res.errCode === 0) {
      setHotenKH('')
      setGioitinh('')
      setNgaysinh(new Date())
      setCMND('')
      setEmail('')
      setSDT('')
      setAvt('')
      // setPrevURLIMG(new Buffer(avt, "base64").toString("binary"))
      // setStep('them')
      alert("Cập nhật thành công")


    } else {
      console.log(res)
      alert("Cập nhậtkhông thành công")
    };

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
        let date1 = new Date(res.ngaysinh)
        setHotenKH(res.hotenKH)
        setId(res.id)
        setGioitinh(res.gioitinh)
        setNgaysinh(date1)
        setCMND(res.CMND)
        setEmail(res.email)
        setSDT(res.SDT)
        setAvt(res.avt)

        setRoll(res.gioitinh)
      })

    }
  }, []);

  return (
    <div className={roboto.className}>
      <Header />
      <div className="w-8/12 mt-8 border-2 border-gray-100 m-auto shadow-xl rounded-md pb-8">
        <p className="font-semibold text-xl uppercase text-center m-5 ">Cập nhật thông tin khách hàng</p>
        <div className="flex justify-center">
          <div className="basis-4/12 ">
            <img src={new Buffer(avt, "base64").toString("binary")} className="h-52 w-52 rounded-full m-auto mt-5" />
            <div className="text-center space-x-5 mt-5">
              <button className="bg-green-400 h-8 w-8 rounded-full hover:bg-green-500"><Edit /></button>
              <button className="bg-green-400 h-8 w-8 rounded-full hover:bg-green-500"><Delete /></button>
            </div>
          </div>

          <div className="flex ">
            <div className="basis-1/4 space-y-5 ">
              <p>Họ và tên: </p>
              <p>Ngày sinh:</p>
              <p>Giới tính:</p>
              <p>CCCD:</p>
              <p>Số điện thoại:</p>
              <p>Email:</p>
            </div>

            <div className="basis-3/4 space-y-5">
              <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" value={hotenKH} onChange={(e) => setHotenKH(e.target.value)} />
              <DatePicker
                className="outline-none w-4/5 border-b-2 border-gray-400"
                dateFormat='dd/MM/yyyy'
                selected={ngaysinh}
                onChange={(date: Date) => setNgaysinh(date)}
              />
              {/* <input type="date" className="outline-none w-4/5 border-b-2 border-gray-400" value={ngaysinh} /> */}
              <div className="space-x-7 ">
                <input type="radio" onChange={(e) => setRoll(e.target.value)} className="" value='Nam' name='roll' checked={roll === "Nam"} />  Nam
                <input type="radio" onChange={(e) => setRoll(e.target.value)} className="" value='Nữ' name='roll' checked={roll === "Nữ"} />  Nữ
              </div>
              <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" value={CMND} onChange={(e) => setCMND(e.target.value)} />
              <input type="" className="outline-none w-4/5 border-b-2 border-gray-400 " value={SDT} onChange={(e) => setSDT(e.target.value)} />
              <input type="" className="outline-none w-4/5 border-b-2 border-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
        </div>
        <button onClick={handleCapnhatTTKH}>zxcvbnm</button>

      </div>
      {/* <Footer/> */}
    </div>

  )
}
export default capnhatthongtinKH;
