import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { AllKhachhang, SuaTTKH, XoaAvtKH } from "@/Service/userService";
import CommonUtils from "@/Components/CommonUtils";
import router from "next/router";
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
    CCCD: string,
    SDT: string,
    email: string,
    avt: string
  }
  const [hotenKH, setHotenKH] = useState("")
  const [CCCD, setCCCD] = useState("")
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
  const [allkh, setAllkh] = useState<Khachhang[]>([]);
  const [fileIMG, setFileIMG] = useState<File>()
  const [hinhanh, setHinhanh] = useState("");
  const [errorEmail, setErrorEmail] = useState(false)
  const handleOnChangeImage = async (event: { target: { files: any; }; }) => {
    console.log("img")
    setFileIMG(event.target.files[0]);

    let data = event.target.files;
    let file = data[0];

    if (file) {
      let base64img = await CommonUtils.getBase64(file);
      console.log("check base64 img: ", base64img);
      let objectUrl = URL.createObjectURL(file);
      console.log("check objectUrl img: ", objectUrl);

      setAvt(base64img)
      setPrevURLIMG(objectUrl)

    }
    console.log("setPrevURLIMG", prevURLIMG)

  };


  const handleCapnhatTTKH = async () => {
    console.log("id", id)
    console.log("hotenKH", hotenKH)
    console.log("gioitinh", gioitinh)
    console.log("ngaysinh", ngaysinh)
    console.log("CCCD", CCCD)
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
        CCCD: CCCD,
        SDT: SDT,
        email: email,
        avt: avt

      }
    );
    if (res && res.errCode === 0) {
      //remove localstorage
      // localStorage.removeItem("khachhang");

      //lay TTKH theo id
      try {
        const params = {
          id_allkh: id,
        };
        console.log(params)

        const response = await AllKhachhang(params);
        const res: Khachhang[] = response.allkh;
        console.log(response)
        console.log("ressss", res)
        setAllkh(res);
        localStorage.setItem('khachhang', JSON.stringify(res));

        // localStorage.setItem('khachhang', JSON.stringify(res));

      } catch (error) {
        console.log(error);
      }

      router.push({
        pathname: '/thongtinKH',

      })
      setHotenKH('')
      setGioitinh('')
      setNgaysinh(new Date())
      setCCCD('')
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

  const handleDeleteAvt = async () => {
    let res = await XoaAvtKH(
      {
        id: id,

      }
    );
    if (res && res.errCode === 0) {
      alert("Xóa Avatar thành công")
      try {
        const params = {
          id_allkh: id,
        };
        console.log(params)

        const response = await AllKhachhang(params);
        const res: Khachhang[] = response.allkh;
        console.log(response)
        console.log("ressss", res)
        setAllkh(res);
        localStorage.setItem('khachhang', JSON.stringify(res));

        // localStorage.setItem('khachhang', JSON.stringify(res));

      } catch (error) {
        console.log(error);
      }

      router.push({
        pathname: '/thongtinKH',

      })
    }
    else {
      console.log(res)

      alert("Xóa Avatar KHÔNG thành công")

    }
  }
  const handleErrorEmail = (val: string) => {
    setEmail(val)
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrorEmail(false)
    } else {
      setErrorEmail(true)
    }
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
        setCCCD(res.CCCD)
        setEmail(res.email)
        setSDT(res.SDT)
        if (res.avt != null) {
          setAvt(new Buffer(res.avt, "base64").toString("binary"))
        }
        setRoll(res.gioitinh)
      })

    }
  }, []);

  return (
    <div className={roboto.className}>
      <Header />
      <div className="w-8/12 mt-8 border-2 border-gray-100 m-auto shadow-xl rounded-md pb-8 ">
        <p className="font-semibold text-xl uppercase text-center m-5 ">Cập nhật thông tin khách hàng</p>
        <div className="flex justify-center">
          <div className="basis-4/12 ">

            <img
              src={
                prevURLIMG ? prevURLIMG : avt
                // new Buffer(avt, "base64").toString("binary")
              }
              className="h-52 w-52 rounded-full m-auto mt-5" />
            <div className="text-center space-x-5 mt-5">
              <input
                className="bg-green-400 h-8 w-8 rounded-full hover:bg-green-500"
                id="preview-img"
                type="file"
                accept=".png,.jpg"
                hidden
                // onChange={(e) => setFileIMG(e.target.files?.[0])}
                onChange={(event) => handleOnChangeImage(event)}
              />
              <button className="bg-green-400 h-8 w-8 rounded-full hover:bg-green-500"><label className="lable-upload " htmlFor="preview-img">
                <Edit /><i className="fas fa-upload"></i>
              </label></button>
              {/* <button className="bg-green-400 h-8 w-8 rounded-full hover:bg-green-500" ><Edit /></button> */}

              <button onClick={() => handleDeleteAvt()} className="bg-green-400 h-8 w-8  rounded-full hover:bg-green-500"><Delete /></button>
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
              <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" placeholder="Nhập đầy đủ họ và tên" value={hotenKH} onChange={(e) => setHotenKH(e.target.value)} />
              <DatePicker
                className="outline-none w-4/5 border-b-2 border-gray-400"
                dateFormat='dd/MM/yyyy'
                selected={ngaysinh}
                onChange={(date: Date) => setNgaysinh(date)}
              />
              {/* <input type="date" className="outline-none w-4/5 border-b-2 border-gray-400" value={ngaysinh} /> */}
              <div className="space-x-7 ">
                <input type="radio" onChange={(e) => setGioitinh(e.target.value)} className="" value='Nam' name='gioitinh' checked={gioitinh === "Nam"} />  Nam
                <input type="radio" onChange={(e) => setGioitinh(e.target.value)} className="" value='Nữ' name='gioitinh' checked={gioitinh === "Nữ"} />  Nữ
              </div>
              <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400" value={CCCD} onChange={(e) => setCCCD(e.target.value)} />
              <input type="" className="outline-none w-4/5 border-b-2 border-gray-400 " value={SDT} onChange={(e) => setSDT(e.target.value)} />
              <input type="" className="outline-none w-4/5 border-b-2 border-gray-400" placeholder="example@gmail.com" value={email} onChange={(e)=>handleErrorEmail(e.target.value)} />
              {errorEmail?<p className="text-red-500 text-xs">Lỗi Email không đúng định dạng</p>:''}
            </div>
          </div>
        </div>
            
        <div className="py-7 pr-[10%]">
          <button onClick={handleCapnhatTTKH} className="float-right border-2 border-green-500  hover:bg-green-500 h-8 w-44 rounded-lg">Cập nhật thông tin</button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>

  )
}
export default capnhatthongtinKH;
