import Slider from "react-slick";
import Card from "@/Components/Card";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useEffect, useState } from 'react';
import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Card1 from "@/Components/Card1";
import Footer from "@/Components/Footer";
import { GetServerSideProps } from "next";
import { Danhmuccsvc, Dsthietbi, Layhinhanh_IdPhong, Loaiphong, Phong, Vitri } from "@/Service/userService";
import router from "next/router";
const data = [
  { img: "/hinh3.jpg" },
  { img: "/hinh2.jpg" },
  { img: "/hinh1.jpg" },
  { img: "/hinh4.jpg" },
  { img: "/hinh5.jpg" },
  { img: "/hinh6.jpg" },
  { img: "/hinh8.jpg" },
  { img: "/hinh10.jpg" },
  { img: "/hinh11.jpg" },
  { img: "/hinh12.jpg" },
]
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})

interface codeProductProps {
  id_phong: number | null;
  id_lp: number | null
  check_in: string | null
  check_out: string | null
}

const chitiet = ({ id_phong, id_lp, check_in, check_out }: codeProductProps) => {
  // console.log(id_phong);
  // console.log(id_lp);
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
  interface Vitri {
    id: number;
    khu: string;
    tang: number;
    dientich: number;
  }

  interface Dsthietbi {
    id: number;
    id_CSVC: number;
    id_Phong: number;
    soluong: number;
    thoigianbatdau: Date;
  }
  interface DanhmucCSVC {
    id: number;
    tenCSVC: string;
    giagoc: number;
    soluong: number;
    thoigianmua: Date
  }
  interface HinhanhPhong {
    id: number;
    hinhanh: string;
    id_Phong: number;

  }
  const [phong, setPhong] = useState<Phong[]>([]);
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);
  const [vitri, setVitri] = useState<Vitri[]>([]);
  const [dstb, setDSTB] = useState<Dsthietbi[]>([]);
  const [danhmuccsvc, setDanhmuccsvc] = useState<DanhmucCSVC[]>([]);
  const [id_VT1, setId_VT1] = useState(Number);
  const [mota, setMota] = useState("");
  const [tenphong, setTenphong] = useState("");
  const [tenloaiphong, setTenloaiphong] = useState("");
  const [gia, setGia] = useState(Number);
  const [songuoi, setSonguoi] = useState(Number);
  const [khu, setKhu] = useState("");
  const [tang, setTang] = useState(Number);
  const [dientich, setDientich] = useState(Number);
  const [id_CSVC, setId_CSVC] = useState(Number);
  // const [tenCSVC, setTenCSVC] = useState({arr[]});
  const [tenCSVC, setTenCSVC] = useState<string[]>([]);
  const [hinhanhPhong, setHinhanhPhong] = useState<HinhanhPhong[]>([]);

  const [nav1, setNav1] = useState<any>()
  const [nav2, setNav2] = useState<any>()
  // const [tenCSVC, setNav2] = useState<any>()
  // const tenCSVC: string[] = [""]
  const setting = {
    arrows: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const handleDatphong = async () => {
    router.push({
      pathname: '/datphong',
      query: { id_phong: id_phong, tenphong: tenphong, gia: gia, songuoi: songuoi, tenloaiphong: tenloaiphong, check_in: check_in, check_out: check_out } //ten bien: gia tri truyen vao

    })
  }

  useEffect(() => {

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
          setMota(res.mota),
            setTenphong(res.tenphong)

          //lay vi tri
          const params = {
            id_vt: res.id_VT,

          };
          console.log("params", params)
          const response = await Vitri(params);
          const res1: Vitri[] = response.vt; //gán dữ liệu vào res
          console.log(response)
          console.log(res)
          setVitri(res1); //gán res vào setPhong
          res1.map((res) => {
            setKhu(res.khu),
              console.log("khu:", khu),
              setTang(res.tang),
              setDientich(res.dientich)
          })


        })
      } catch (error) {
        console.log(error);
      }
    };

    const handleLoaiphong = async () => {
      try {
        const params = {
          id_lp: id_lp,
        };
        console.log(params)
        const response = await Loaiphong(params);
        const res: Loaiphong[] = response.loaiphong;
        console.log(response)
        setLoaiphong(res);
        res.map((res) => {
          setGia(res.gia)
          setSonguoi(res.songuoi)
          setTenloaiphong(res.tenloaiphong)
          // console.log("id", id)
        })

      } catch (error) {
        console.log(error);
      }


    };




    const handledsthietbi = async () => {
      try {
        const params = {
          id_phong: id_phong,

        };
        console.log(params)
        const response = await Dsthietbi(params);
        const res: Dsthietbi[] = response.dstb; //gán dữ liệu vào res
        // console.log(response)
        console.log("thiet bi", res)
        setDSTB(res); //gán res vào setPhong
        res.map(async (res) => {
          setId_CSVC(res.id_CSVC),
            console.log("id,csvc", id_CSVC)

          const params = {
            id_dmcsvc: res.id_CSVC,

          };
          console.log(params)
          const response = await Danhmuccsvc(params);
          const res1: DanhmucCSVC[] = response.dmcsvc; //gán dữ liệu vào res
          // console.log(response)
          console.log(res1)
          setDanhmuccsvc(res1); //gán res vào setPhong
          res1.map((res) => {
            (tenCSVC).push(res.tenCSVC)
          })
          console.log(tenCSVC)
        })

      } catch (error) {
        console.log(error);
      }


    };

    const Layhinhanh_IdPhongg = async () => {
      try {
        const params = {
          id_Phong: id_phong,
        };
        console.log(params)
        const response = await Layhinhanh_IdPhong(params);
        const res: HinhanhPhong[] = response.layha;
        console.log(response)
        console.log(res)
        setHinhanhPhong(res);
        // res.map((res)=>{
        //   setId(res.id)
        //   console.log("id",id)
        // })
        // console.log(phongs)

      } catch (error) {
        console.log(error);
      }
    };

    handleLoaiphong()
    handlephong();
    handledsthietbi();
    Layhinhanh_IdPhongg();
    // handledmcsvc();
  }, [])

  return (

    <div className={roboto.className}>
      <Header></Header>
      <div className="relative pt-10 w-9/12 m-auto ">
        <p className="text-3xl font-semibold text-center">{tenphong}</p>

        <div className="grid grid-cols-5 w-full h-auto pt-6  ">
          <div className="col-span-3 h-[100%]  ">
            <center>

              <div className="">
                <Slider className="  "
                  autoplay={true}
                  autoplaySpeed={3000}
                  arrows={false}
                  // fade={true}
                  asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                  {hinhanhPhong.map((item, index) => <Card1 key={index} img={new Buffer(item.hinhanh, "base64").toString("binary")} />)}
                  {/* {data.map((el, index) => <Card1 key={index} img={el.img}></Card1>)} */}
                </Slider>
              </div>

              <div className=" w-5/6 pt-5 h-32">
                <Slider className=""
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2 || null)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={true}
                  dots={true}
                  arrows={false}
                >
                  {hinhanhPhong.map((item1, index1) => <Card key={index1} img={new Buffer(item1.hinhanh, "base64").toString("binary")} />)}
                  {/* {data.map((el, index) => <Card key={index} img={el.img}></Card>)} */}

                </Slider>
              </div>
            </center>
          </div>



          <div className="pl-10 col-span-2 ">
            <div className=" space-y-2">
              <p className="font-semibold text-2xl">Mô tả</p>
              <p className="text-xl text-justify leading-loose">{mota}</p>
              <li className="text-lg italic ">Số người ở: <span className="text-green-500">{songuoi}người</span></li>
              <li className="text-lg italic ">Loại phòng: <span className="text-green-500">{tenloaiphong}</span></li>
              <li className="text-lg italic ">Giá: <span className="text-green-500">{gia}/đêm</span></li>
              <li className="text-lg italic">Khu: {khu}; Tầng: {tang}; Diện tích: {dientich}m2</li>
            </div>
            <div className=" space-y-2 mt-3">
              <p className="font-semibold text-2xl">Tiện ích có sẵn</p>
              <div className="grid grid-cols-2  h-16 list-outside text-lg">

                <div className="">
                  {
                    tenCSVC.map((item, index): React.ReactNode => {
                      return (
                        <><li key={index}>
                          {tenCSVC[index]}
                        </li>
                        </>

                      )
                    })
                  }

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center mt-6"><button onClick={handleDatphong} className="border-2 border-green-600 text-xl uppercase h-10 w-56 rounded-lg hover:bg-green-600">đặt phòng</button></div>
      </div>

      <Footer />
    </div>


  )

}
export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  // const {phoneNumber} = context.query;


  const { id_phong } = context.query;
  const { id_lp } = context.query;
  const { check_in } = context.query;
  const { check_out } = context.query;


  return {
    props: {
      id_phong: id_phong as unknown as number | null,
      id_lp: id_lp as unknown as number | null,
      check_in: check_in as string | null,
      check_out: check_out as string | null

    }
  }
}
export default chitiet;
