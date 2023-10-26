import B1 from "@/Components/B1";
import Buoc1 from "@/Components/Buoc1";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Datphong } from "@/Service/userService";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import React from "react";
import { useEffect, useState } from "react";
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


}
const datphong = ({ id_phong, tenphong, gia, songuoi, tenloaiphong, check_in, check_out }: codeProductProps) => {
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
  const [roll, setRoll] = useState('')
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [step, setStep] = useState("Buoc1");
  const [hoten, setHoten] = useState("");
  const [id_KH, setId_KH] = useState(Number);
  const [id_Phong, setId_Phong] = useState(Number);
  const [ngaydat, setNgaydat] = useState(new Date);
  const [songuoi1, setSonguoi1] = useState(Number);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [activeStep, setActiveStep] = React.useState(0);


  //
  // const [check_in1, setCheck_in1] = useState("");
  // const [check_out1, setCheck_out1] = useState("");

  const handleDatphong = async () => {
    console.log("hoten", hoten)
    console.log("id_KH", id_KH)
    console.log("id_phong:", id_phong)
    console.log("ngaydat", new Date)
    console.log("check_in", check_in)
    console.log("check_out", check_out)
    console.log("songuoi1", songuoi1)

    if (id_phong && check_in && check_out && songuoi) {
      let res = await Datphong(
        {
          id_KH: id_KH,
          id_phong: id_phong,
          ngaydat: ngaydat,
          check_in: check_in,
          check_out: check_out,
          songuoi: songuoi,


        }
      );
      if (res && res.errCode === 0) {
        alert("Đặt lịch thành công")
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
  useEffect(() => {
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
        setHoten(res.hotenKH)
        setId_KH(res.id)
      })

    }

  }, []);

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={roboto.className}>
      <Header />
      {/* <hr className="border-green-500 mt-4 w-96 m-auto" /> */}
      <Box >
        <Stepper activeStep={activeStep} sx={{ width: '70%', paddingTop:'2%', margin:'auto' }}>
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
            <Buoc1 tenphong={tenphong || ''} gia={gia || 0} songuoi={songuoi || 0} id_phong={id_phong || 0} check_in={check_in || ''} check_out={check_out || ''} tenloaiphong={tenloaiphong || ''} />
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop:'2%', margin:'auto'}}>
              <Button
                color="inherit"
                disabled={activeStep == 0}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{color:'#33cc33'}}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : (
          <div>
            <div className='bg-red-400'>cfvgbhjk</div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop:'2%', margin:'auto'}}>
              <Button
                color="inherit"
                disabled={activeStep == 1}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{color:'#33cc33'}}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        )
        }

        {/* {activeStep == 1 ? (
          <div>
            <div className='bg-red-400'>cfvgbhjk</div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop:'2%', margin:'auto'}}>
              <Button
                color="inherit"
                disabled={activeStep == 1}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{color:'#33cc33'}}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : ''
        } */}
        {/* {activeStep == 2 ? (
          <div>
            <div className='bg-blue-400'>cfvgbhjk</div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop:'2%', margin:'auto'}}>
              <Button
                color="inherit"
                disabled={activeStep == 2}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{color:'#33cc33'}}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : ''
        }
        {activeStep == 3 ? (
          <div>
            <div className='bg-gray-400'>cfvgbhjk</div>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', paddingTop:'2%', margin:'auto'}}>
              <Button
                color="inherit"
                disabled={activeStep ==3}
                onClick={handleBack}
                sx={{ mr: 5 }}
              >
                Trở về
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{color:'#33cc33'}}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Tiếp theo'}
              </Button>
            </Box>
          </div>
        ) : ''
        }
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </div>
        ) : ''
        } */}

      </Box>

      {/* <Buoc1  tenphong={tenphong || ''} gia={gia || 0} songuoi={songuoi || 0} id_phong={id_phong || 0} check_in={check_in || ''} check_out={check_out || ''} /> */}

      {/* <div className="grid w-8/12 m-auto mt-6">
          <div className="grid grid-cols-6 mt-5 ">
            <div className="col-span-4 m-3 ">
              <p className="font-semibold text-2xl">Chi tiết liên hệ</p>
              <div className="shadow-lg  p-5">
                {
                  khachhang.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className="font-semibold">Họ và tên:</p>
                        <input
                          type="text"
                          className="border-gray-300 border-2 mt-2 pl-2 w-10/12 h-8 rounded-md"
                          value={item.hotenKH}
                        />
                        <div className="flex mt-4 ">
                          <p className="pr-[1%] font-semibold">Số CMND: </p>
                          <input className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" value={item.CMND} />
                          <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                          <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2 w-40" value={item.SDT} />
                        </div>
                        <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md font-normal h-8 w-5/12" value={item.email} /></p>
                      </div>
                    )
                  })
                }
              </div>
              <div className="bg-gray-200 h-14 shadow-md rounded-b-lg space-y-5 space-x-10 pl-5 ">
                <input onChange={onChange} type="radio" value="datchominh" name='roll' checked={roll === "datchominh"} /> Đặt cho mình
                <input onChange={onChange} type="radio" value="datchonguoithan" name='roll' checked={roll === "datchonguoithan"} /> Đặt cho người khác
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
                  {check_in ?
                    <p className="text-base">{check_in}, Từ 14:00</p>

                    :
                    <input type="Date" className="text-base" />

                  }
                </div>

                <div className="flex">
                  <p className="text-sm basis-44">Ngày trả phòng: </p>
                  <p className="text-base">{check_out}, Trước 12:00</p>
                </div>
              </div>
              <p className="font-semibold m-5 text-lg">Phòng {tenphong}</p>
              <div className="flex m-5">
                <p className="basis-40 text-slate-500">Khách/phòng</p>
                <p className="">{songuoi} khách</p>
              </div>
              <div className="flex m-5">
                <p className="basis-40 text-slate-500">Giá</p>
                <p className="">{gia}đ</p>
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

        </div> */}
      {/* onClick={()=>setStep("Buoc2")} */}
      {/* <div className="text-center mt-6"><button onClick={handleDatphong} className="border-2 border-green-600 text-xl uppercase h-10 w-56 rounded-lg hover:bg-green-600">Tiếp tục</button></div> */}

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


  return {
    props: {
      id_phong: id_phong as unknown as number | null,
      tenphong: tenphong as unknown as string | null,
      gia: gia as unknown as number | null,
      songuoi: songuoi as unknown as number | null,
      check_in: check_in as string | null,
      check_out: check_out as string | null,
      tenloaiphong: tenloaiphong as string | null

    }
  }
}
export default datphong;