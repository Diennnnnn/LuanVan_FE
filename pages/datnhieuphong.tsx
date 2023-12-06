import B1 from "@/Components/B1";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Phong } from "@/Service/userService";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { useEffect, useState } from "react";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
interface codeProductProps {
  id_phong: Array<number> | null,
  check_in: string | null
  check_out: string | null
}
const Datnhieuphong = ({ id_phong, check_in, check_out }: codeProductProps) => {

  interface Phong {
    //tên giống csdl
    id: number;
    id_LP: number;
    id_VT: number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  let idpArr: number[] = []

  const [phong, setPhong] = useState<Phong[]>([]);

  const [roll, setRoll] = useState('')
  const [arrIdp, setArrIdp] = useState(Array<number>)

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

  useEffect(() => {

    // const params = new URLSearchParams(window.location.search)
    // let vnp_PayDate = params.get('id_phong')
    //   console.log('asasd',vnp_PayDate)

    console.log(id_phong)
    if (id_phong) {
      idpArr = id_phong
      id_phong.map((idp, index)=>{
        return(
          <div key={index}>
            {phong.map((p)=> p.id === Number(idp)? p.tenphong : null)}
          </div>
        )
      })
    }
    const handlephong1 = async () => {
      try {
        const params = {
          id_phong: 'ALL',
        };
        // console.log(params)
        const response = await Phong(params);
        const res: Phong[] = response.phong; //gán dữ liệu vào res

        setPhong(res); //gán res vào setPhong
        res.map((item) => {
          id_phong?.map((p) => {
            if (Number(p) === item.id) {
              setArrIdp(id_phong)
              console.log('cascascas')

            }
          })

        })

        // console.log('arrp', arrp)

      } catch (error) {
        console.log(error);
      }
    };

    handlephong1()
  }, [])

  return (
    <div className={roboto.className}>
      <Header />
      <hr className="border-green-500 mt-4 w-96 m-auto" />
      <div>
       {
       id_phong ?
       id_phong.map((idp, index)=>{
        return(
          <div key={index}>
            {phong.map((p)=> p.id === Number(idp)? p.tenphong : null)}
          </div>
        )
      })
      : null
       }
      </div>
    </div>

  )
}

export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  // const {phoneNumber} = context.query;

  const { id_phong } = context.query;
  const { check_in } = context.query;
  const { check_out } = context.query;


  return {
    props: {
      id_phong: id_phong as any | null,
      check_out: check_out as string | null,
      check_in: check_in as string | null,


    }
  }
}
export default Datnhieuphong;