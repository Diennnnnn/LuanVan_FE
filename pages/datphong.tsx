import B1 from "@/Components/B1";
import Buoc1 from "@/Components/Buoc1";
import Buoc2 from "@/Components/Buoc2";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Datphong, Khuyenmai, Loaiphong, Loaiphong_tenLP, Phong, Phong_idLP, Phong_tenphong } from "@/Service/userService";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
const steps = ['Nhập thông tin', 'Xem lại', 'Thanh toán', 'Phiếu xác nhận'];

interface codeProductProps {
  id_phong: number | null,
  tenphong: string | null;
  gia: number | null;
  songuoi: number | null
  check_in: string | null
  check_out: string | null
  tenloaiphong: string | null

  // hotenkhacho: string | null
  // CCCDkhacho: string | null
  // SDTkhacho: string | null
  // roll: string | null


}
const datphong = ({ id_phong, tenphong, gia, songuoi, tenloaiphong, check_in, check_out
  // , hotenkhacho, SDTkhacho, CCCDkhacho, roll
}: codeProductProps) => {
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string
  }
  interface Khachhang1 {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
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
  interface Khuyenmai {
    id: number;
    tenKM: string;
    phantram: number;
    mota: string;
    start: Date;
    finish: Date;
    dieukien: string
  }
  // const [roll, setRoll] = useState('')
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [step, setStep] = useState("Buoc1");
  const [hoten, setHoten] = useState("");
  const [id_Phong, setId_Phong] = useState(Number);
  const [ngaydat, setNgaydat] = useState(new Date);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [activeStep, setActiveStep] = React.useState(0);

  const [roll, setRoll] = useState('')

  const [CMND, setCMND] = useState("")
  const [SDT, setSDT] = useState("")
  const [email, setEmail] = useState("")
  const [id_KH, setId_KH] = useState(Number);
  const [hotenKH, setHotenKH] = useState("")
  const [songuoi1, setSonguoi1] = useState(Number);

  const [ngaysinh, setNgaysinh] = useState("")
  const [gioitinh, setGioitinh] = useState("")

  const [phong, setPhong] = useState<Phong[]>([]);
  const [phong2, setPhong2] = useState<Phong[]>([]);
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);
  const [loaiphong1, setLoaiphong1] = useState<Loaiphong[]>([]);
  const [checkin, setCheckin] = useState(new Date())
  const [checkout, setCheckout] = useState(new Date())
  const [mincheckout, setMincheckout] = useState(new Date())
  const [ghichu, setGhichu] = useState("")

  const [hotenkhacho, setHotenkhacho] = useState("")
  const [CCCDkhacho, setCCCDkhacho] = useState("")
  const [SDTkhacho, setSDTkhacho] = useState("")
  const [songuoio, setSonguoio] = useState(Number)
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);

  // const [tenP, setTenP] = useState<string[]>([]);
  const [valueCombobox, setValueCombobox] = useState("")
  const [valueCombobox1, setValueCombobox1] = useState("")

  const [phantramKM, setPhantramKM] = useState(Number)
  // const [d1, setD1] = useState(Number)
  const [songay, setSongay] = useState(Number)
  const [tongtien, setTongtien] = useState(Number)
  const [giaphong, setGiaphong] = useState(Number)
  const [strCheckin, setStrCheckin] = useState('')
  const [strCheckout, setStrCheckout] = useState('')




  let d1: Date
  let d2: Date
  let giatemp: number

  //
  // const [check_in1, setCheck_in1] = useState("");
  // const [check_out1, setCheck_out1] = useState("");

  const handleDatphong = async () => {
    // console.log("hoten", hoten)
    console.log("id_KH", id_KH)
    console.log("id_phong:", id_phong)
    console.log("ngaydat", new Date)
    console.log("check_in", strCheckin)
    console.log("check_out", strCheckout)
    console.log("songuoi1", songuoio)
    console.log("tongtien", tongtien)
    console.log("hotenkhacho", hotenkhacho)
    console.log("CCCDkhacho", CCCDkhacho)
    console.log("SDTkhacho", SDTkhacho)
    console.log("ghichu", ghichu)

    if (id_phong && check_in && check_out && songuoi) {
      let res = await Datphong(
        {
          id_KH: id_KH,
          id_phong: id_phong,
          ngaydat: ngaydat,
          check_in: strCheckin,
          check_out: strCheckout,
          songuoi: songuoio,
          tongtien: tongtien,
          thanhtoan: '',
          trangthai: '',
          ghichu: ghichu,
          hotennguoio: hotenkhacho,
          SDT_nguoio: SDTkhacho,
          CCCD_nguoio: CCCDkhacho
        }
      );
      if (res && res.errCode === 0) {
        alert("Đặt phòng thành công")
      } else {
        console.log(res)
        alert("Đặt phòng không thành công")
      };
    }
    else {
        let res = await Datphong(
          {
            id_KH: id_KH,
            id_phong: id_Phong,
            ngaydat: ngaydat,
            check_in: checkin.getFullYear() + "-" + (checkin.getMonth() + 1) + "-" + checkin.getDate(),
            check_out: checkout.getFullYear() + "-" + (checkout.getMonth() + 1) + "-" + checkout.getDate(),
            songuoi: songuoio,
            tongtien: tongtien,
            thanhtoan: '',
            trangthai: '',
            ghichu: ghichu,
            hotennguoio: hotenkhacho,
            SDT_nguoio: SDTkhacho,
            CCCD_nguoio: CCCDkhacho
          }
        );
        if (res && res.errCode === 0) {
          alert("Đặt phòng thành công")
        } else {
          console.log(res)
          alert("Đặt phòng không thành công")
        };
      
    }

  }
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // e.preventDefault();
  //   // if (e.target.value === roll) {
  //   // setRoll('false')
  //   // } else {
  //   setRoll(e.target.value)
  //   // }
  //   console.log(roll)
  // }
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    console.log("ghjk", activeStep)
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCheckDate = (checki: Date) => {
    setPhantramKM(0)
    khuyenmai.map((km) => {
      d1 = new Date(km.start)
      d2 = new Date(km.finish)
      d1.setHours(0)
      d1.setMinutes(0)
      d1.setSeconds(0)
      d1.setMilliseconds(0)

      d2.setHours(0)
      d2.setMinutes(0)
      d2.setSeconds(0)
      d2.setMilliseconds(0)

      let d3 = new Date(checki)
      d3.setHours(0)
      d3.setMinutes(0)
      d3.setSeconds(0)
      d3.setMilliseconds(0)
      console.log("d1", d1)
      console.log("d2", d2)
      console.log("d3", d3)

      if (d3.getTime() >= d1.getTime() && d3.getTime() <= d2.getTime()) {
        console.log('true')
        setPhantramKM(km.phantram)
      }
    })
    setCheckin(checki)
    let datecheckout = new Date(checki)
    datecheckout.setDate(datecheckout.getDate() + 1)
    setMincheckout(datecheckout)
    setCheckout(datecheckout)
  }
  const handleLayttphongtheoten = async (value: string) => {
    setValueCombobox(value)
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
        setId_Phong(res.id)
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
  const handleLayLoaiphongtheoTenLP = async (tenloaiphong: string) => {
    setValueCombobox1(tenloaiphong)
    // console.log(tenloaiphong)
    let i = tenloaiphong.indexOf(' -')
    let str1 = tenloaiphong.slice(0, i)
    console.log(i)
    console.log(str1)
    try {
      const params = {
        lp_tenloai: str1,
      };
      console.log(params)

      const response = await Loaiphong_tenLP(params);
      const res: Loaiphong[] = response.lp_tenloai;
      console.log(response)
      console.log(res)
      setLoaiphong1(res);

      res.map(async (item) => {
        giatemp = item.gia
        setGiaphong(item.gia)
        setSonguoi1(item.songuoi)
        const params = {
          phong_idLP: item.id,
        };
        console.log(params)

        const response = await Phong_idLP(params);
        const res: Phong[] = response.phong_idLP;
        console.log(response)
        console.log(res)
        setPhong(res);

      })
    } catch (error) {
      console.log(error);
    }
    let d1 = new Date(checkin)
    let d2 = new Date(checkout)

    let sn = Number(d2.getDate()) - Number(d1.getDate())
    setSongay(sn)
    setTongtien((giatemp * sn) - ((giatemp * sn) * (phantramKM / 100)))
    console.log("phantramKM", phantramKM)
    console.log("giatemp", giatemp)

  };


  useEffect(() => {
    const handleCheckDate = (checki: Date) => {
      setCheckin(checki)
      let datecheckout = new Date(checki)
      datecheckout.setDate(datecheckout.getDate() + 1)
      setMincheckout(datecheckout)
      setCheckout(datecheckout)
    }

    // setCheck_in1(check_in || '')
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

      const ressss: Khachhang1[] = khachhang1;
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
          id_phong: id_phong,
        };
        console.log(params)
        const response = await Phong(params);
        const res: Phong[] = response.phong; //gán dữ liệu vào res
        console.log(response)
        setPhong(res); //gán res vào setPhong
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


    };
    const handlephong2 = async () => {
      try {
        const params = {
          id_phong: "ALL",
        };
        console.log(params)
        const response = await Phong(params);
        const res: Phong[] = response.phong; //gán dữ liệu vào res
        console.log(response)
        setPhong(res); //gán res vào setPhong


      } catch (error) {
        console.log(error);
      }


    };

    const handleLoaiphong = async () => {
      try {
        const params = {
          id_lp: "ALL",
        };
        console.log(params)
        const response = await Loaiphong(params);
        const res: Loaiphong[] = response.loaiphong;
        console.log(response)
        setLoaiphong(res);
        res.map((res) => {
          // setId_loaiphong(res.id)
          // console.log("id", id)
        })

      } catch (error) {
        console.log(error);
      }


    };

    const handleLayKhuyenmai = async () => {
      try {
        const params = {
          id_km: "ALL",
        };
        console.log(params)

        const response = await Khuyenmai(params);
        const res: Khuyenmai[] = response.khuyenmai;
        console.log(response)
        console.log(res)
        setKhuyenmai(res);
        res.map((km) => {
          //kiểm tra xem đang ở trang 1 phòng hay nhiều phòngg
          if (tenphong && check_in && check_out && gia) {
            // cắt chuỗi ngày check_in để tạo biến type Date
            //tìm vị trí xuất hiện của kí tự '-' trong checkin
            let i = check_in.indexOf('-')
            //cắt chuỗi slice(vị trí start, finish)
            let str1 = check_in.slice(0, i)
            let str2 = check_in.slice(i + 1, i + 3)
            let str3 = check_in.slice(i + 4, i + 8)
            let str = str3 + '-' + str2 + '-' + str1

            let i2 = check_out.indexOf('-')
            //cắt chuỗi slice(vị trí start, finish)
            let str11 = check_out.slice(0, i2)
            let str22 = check_out.slice(i2 + 1, i2 + 3)
            let str33 = check_out.slice(i2 + 4, i2 + 8)
            let str4 = str33 + '-' + str22 + '-' + str11
            setStrCheckin(str)
            setStrCheckout(str4)
            // console.log("i",i)
            // console.log("str1",str1)
            // console.log("str2",str2)
            // console.log("str3",str3)

            // const str = '2023-11-15';
            d1 = new Date(km.start)
            d2 = new Date(km.finish)
            d1.setHours(0)
            d1.setMinutes(0)
            d1.setSeconds(0)
            d1.setMilliseconds(0)

            d2.setHours(0)
            d2.setMinutes(0)
            d2.setSeconds(0)
            d2.setMilliseconds(0)

            let d3 = new Date(str)
            d3.setHours(0)
            d3.setMinutes(0)
            d3.setSeconds(0)
            d3.setMilliseconds(0)

            let d4 = new Date(str4)
            d4.setHours(0)
            d4.setMinutes(0)
            d4.setSeconds(0)
            d4.setMilliseconds(0)
            // console.log("d", d)
            // console.log("check_in", check_in)
            let temp = (Number(d4.getDate()) - Number(d3.getDate()))
            setSongay(temp)

            // nếu d3(checkin) trong khoảng tg khuyến mãi 
            // getTime => chuỗi ngày tháng năm giờ phút giây miligiaay == số
            console.log(d1.getTime())
            if (d3.getTime() >= d1.getTime() && d3.getTime() <= d2.getTime()) {

              console.log("d", temp)
              setPhantramKM(km.phantram)
              setTongtien((gia * temp) - ((gia * temp) * (km.phantram / 100)))

            } else {
              setTongtien(gia * temp)
              console.log("temp", temp)
              console.log("d", temp)
            }

          }
        })
      } catch (error) {
        console.log(error);
      }
    };




    handleCheckDate(new Date())

    if (id_phong != 0) {
      handlephong()
    } else {
      handlephong2()
    }
    handleLoaiphong()
    handleLayKhuyenmai()

    // if (tenphong && check_in) {
    //   let i = check_in.indexOf('-')
    //   let str1 = check_in.slice(0, i)
    //   let str2 = check_in.slice(i + 1, i + 3)
    //   let str3 = check_in.slice(i + 4, i + 8)
    //   let str = str3 + '-' + str2 + '-' + str1
    //   console.log("i", i)
    //   console.log("str1", str1)
    //   console.log("str2", str2)
    //   console.log("str3", str3)

    //   // const str = '2023-11-15';
    //   let d = new Date(str)
    //   console.log("d", d)
    //   console.log("check_in", check_in)


    // setPhantramKM(0)
    // khuyenmai.map((km) => {
    //   d1 = new Date(km.start)
    //   d2 = new Date(km.finish)
    //   d1.setHours(0)
    //   d1.setMinutes(0)
    //   d1.setSeconds(0)
    //   d1.setMilliseconds(0)

    //   d2.setHours(0)
    //   d2.setMinutes(0)
    //   d2.setSeconds(0)
    //   d2.setMilliseconds(0)

    //   let d3 = new Date(checki)
    //   d3.setHours(0)
    //   d3.setMinutes(0)
    //   d3.setSeconds(0)
    //   d3.setMilliseconds(0)
    //   console.log("d1", d1)
    //   console.log("d2", d2)
    //   console.log("d3", d3)

    //   if (d3.getTime() >= d1.getTime() && d3.getTime() <= d2.getTime()) {
    //     console.log('true')
    //     setPhantramKM(km.phantram)
    //   }
    // })
    // }


  }, []);

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={roboto.className}>
      <Header />
      {/* <hr className="border-green-500 mt-4 w-96 m-auto" /> */}
      <Box >
        <Stepper activeStep={activeStep} sx={{ width: '70%', paddingTop: '2%', margin: 'auto' }}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep == 0 ? (
          <div>

            <div className="grid w-8/12 m-auto mt-6">
              <div className="grid grid-cols-7 mt-5 ">
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
                    <input onChange={(e) => setRoll(e.target.value)} type="radio" value="datchominh" name='roll' checked={roll === "datchominh"} /> Đặt cho mình
                    <input onChange={(e) => setRoll(e.target.value)} type="radio" value="datchonguoithan" name='roll' checked={roll === "datchonguoithan"} /> Đặt cho người khác
                    {/* <input type="radio" />  Đặt cho mình
                          <input type="radio"/> Đặt cho người khác */}
                  </div>
                  <p className="font-semibold mt-5 text-xl" >Ghi chú:</p>
                  <textarea placeholder="Note yêu cầu" className="bg-gray-100 w-full mt-3 h-20 outline-none p-3" value={ghichu} onChange={(e) => setGhichu(e.target.value)} />

                  {
                    roll === 'datchonguoithan' ? (
                      <div className="pt-5">
                        <p className="text-xl font-semibold">Thông tin khách:</p>
                        <div className="shadow-md rounded-b-lg p-4 space-y-3">
                          <div className="flex space-x-10">
                            <p className="font-semibold pt-3">Họ và tên:</p>
                            <input type="text" className="border-gray-300 border-2 mt-2 w-8/12 h-8 pl-2 rounded-md outline-none"
                              value={hotenkhacho} onChange={(e) => setHotenkhacho(e.target.value)} />
                          </div>

                          <div className="flex space-x-10">
                            <p className="font-semibold pt-1">Số CMND: </p>
                            <input className="border-gray-300 border-2 h-8 rounded-md pl-2 outline-none"
                              value={CCCDkhacho} onChange={(e) => setCCCDkhacho(e.target.value)} />

                          </div>
                          <div className="flex space-x-3 pt-3">
                            <p className=" font-semibold">Số điện thoại:</p>
                            <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2 outline-none"
                              value={SDTkhacho} onChange={(e) => setSDTkhacho(e.target.value)} />
                          </div>
                        </div>
                      </div>
                    ) : ""
                  }
                </div>
                <div className="col-span-3 shadow-inner bg-gray-50 rounded-md">
                  <div className="text-center pt-5">
                    <p className="font-semibold text-lg">The Kupid Homestay</p>
                    <p className="text-sm">47 Đặng Thái Thân, Phường 3, Đà Lạt</p>
                  </div>
                  <div className=" mt-5 p-[3%] h-32 text-slate-700 text-base space-y-4">
                    <div className="flex ">
                      <p className="text-sm basis-2/5">Ngày nhận phòng: </p>
                      {check_in ?
                        <p className="text-base font-semibold">{check_in}, Từ 14:00</p>

                        :
                        <div className="space-y-1">
                          <DatePicker
                            className="outline-none border-b-2 border-gray-300"
                            // type="datetime"
                            selected={checkin}
                            minDate={new Date()}
                            // maxDate={new Date("10-30-2023")}
                            // onChange={(date: Date) => setStartDate(date)}
                            onChange={(date: Date) => handleCheckDate((date))}
                            dateFormat="dd/MM/yyyy"
                          />
                          {/* <input type="Date" className="text-base" /> */}
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
                          <DatePicker
                            className="outline-none border-b-2 border-gray-300"
                            // type="datetime"
                            selected={checkout}
                            minDate={mincheckout}
                            // maxDate={new Date("10-30-2023")}
                            // onChange={(date: Date) => setStartDate(date)}
                            onChange={(date: Date) => setCheckout((date))}
                            dateFormat="dd/MM/yyyy"
                          />
                          {/* <input type="Date" className="text-base" /> */}
                          <p className="text-xs font-semibold">Trước 12:00</p>
                        </div>
                      }
                      {/* <p className="text-base">{check_out}, Trước 12:00</p> */}
                    </div>
                  </div>
                  <div className=" m-3 text-lg flex">
                    <p className="basis-40 font-semibold">Loại phòng</p>

                    {tenphong ?
                      <p className="  text-lg"> {tenloaiphong} - {songuoi} người</p>

                      :
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={loaiphong.map((option) => option.tenloaiphong + ' - ' + option.songuoi + ' người')}
                        value={valueCombobox1}
                        onChange={(event: any, newValue: string | null) => {
                          {

                            newValue ?
                              handleLayLoaiphongtheoTenLP(newValue)
                              : null
                          }
                        }}
                        sx={{ width: 300 }}

                        renderInput={(params) => <TextField {...params}
                          label="Tên loại phòng"
                        />}
                      />
                    }
                  </div>

                  <div className="font-semibold m-5 text-lg flex">
                    <p className="basis-40 ">Phòng</p>

                    {tenphong ?
                      <>
                        <p className="font-semibold  text-lg"> {tenphong}</p>

                      </>
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
                              : null
                          }
                        }}
                        sx={{ width: 300 }}

                        renderInput={(params) => <TextField {...params}
                          label="Tên phòng"
                        />}
                      />
                    }
                  </div>
                  <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Số người ở:</p>
                    <input type="number" className="border-b-2 border-gray-300 outline-none"
                      value={songuoio} onChange={(e) => setSonguoio(e.target.valueAsNumber)} />
                  </div>
                  {/* <p className="font-semibold m-5 text-lg">Phòng {tenphong}</p> */}

                  {loaiphong1.map((item, index) => {
                    //đặt nhiều phòngg
                    return (
                      <>
                        {/* <div className="flex m-5">
                          <p className="basis-40 text-slate-500">Khách/phòng</p>
                          <p className="">{item.songuoi} khách</p>
                        </div> */}
                        <div className="flex m-5">
                          <p className="basis-40 text-slate-500">Giá</p>
                          <p className="">{item.gia}đ</p>
                        </div>
                        <div className="flex m-5">
                          <p className="basis-40 text-slate-500">Giảm giá</p>
                          <p>{phantramKM}%</p>
                        </div>

                        <div className="flex m-5">
                          <p className="basis-40 font-semibold text-lg">Tổng tiền</p>
                          <p className="font-semibold text-lg">
                            {
                              tongtien
                              // item.gia ? ((item.gia * songay) - ((item.gia * songay) * (phantramKM / 100))) : null
                            }
                          </p>
                        </div>
                      </>
                    )
                  })}
                  {tenphong ?
                    <>
                      {/* đặt 1 phòng */}
                      {/* <div className="flex m-5">
                        <p className="basis-40 text-slate-500">Khách/phòng</p>
                        <p className="">{songuoi} khách</p>
                      </div> */}
                      <div className="flex m-5">
                        <p className="basis-40 text-slate-500">Giá</p>
                        <p className="">{gia}đ</p>
                      </div>
                      <div className="flex m-5">
                        <p className="basis-40 text-slate-500">Giảm giá</p>

                        <p>{phantramKM}%</p>
                      </div>

                      <div className="flex m-5">
                        <p className="basis-40 font-semibold text-lg">Tổng tiền</p>
                        <p className="font-semibold text-lg">
                          {
                            tongtien
                            // gia ? ((gia * songay) - ((gia * songay) * (phantramKM / 100))) : null
                          }
                        </p>
                      </div>
                    </>
                    : null
                  }

                </div>
              </div>

            </div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop: '2%', margin: 'auto' }}>
              <Button
                color="inherit"
                disabled={activeStep == 0}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ color: '#33cc33' }}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : null

        }


        {activeStep == 1 ? (
          <div>

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
                    <p className="">{hotenkhacho}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="">Số điện thoại:</p>
                    <p className="">{SDTkhacho}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="">CCCD:</p>
                    <p className="">{CCCDkhacho}</p>
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
                        {check_in ?
                          <p className="font-semibold">{check_in}</p>
                          :
                          <p className="">{checkin.getDate() + "-" + (checkin.getMonth() + 1) + "-" + checkin.getFullYear()}</p>
                        }
                      </div>
                      <div className="flex space-x-2">
                        <p className="">Tên phòng:</p>
                        {valueCombobox ?
                          <p className="font-semibold">{valueCombobox}</p>
                          :
                          <p className="font-semibold">{tenphong}</p>

                        }
                      </div>
                      <div className="flex space-x-2">
                        <p className="">Số người ở:</p>
                        <p className="font-semibold">{songuoio} người</p>
                      </div>
                    </div>
                    <div className="basis-3/5 space-y-2">
                      <div className="flex space-x-2 ">
                        <p className="">Ngày trả:</p>
                        {check_out ?
                          <p className="font-semibold">{check_out}</p>
                          :
                          <p className="">{checkout.getDate() + "-" + (checkout.getMonth() + 1) + "-" + checkout.getFullYear()}</p>
                        }                      </div>
                      <div className="flex space-x-2 ">
                        <p className="">Loại phòng:</p>
                        {tenloaiphong && songuoi ?
                          <p className="font-semibold">{tenloaiphong} - {songuoi} người</p>
                          :
                          <p className="font-semibold">{valueCombobox1}</p>

                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5 shadow-inner bg-[#F8F8FF] rounded-md ">
                <div className="pl-[5%] p-3 space-y-2 space-x-2">
                  <div className="flex space-x-2 text-2xl font-semibold">
                    <p className=" ">Ghi chú:</p>
                    <p>{ghichu}</p>
                  </div>
                </div>
              </div>

              <div className=" mt-5 shadow-inner bg-[#F8F8FF] rounded-md ">
                <div className="pl-[5%] p-3 space-y-2 space-x-2">
                  <div className="flex space-x-2 text-2xl font-semibold">
                    <p className=" ">Tổng tiền:</p>
                    <p className="">{tongtien} VNĐ</p>
                  </div>
                </div>
              </div>
              <button className="bg-green-300" onClick={handleDatphong}>hoàn thành</button>
              <input type="checkbox" className="mt-6 ml-5 mr-2 text-slate-700 font-bold" /><label className="text-slate-500 font-bold">Chắn chắn rằng tất cả thông tin trên trang này là chính xác trước khi thanh toán.</label>

            </div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop: '2%', margin: 'auto' }}>
              <Button
                color="inherit"
                disabled={activeStep == 1}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ color: '#33cc33' }}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : null

        }
        {/* (
        <div>
          <Buoc2
          // hotenkhacho={hotenkhacho || ''} CCCDkhacho={CCCDkhacho || ''} SDTkhacho={SDTkhacho || ''} roll={roll || ''}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop: '2%', margin: 'auto' }}>
            <Button
              color="inherit"
              disabled={activeStep == 1}
              onClick={handleBack}
              sx={{ mr: 5 }}
            >
              Trở về
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ color: '#33cc33' }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
            </Button>
          </Box>
        </div>
        ) */}

      </Box>

      <Footer />
    </div>

  )
}
export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  // const {phoneNumber} = context.query;

  const { id_phong } = context.query;

  const { tenphong } = context.query;
  const { gia } = context.query;
  const { songuoi } = context.query;
  const { check_in } = context.query;
  const { check_out } = context.query;
  const { tenloaiphong } = context.query;
  const { hotenkhacho } = context.query;
  const { CCCDkhacho } = context.query;
  const { SDTkhacho } = context.query;
  const { roll } = context.query;

  return {
    props: {
      id_phong: id_phong as unknown as number | null,
      tenphong: tenphong as unknown as string | null,
      gia: gia as unknown as number | null,
      songuoi: songuoi as unknown as number | null,
      check_in: check_in as string | null,
      check_out: check_out as string | null,
      tenloaiphong: tenloaiphong as string | null

      // hotenkhacho: hotenkhacho as string | null,
      // CCCDkhacho: CCCDkhacho as string | null,
      // SDTkhacho: SDTkhacho as string | null,
      // roll: roll as string | null


    }
  }
}
export default datphong;