import B1 from "@/Components/B1";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Datphong, Loaiphong, Phong, Phong_tenphong } from "@/Service/userService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { useEffect, useState } from "react";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
type Props = {
  id_phong: number,
  tenphong: string,
  check_in: string,
  check_out: string,
  gia: number,
  songuoi: number
};
const Buoc1 = ({ tenphong, id_phong, check_in, check_out, gia, songuoi }: Props) => {

  interface Khachhang {
    id: number;
    hotenKH: string;
    CMND: string,
    SDT: string,
    email: string
  }
  interface Phong {
    //tên giống csdl
    id: number;
    id_LP: number;
    id_VT: number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  interface Loaiphong {
    id: number;
    tenloaiphong: string;
    songuoi: number;
    gia: number;
  }

  //   interface Khachhang1 {
  //     id: number;
  //     hotenKH: string;
  //     CMND: string,
  //     SDT: string,
  //     email: string
  //   }
  const [roll, setRoll] = useState('')
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  //   const [step, setStep] = useState("Buoc1");
  const [id_KH, setId_KH] = useState(Number);
  //   const [id_Phong, setId_Phong] = useState(Number);
  //   const [ngaydat, setNgaydat] = useState(new Date);
  // const [check_in, setCheck_in] = useState("");
  // const [check_out, setCheck_out] = useState("");
  const [songuoi1, setSonguoi1] = useState(Number);
  const [hotenKH, setHotenKH] = useState("")
  const [CMND, setCMND] = useState("")
  const [SDT, setSDT] = useState("")
  const [email, setEmail] = useState("")
  const [phong, setPhong] = useState<Phong[]>([]);
  const [phong2, setPhong2] = useState<Phong[]>([]);
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);

  // const [tenP, setTenP] = useState<string[]>([]);
  const [valueCombobox, setValueCombobox] = useState("")


  //   const handleDatphong = async () => {
  //     console.log("hoten", hoten)
  //     console.log("id_KH", id_KH)
  //     console.log("id_phong:", id_phong)
  //     console.log("ngaydat", new Date)
  //     console.log("check_in", check_in)
  //     console.log("check_out", check_out)
  //     console.log("songuoi1", songuoi1)

  //     if (id_phong && check_in && check_out && songuoi) {
  //       let res = await Datphong(
  //         {
  //           id_KH: id_KH,
  //           id_phong: id_phong,
  //           ngaydat: ngaydat,
  //           check_in: check_in,
  //           check_out: check_out,
  //           songuoi: songuoi

  //         }
  //       );
  //       if (res && res.errCode === 0) {
  //         alert("Đặt lịch thành công")
  //       } else {
  //         console.log(res)
  //         alert("Đặt phòng không thành công")
  //       };
  //     }

  //   }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // if (e.target.value === roll) {
    // setRoll('false')
    // } else {
    setRoll(e.target.value)
    // }
    console.log(roll)
  }

  const handleLayttphongtheoten = async (value: string) => {
    try {
      const params = {
        tenphong: value,
      };
      console.log(params)
      const response = await Phong_tenphong(params);
      const res: Phong[] = response.phong; //gán dữ liệu vào res
      console.log(response)
      setPhong2(res); //gán res vào setPhong
      res.map(async (res) => {
        const params = {
          id_lp: res.id_LP,
        };
        console.log(params)
        const response = await Loaiphong(params);
        const res2: Loaiphong[] = response.loaiphong;
        console.log(response)
        setLoaiphong(res2);

      })

    } catch (error) {
      console.log(error);
    }


  }


  useEffect(() => {
    if (songuoi) {
      setSonguoi1(songuoi)
    }
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
    const handlephong = async () => {
      try {
        const params = {
          id_phong: 'ALL',
        };
        console.log(params)
        const response = await Phong(params);
        const res: Phong[] = response.phong; //gán dữ liệu vào res
        console.log(response)
        setPhong(res); //gán res vào setPhong
        // res.map((res) => {
        //   tenP.push(res.tenphong)
        // })

      } catch (error) {
        console.log(error);
      }


    };
    handlephong();

  }, []);


  return (
    <div className={roboto.className}>
      <div className="grid w-8/12 m-auto mt-6">
        <div className="grid grid-cols-6 mt-5 ">
          <div className="col-span-4 m-3 ">
            <p className="font-semibold text-2xl">Chi tiết liên hệ</p>
            <div className="shadow-lg  p-5">
              {/* {
                  khachhang.map((item, index) => {
                    return ( */}
              <div >
                <p className="font-semibold">Họ và tên:</p>
                <input
                  type="text"
                  className="border-gray-300 border-2 mt-2 pl-2 w-10/12 h-8 rounded-md"
                  value={hotenKH}
                // value={hoten ? hoten : item.hotenKH}
                // onChange={(e) => setHoten(e.target.value)}
                />
                <div className="flex mt-4 ">
                  <p className="pr-[1%] font-semibold">Số CMND: </p>
                  <input className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" value={CMND} />
                  <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                  <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" value={SDT} />
                </div>
                <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md font-normal h-8 w-5/12" value={email} /></p>
              </div>
              {/* )
                  })
                } */}
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
            <div className="bg-gray-200 mt-5 p-[3%] h-32 text-slate-700 text-base space-y-4">
              <div className="flex ">
                <p className="text-sm basis-40">Ngày nhận phòng: </p>
                {check_in ?
                  <p className="text-base font-semibold">{check_in}, Từ 14:00</p>

                  :
                  <div className="space-y-1">
                    <input type="Date" className="text-base" />
                    <p className="text-xs font-semibold">Từ 14:00</p>
                  </div>
                }
                {/* <p className="text-base">{check_in}, Từ 14:00</p> */}
              </div>

              <div className="flex">
                <p className="text-sm basis-40">Ngày trả phòng: </p>
                {check_out ?
                  <p className="text-base font-semibold">{check_out}, Trước 12:00</p>

                  :
                  <div className="space-y-1">
                    <input type="Date" className="text-base" />
                    <p className="text-xs font-semibold">Trước 12:00</p>
                  </div>
                }
                {/* <p className="text-base">{check_out}, Trước 12:00</p> */}
              </div>
            </div>
            <div className="font-semibold m-5 text-lg flex">
              <p className="basis-40 ">Phòng</p>

              {tenphong ?
                <p className="font-semibold m-5 text-lg"> {tenphong}</p>
                :
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={phong.map((option) => option.tenphong)}
                  value={valueCombobox}
                  onChange={(event: any, newValue: string | null) => {
                    {

                      newValue ?
                        handleLayttphongtheoten(newValue)
                        // setValueCombobox(newValue) 
                        : null
                    }
                  }}
                  sx={{ width: 300 }}
                  // onChange={()=>setTemp()}
                  // renderInput={(params)=>setTemp(params)}

                  renderInput={(params) => <TextField {...params}
                    label="Tên phòng"
                  />}
                />
                // <input type="" className="border-green-300 border-2 w-32"></input>
              }
            </div>

            {/* <p className="font-semibold m-5 text-lg">Phòng {tenphong}</p> */}
            {loaiphong.map((item, index) => {
              return (
                <>
                  <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Khách/phòng</p>
                    <p className="">{item.songuoi} khách</p>
                  </div>
                  <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Giá</p>
                    <p className="">{item.gia}đ</p>
                  </div>
                  <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Giảm giá</p>
                    <p className="">10%</p>
                  </div>

                  <div className="flex m-5">
                    <p className="basis-40 font-semibold text-lg">Tổng tiền</p>
                    <p className="font-semibold text-lg">1.080.000đ</p>
                  </div>
                </>
              )
            })}

          </div>
        </div>

      </div>
      {/* onClick={()=>setStep("Buoc2")} */}
      {/* <div className="text-center mt-6"><button onClick={handleDatphong} className="border-2 border-green-600 text-xl uppercase h-10 w-56 rounded-lg hover:bg-green-600">Tiếp tục</button></div> */}
    </div>

  )
}

export default Buoc1;