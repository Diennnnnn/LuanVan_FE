import { Layhinhanh, Layhinhanh_IdPhong, Loaiphong, Phong } from "@/Service/userService";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import router from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";
import Image from 'next/image'


const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  id_lp: number,
  tenphong: string,
  id_phong: number,
  check_in: string,
  check_out: string
};
const Rooms = ({ id_lp, tenphong, id_phong, check_in, check_out }: Props) => {
  // console.log("checkin", check_in)
  // console.log("check_out", check_out)

  const handleChitiet = async () => {
    router.push({
      pathname: '/chitiet',
      query: { id_phong: id_phong, id_lp: id_lp, check_in, check_out }

    })
  }
  interface Loaiphong {
    id: number;
    tenloaiphong: string;
    songuoi: number;
    gia: number;
  }
  interface HinhanhPhong {
    id: number;
    hinhanh: string;
    id_Phong: number;

  }
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);
  const [id_loaiphong, setId_loaiphong] = useState(Number);
  const [hinhanhPhong, setHinhanhPhong] = useState<HinhanhPhong[]>([]);
  const [i, SetI] = useState(Number);
  useEffect(() => {
    const handleLoaiphong = async () => {
      try {
        const params = {
          id_lp: id_lp,
        };
        // console.log(params)
        const response = await Loaiphong(params);
        const res: Loaiphong[] = response.loaiphong;
        // console.log(response)
        setLoaiphong(res);
        res.map((res) => {
          // setId_loaiphong(res.id)
          // console.log("id", id)
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
        // console.log(params)
        const response = await Layhinhanh_IdPhong(params);
        const res: HinhanhPhong[] = response.layha;
        // console.log(response)
        // console.log(res)
        setHinhanhPhong(res);

      } catch (error) {
        console.log(error);
      }
    };
    handleLoaiphong()
    Layhinhanh_IdPhongg()
  }, [])

  return (
    <div className={roboto.className}>
      {
        loaiphong.map((item, index) => {
          return (
            <>
              <div className="relative hover:bg-gray-100 bg-white m-4  text-lg flex flex-col rounded-t-xl space-y-4 ">

                {
                  hinhanhPhong.length > 0 ?
                    <Image
                      className="h-60 w-full rounded-t-full"
                      src={new Buffer(hinhanhPhong[0].hinhanh, "base64").toString("binary")}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                    : null
                }


                <p className="text-center ">{tenphong}</p>
                <div className="flex justify-center">
                  <p className="pr-2 uppercase">Giá</p>
                  <p className="text-2xl font-bold">{item.gia}</p>
                  <p className="uppercase pl-2">đêm</p>
                </div>
                <div className="flex justify-center">
                  <p className="pr-2 uppercase">Phòng</p>
                  <p className="text-2xl font-bold">{item.songuoi}</p>
                  <p className="uppercase pl-2">người</p>
                </div>
                <div className="text-center">{item.tenloaiphong}</div>
                <button onClick={handleChitiet} className="uppercase text-green-700 font-semibold text-center pb-3">xem chi tiết</button>

              </div>
            </>
          )
        })
      }
    </div>
  )
}
export default Rooms;
