import Header from "@/Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import {faAward, faTree,faWifi, faFire,faUtensils,faSquareParking, faGift,faMartiniGlass,faBed} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from "react";
import { Montserrat, Roboto } from 'next/font/google'
import Link from "next/link";
import Footer from "@/Components/Footer";
import { Phong } from "@/Service/userService";
import Rooms from "@/Components/Rooms";

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
    id_VT:  number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  const [phong, setPhong] = useState<Phong[]>([]);
  const [id, setId] = useState(Number);

  // console.log(phong)

  useEffect(()=>{
    const handlePhong = async () => {
      try {
        const params = {
          id_phong: "ALL",
        };
        console.log(params)  
        const response = await Phong(params);
        const res: Phong[] = response.phong;
        console.log(res)
        setPhong(res);
        res.map((res)=>{
          setId(res.id)
          console.log("id",res.mota)
        })
        // console.log(phongs.)
  
      } catch (error) {
        console.log(error);
      }
    };
    handlePhong();
  },[])

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
  useEffect(() => {

    setTimeout(
      nextSlide, 2000);

  }, [nextSlide]);


  return (

    <div className={roboto.className }>
      <Header></Header>
      <center>
        <div className=" relative ">
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="h-[450px]  w-[80%] bg-cover bg-center bg-[url('../public/hinh2.jpg')] rounded-xl mt-4 ">
            <div className="absolute inset-x-0 bottom-3">
              <form className="flex justify-center items-center rounded-md bg-white w-[60%] h-[80px] shadow-xl">
                <div className=" ">
                  <label className="absolute top-1 text-sm text-gray-400 ml-6 inline-block bg-white">Nhận phòng</label>
                  <input id="startDate" type="date" placeholder="Nhận phòng " className="w-52 rounded-md h-12 border-solid border-gray-300 border-2 mr-3 pl-2" />
                  <label className="absolute top-1 text-sm text-gray-400 ml-6 inline-block bg-white">Trả phòng</label>
                  <input id="endDate" type="date" placeholder="Trả phòng" className="h-12 w-52 rounded-md border-solid border-2 border-gray-300 mr-3 pl-2" />
                  <input id="" type="number" placeholder="Số lượng khách" className=" h-12 w-52 rounded-md border-solid border-2 border-gray-300 mr-3 pl-2" />
                  <button className="w-52 border-solid border-2 border-[#33cc33] hover:bg-[#33cc33] h-12 rounded-md">Tìm phòng</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 mt-10 w-11/12 h-[250px]  ">
          <div className="col-span-2 ">
            <div className="text-left w-11/12 float-right">
              <p className=" text-5xl pt-5 font-medium">The Kupid</p>
              <p className="text-[#33cc33] font-semibold pt-1 uppercase">D a L a t N o S i n g l e</p>
              <p className="pt-10 leading-relaxed text-gray-600">Kupid là tên của vị thần tình yêu vì thế nơi đây được xem là chốn hẹn hò lãng mạn.</p>
            </div>
          </div>
          <div className="col-span-3 flex m-auto rounded-md ">
            <div className="h-[200px] w-[200px] rounded-md bg-cover bg-[url('../public/hinh1.jpg')] mx-8 "></div>
            <div className="h-[200px] w-[200px] rounded-md bg-cover bg-[url('../public/nen.jpg')] mx-8"></div>
            <div className="h-[200px] w-[200px] rounded-md bg-cover bg-[url('../public/hinh5.jpg')] mx-8 "></div>

          </div>
        </div>

        <div className="grid grid-cols-3 h-[550px] w-[85%] mt-20">
          <div className="col-span-1 border-r-2 border-green-200">
            <FontAwesomeIcon icon={faAward} size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Dịch vụ</div>
            <p className="mt-8 leading-loose text-base p-6">Với hệ thống phòng đạt chuẩn được thiết kế theo không gian mở nên tạo cảm giác gần gũi và thân thiện với thiên nhiên.</p>
          </div>

          <div className="col-span-1 border-r-2 border-green-200">
            <FontAwesomeIcon icon={faPaperPlane}  size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Vị trí</div>
            <p className="mt-8 leading-loose text-base p-6">Nằm cách trung tâm thành phố Đà Lạt khoảng 3km, nếu di chuyển bằng xe máy sẽ mất 10 phút.
              Gần homestay có rất nhiều địa điểm tham quan và vui chơi nổi tiếng như Khu du lịch Lá Phong, khu du lịch Cáp Treo Đà Lạt, Dinh 2 Bảo Đại, quảng trường Lâm Viên,...
              Khoảng cách từ The Kupid đến sân bay Liên Khương là 30km và cách bến xe liên tỉnh Đà Lạt khoảng 4km.
            </p>
          </div>

          <div className="col-span-1">
            <FontAwesomeIcon icon={faTree} size="5x" style={{ color: "#33cc33", }} />
            <div className="uppercase font-bold text-3xl mt-12">Không gian</div>
            <p className="mt-8 leading-loose text-base p-6">The Kupid homestay Đà Lạt được bao bọc bởi những rừng thông rộng lớn, bao la và hùng vĩ.
              Chính vì vậy nơi đây luôn có bầu không khí trong lành, mát mẻ và vô cùng thoải mái.
              Không gian nơi đây là sự kết hợp vô cùng hoàn hảo vừa lãng mạn, vừa mộng mơ mà vô cùng ấn tượng.
            </p>
          </div>
        </div>
      </center>
      <div className="grid grid-cols-2 mt-20 h-[650px] w-full place-items-center">
        <div className="col-span-1 h-[450px] w-full bg-cover bg-center bg-[url('../public/hinh8.jpg')]"></div>
        <div className="col-span-1 h-[600px] w-full ">
          <div className="grid grid-rows-2 h-[600px]">
            <div className="h-[350px] bg-[#99CC99] pt-12 pl-[6%] rounded-tl-3xl">
              <p className="uppercase text-xl font-semibold text-green-900">sự dung hòa đầy ăn ý từ</p>
              <p className="uppercase text-3xl pt-5">thiên nhiên an lành và không gian cực đẹp</p>
              <p className="pt-8">Khuôn viên homestay được trang trí vô cùng ấn tượng và bắt mắt. Nơi đây bố trí một khu vườn riêng vớ rất nhiều sắc hoa rực rỡ, hương thơm ngát và tuyệt vời.</p>
            </div>
            <div className="grid bg-[#99CC99] grid-cols-2 h-[300px] pl-[6%] items-center rounded-bl-3xl  text-xl">
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
        <div className="mt-14">
          <label className="uppercase text-3xl font-semibold">phòng</label>
          <Link href='/rooms' className="uppercase text-lg  flex justify-end pr-32 hover:text-[#33cc33]">xem đầy đủ</Link>
          <div className="grid grid-cols-3 gap-5 mt-10 m-auto h-[550px] w-10/12">
            {/* <Rooms id_lp={1} tenphong={"A101"}/>
            <Rooms id_lp={2} tenphong={"A302"}/>
            <Rooms id_lp={2} tenphong={"A301"}/> */}
            {/* <div className="col-span-1 space-y-7 ">
              <div className="bg-cover bg-[url('../public/khuA/A101/hinh7.jpg')] h-[300px] w-full rounded-t-xl"></div>
              <p className=" ">Phòng A101</p>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Giá</p>
                <p className="text-2xl font-bold">1.200.000</p>
                <p className="uppercase pl-2">đêm</p>
              </div>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Phòng</p>
                <p className="text-2xl font-bold">2</p>
                <p className="uppercase pl-2">người</p>
              </div>
              <Link href="" className="uppercase text-green-700 font-semibold ">xem chi tiết</Link>
            </div> */}
            {/* <div className="col-span-1 space-y-7 ">
              <div className="bg-cover bg-[url('../public/khuA/A101/hinh7.jpg')] h-[300px] w-full rounded-t-xl"></div>
              <p className=" ">Phòng A101</p>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Giá</p>
                <p className="text-2xl font-bold">1.200.000</p>
                <p className="uppercase pl-2">đêm</p>
              </div>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Phòng</p>
                <p className="text-2xl font-bold">2</p>
                <p className="uppercase pl-2">người</p>
              </div>
              <Link href="" className="uppercase text-green-700 font-semibold ">xem chi tiết</Link>
            </div> */}
            {/* <div className="col-span-1 space-y-7 ">
              <div className="bg-cover bg-[url('../public/khuA/A101/hinh7.jpg')] h-[300px] w-full rounded-t-xl"></div>
              <p className=" ">Phòng A101</p>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Giá</p>
                <p className="text-2xl font-bold">1.200.000</p>
                <p className="uppercase pl-2">đêm</p>
              </div>
              <div className="flex justify-center">
                <p className="pr-2 uppercase">Phòng</p>
                <p className="text-2xl font-bold">2</p>
                <p className="uppercase pl-2">người</p>
              </div>
              <Link href="" className="uppercase text-green-700 font-semibold ">xem chi tiết</Link>
            </div> */}
          </div>
        </div>

      </center>
      

      {/* <div className="flex w-[90%] max-w-[1170px] h-[600px] mt-14 m-auto border-2 border-green-300 ">
        <div className="bg-cover bg-[url('../public/hinh6.jpg')] w-2/5"></div>
        <div className="bg-cover bg-center bg-[url('../public/hinh17.jpg')] w-3/5 h-[300px]"></div>
        <div className="border-2 border-red-300 w-1/2 h-">

        </div>

      </div> */}
      {/* <div className="relative">
        <div className="gird grid-cols-2 w-[90%] max-w-[1170px] h-[550px] mt-14 m-auto border-2 border-green-300">
          <div className="col-span-1 border-2 border-red-300 h-[550px]"></div>
          <div className="col-span-1 border-2 border-black h-[550px] "></div>
        </div>
      </div> */}
      <div className="grid grid-cols-2 gap-2 mt-20 h-[550px] w-[90%] max-w-[1170px] m-auto ">
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

      <hr className="border-black mt-20"/>
      <Footer></Footer>
    </div>
  );
}
export default index;

