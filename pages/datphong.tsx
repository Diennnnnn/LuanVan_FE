import B1 from "@/Components/B1";
import Buoc1 from "@/Components/Buoc1";
import Buoc2 from "@/Components/Buoc2";
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
  // const [roll, setRoll] = useState('')
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
            <Buoc2 
            // hotenkhacho={hotenkhacho || ''} CCCDkhacho={CCCDkhacho || ''} SDTkhacho={SDTkhacho || ''} roll={roll || ''}
            />
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