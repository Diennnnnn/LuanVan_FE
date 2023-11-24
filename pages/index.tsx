import Header from "@/Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faTree, faWifi, faFire, faUtensils, faSquareParking, faGift, faMartiniGlass, faBed } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from "react";
import { Montserrat, Roboto } from 'next/font/google'
import Link from "next/link";
import Footer from "@/Components/Footer";
import { Phong, handleLayPhieudat_idPhong } from "@/Service/userService";
import Rooms from "@/Components/Rooms";
import B1 from "@/Components/B1";
import Blog from "@/Components/Blog";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})

const index = () => {
  interface Phong {
    id: number;
    id_LP: number;
    id_VT: number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  interface Phieudat {
    id: number;
    id_KH: number;
    id_Phong: number;
    ngaydat: Date;
    check_in: Date;
    check_out: Date;
    songuoi: number,
    tongtien: number,
    thanhtoan: string,
    trangthai: string,
    hotennguoio: string,
    SDT_nguoio: string,
    CCCD_nguoio: string,
    ghichu: string,
    maGD: number,
    thoigianGD: string
    // dieukien: string
  }
  const [phong, setPhong] = useState<Phong[]>([]);
  const [id, setId] = useState(Number);
  const [mincheckout, setMincheckout] = useState(new Date())
  const [checkin, setCheckin] = useState(new Date())
  const [checkout, setCheckout] = useState(new Date())
  // console.log(phong)
  const arrp: number[] = []
  const [dsphong, setDsphong] = useState([
    {
      id: 0,
      id_LP: 0,
      id_VT: 0,
      tenphong: '',
      trangthai: '',
      mota: ''
    },
  ])
  const handleCheckDate = (checki: Date) => {
    setCheckin(checki)
    let datecheckout = new Date(checki)
    datecheckout.setDate(datecheckout.getDate() + 1)
    setMincheckout(datecheckout)
    setCheckout(datecheckout)
  }
  useEffect(() => {
    //logout khi tắt tab

    // window.addEventListener("beforeunload", function (e) {
    //       localStorage.removeItem("khachhang");

    // }, false);

    const handleCheckDate = () => {
      setCheckin(new Date)
      let datecheckout = new Date()
      datecheckout.setDate(datecheckout.getDate() + 1)
      setMincheckout(datecheckout)
      setCheckout(datecheckout)
      handlekiemtrangay(new Date(),datecheckout)
    }
    // const handleTinhsoNg = (sn: number, sp: number) =>{
    //     for(let i = 0; i<=)
    // }

    const handlePhong = async () => {
      try {
        const params = {
          id_phong: "ALL",
        };
        // console.log(params)
        const response = await Phong(params);
        const res: Phong[] = response.phong;
        // console.log(res)
        setPhong(res);
        res.map((res) => {
          setId(res.id)
          // console.log("id", res.mota)
        })
        // console.log(phongs.)

      } catch (error) {
        console.log(error);
      }
    };
    handleCheckDate()
    handlePhong();
  }, [])

  const slides = [
    {
      url: '../hinh2.jpg'
    },
    {
      url: '../hinh14.png'
    },
    {
      url: '../hinh12.jpg'
    },
    {
      url: '../hinh10.jpg'
    },
    {
      url: '../hinh13.jpg'
    },
    {
      url: '../hinh11.jpg'
    },
    {
      url: '../hinh9.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  const handleCheckNgayCO = (co: Date) => {
    let d = new Date(co)
    setCheckout(d)
    handlekiemtrangay(checkin, d)
    console.log(checkin)
  }

  const handlekiemtrangay = async (ci: Date, ck: Date) => {
    arrp.slice(0, arrp.length)

    dsphong.splice(0, dsphong.length)

    setCheckout(ck)
    let start = new Date(ci)
    let end = new Date(ck)
    start.setHours(0)
    start.setMinutes(0)
    start.setSeconds(0)
    start.setMilliseconds(0)

    end.setHours(0)
    end.setMinutes(0)
    end.setSeconds(0)
    end.setMilliseconds(0)
    // console.log('das', start)
    // console.log('das', end)

    try {
      const params = {
        id_phong: 'ALL',
      };
      // console.log(params)
      const response = await Phong(params);
      const res: Phong[] = response.phong; //gán dữ liệu vào res
      // console.log(response)
      setPhong(res); //gán res vào setPhong
      res.map(async (res) => {
        const params = {
          phieudat_idPhong: res.id,
        };
        // console.log(params)
        const response1 = await handleLayPhieudat_idPhong(params);
        const res1: Phieudat[] = response1.phieudat_idPhong; //gán dữ liệu vào res
        if (res1.length === 0) {
          let timvitri = arrp.findIndex((val) => val === res.id)
          if (timvitri === -1) {
            arrp.push(res.id)
            console.log("arrpush", arrp)
            const dsgheDD = {
              id: (res.id),
              id_LP: res.id_LP,
              id_VT: res.id_VT,
              tenphong: res.tenphong,
              trangthai: res.trangthai,
              mota: res.mota
            }
            // console.log(phong1)
            dsphong.push(dsgheDD)
            setDsphong([dsgheDD, ...dsphong])
            // setPhong1([dsgheDD, ...phong1])
          }
        }
        res1.map((i) => {
          let d1 = new Date(i.check_in)
          let d2 = new Date(i.check_out)
          console.log(i.maGD)
          d1.setHours(0, 0, 0, 0)
          d2.setHours(0, 0, 0, 0)
          if (
            (start.getTime() < d1.getTime() &&
              end.getTime() < d2.getTime())
            ||
            (start.getTime() > d1.getTime() &&
              end.getTime() > d2.getTime())
            ||
            (start.getTime() === d2.getTime() &&
              end.getTime() > d2.getTime())
          ) {

            // let timvitri = phong1.filter((dsgheDDs) => res.id === dsgheDDs.id)
            let timvitri = arrp.findIndex((val) => val === res.id)
            if (timvitri === -1) {
              arrp.push(res.id)

              const dsgheDD = {

                id: (res.id),
                id_LP: res.id_LP,
                id_VT: res.id_VT,
                tenphong: res.tenphong,
                trangthai: res.trangthai,
                mota: res.mota
              }
              // console.log('phong1', phong1)
              dsphong.push(dsgheDD)
              setDsphong([dsgheDD, ...dsphong])
              // setPhong1([dsgheDD, ...phong1])
            }
          }
        })



      })
      // console.log('â')

    } catch (error) {
      console.log(error);
    }

  };


  useEffect(() => {

    setTimeout(
      nextSlide, 2000);

  }, [nextSlide]);


  return (

    <div className={roboto.className}>
      <Header></Header>
      <center>
        <div className=" relative">
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="h-[450px]  w-[90%] bg-cover bg-center bg-[url('../public/hinh2.jpg')] rounded-xl mt-4 ">
            <div className="absolute inset-x-0 bottom-3">
              <form className="xl:flex xs:grid md:grid-cols-3 xs:grid-cols-2 justify-center items-center space-x-2  rounded-md bg-white xxl:w-[75%] w-[85%] xl:h-[80px] md:h-[130px] xs:h-[170px] shadow-xl ">
                <div className="">
                  <label className="absolute top-1 text-sm text-gray-400 ml-6 inline-block bg-white">Nhận phòng</label>
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
                  {/* <input id="startDate" type="date" placeholder="Nhận phòng " className="w-52 rounded-md h-12 border-solid border-gray-300 border-2 pl-2" /> */}
                </div>
                <div className=" ">
                  <label className="absolute top-1 text-sm text-gray-400 ml-6 inline-block bg-white">Trả phòng</label>
                  <DatePicker
                    className="outline-none border-b-2 border-gray-300"
                    // type="datetime"
                    selected={checkout}
                    minDate={mincheckout}
                    // maxDate={new Date("10-30-2023")}
                    // onChange={(date: Date) => setStartDate(date)}
                    onChange={(date: Date) => handleCheckNgayCO((date))}
                    dateFormat="dd/MM/yyyy"
                  />
                  {/* <input id="endDate" type="date" placeholder="Trả phòng" className="h-12 w-52 rounded-md border-solid border-2 border-gray-300  pl-2" /> */}
                </div>

                <button type="button" onClick={()=>console.log(checkout)}>Check</button>
                <div className="">
                  <input id="" type="number" placeholder="Số lượng khách" className=" h-12 xl:w-44 xs:w-52 rounded-md border-solid border-2 border-gray-300 pl-2" />
                </div>
                <div className=" ">
                  <input id="" type="number" placeholder="Số lượng phòng" className=" h-12 xl:w-44 xs:w-52 rounded-md border-solid border-2 border-gray-300  pl-2" />
                </div>
                <div className="">
                  <button className="w-52 border-solid border-2 border-[#33cc33] hover:bg-[#33cc33] h-12 rounded-md">Tìm phòng</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-10 w-11/12 h-[250px] ">
          <div className=" text-left pl-10 p-6 basis-5/12">
            {/* <div className="text-left w-11/12 float-right "> */}
            <p className=" lg:text-5xl md:text-4xl text-3xl ">The Kupid</p>
            <p className="text-[#33cc33] md:text-sm font-semibold pt-1 uppercase">D a L a t N o S i n g l e</p>
            <p className="pt-10  leading-relaxed ">Kupid là tên của vị thần tình yêu vì thế nơi đây được xem là chốn hẹn hò lãng mạn.</p>
            {/* </div> */}
          </div>
          <div className=" flex m-auto rounded-md space-x-3">
            <div className="xl:h-52 xl:w-52 lg:h-44 lg:w-44 md:h-32 md:w-32 h-36 w-36 rounded-md bg-cover bg-[url('../public/hinh1.jpg')] "></div>
            <div className="xl:h-52 xl:w-52 lg:h-44 lg:w-44 md:h-32 md:w-32 h-36 w-36 rounded-md bg-cover bg-[url('../public/nen.jpg')]"></div>
            <div className="xl:h-52 xl:w-52 lg:h-44 lg:w-44 md:h-32 md:w-32 h-36 w-36 rounded-md bg-cover bg-[url('../public/hinh5.jpg')]  "></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1  xl:w-[85%] md:w-[95%] md:mt-20 mt-44 ">
          <div className="col-span-1 border-r-2 border-green-200">
            <FontAwesomeIcon icon={faAward} size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Dịch vụ</div>
            <p className="mt-5 leading-loose text-base p-6">Với hệ thống phòng đạt chuẩn được thiết kế theo không gian mở nên tạo cảm giác gần gũi và thân thiện với thiên nhiên.</p>
          </div>

          <div className="col-span-1 border-r-2 border-green-200">
            <FontAwesomeIcon icon={faPaperPlane} size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Vị trí</div>
            <p className="mt-5 leading-loose text-base p-6">Nằm cách trung tâm thành phố Đà Lạt khoảng 3km, nếu di chuyển bằng xe máy sẽ mất 10 phút.
              Gần homestay có rất nhiều địa điểm tham quan và vui chơi nổi tiếng.
              Khoảng cách từ The Kupid đến sân bay Liên Khương là 30km và cách bến xe liên tỉnh Đà Lạt khoảng 4km.
            </p>
          </div>

          <div className="col-span-1">
            <FontAwesomeIcon icon={faTree} size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Không gian</div>
            <p className="mt-5 leading-loose text-base p-6">The Kupid homestay Đà Lạt được bao bọc bởi những rừng thông rộng lớn, bao la và hùng vĩ.
              Chính vì vậy nơi đây luôn có bầu không khí trong lành, mát mẻ và vô cùng thoải mái.
              Không gian nơi đây là sự kết hợp vô cùng hoàn hảo vừa lãng mạn, vừa mộng mơ mà vô cùng ấn tượng.
            </p>
          </div>
        </div>
      </center>

      <div className="grid lg:grid-cols-2 grid-cols-1  mt-20  lg:w-11/12 w-9/12 m-auto place-items-center ">
        <div className="col-span-1 lg:h-[450px] h-80 w-full bg-cover bg-center bg-[url('../public/hinh8.jpg')]"></div>
        <div className="col-span-1 lg:h-[550px]  w-full ">
          <div className="flex flex-col lg:h-[600px]">
            <div className=" bg-[#99CC99] pt-12 pl-[6%] rounded-tl-3xl">
              <p className="uppercase text-xl font-semibold text-green-900">sự dung hòa đầy ăn ý từ</p>
              <p className="uppercase text-3xl pt-5">thiên nhiên an lành và không gian cực đẹp</p>
              <p className="pt-8">Khuôn viên homestay được trang trí vô cùng ấn tượng và bắt mắt. Nơi đây bố trí một khu vườn riêng vớ rất nhiều sắc hoa rực rỡ, hương thơm ngát và tuyệt vời.</p>
            </div>
            <div className="grid pl-[6%] bg-[#99CC99] grid-cols-2 h-72  items-center rounded-bl-3xl  text-xl">
              <div className=" ">
                <FontAwesomeIcon icon={faWifi} size="1x" />
                <span className="pl-4">Free Wifi</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faFire} size="1x" />
                <span className="pl-4">Khu đốt lửa</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faBed} size="1x" />
                <span className="pl-4">Phòng đạt chuẩn</span>
              </div>
              <div className=" ">
                <FontAwesomeIcon icon={faUtensils} size="1x" />
                <span className="pl-4">Khu bếp chung & BBQ</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faSquareParking} size="1x" />
                <span className="pl-4">Bãi đậu xe hơi</span>
              </div>
              <div className=" ">
                <FontAwesomeIcon icon={faMartiniGlass} size="1x" />
                <span className="pl-4">Quầy Bar</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faGift} size="1x" />
                <span className="pl-4">Hỗ trợ trang trí tiệc</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <center>
        <div className="mt-14 ">
          <label className="uppercase text-3xl font-semibold">phòng</label>
          <Link href='/rooms' className="uppercase text-lg  flex justify-end pr-32 hover:text-[#33cc33]">xem đầy đủ</Link>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 m-auto  md:w-10/12 w-8/12">
            <Rooms id_lp={1} tenphong={"A101"} id_phong={1} check_in={""} check_out={""} />
            <Rooms id_lp={2} tenphong={"A302"} id_phong={2} check_in={""} check_out={""} />
            <Rooms id_lp={2} tenphong={"A301"} id_phong={3} check_in={""} check_out={""} />

          </div>
        </div>

      </center>

      <div className="grid grid-cols-2 gap-2 mt-16 h-[550px] w-[90%] max-w-[1170px] m-auto ">
        <div className="col-span-1 bg-cover bg-center bg-[url('../public/hinh6.jpg')] h-[550px] "></div>
        <div className="col-span-1 h-[550px] ">
          <div className="grid grid-rows-2 gap-2 h-[550px]">
            <div className=" bg-cover bg-center bg-[url('../public/hinh17.jpg')] "></div>
            <div className="grid  grid-cols-2 gap-2">
              <div className="col-span-1   ">
                <div className="grid grid-rows-2 gap-2 h-[270px]">
                  <div className=" bg-cover bg-center bg-[url('../public/hinh19.jpg')] "></div>
                  <div className=" bg-cover bg-center bg-[url('../public/hinh18.jpg')]"></div>
                </div>
              </div>
              <div className="bg-cover bg-center bg-[url('../public/hinh15.jpg')]"></div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-black mt-20" />
      <Footer></Footer>
    </div>
  );
}
export default index;

