import { Loaiphong, Phong } from "@/Service/userService";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import router from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  id_lp: number,
  tenphong: string,
  id_phong: number
};
const Rooms = ({ id_lp, tenphong, id_phong }: Props) => {
  const handleChitiet = async () => {
    router.push({
      pathname: '/chitiet',
      query: { id_phong: id_phong, id_lp: id_lp}
      
    })
  }
  interface Loaiphong {
    id: number;
    tenloaiphong: string;
    songuoi: number;
    gia: number;
  }
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);
  const [id_loaiphong, setId_loaiphong] = useState(Number);

  useEffect(() => {
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
          // setId_loaiphong(res.id)
          // console.log("id", id)
        })

      } catch (error) {
        console.log(error);
      }


    };
    handleLoaiphong()
  },[])

  return (
    <div className={roboto.className}>
      {
        loaiphong.map((item, index) => {
          return (
            <>
              <div className="relative bg-white text-lg flex flex-col rounded-t-xl space-y-3">
                <div className="bg-cover bg-[url('../public/khuA/A101/hinh7.jpg')] h-72 w-full rounded-t-xl"></div>
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
                <div className="">{item.tenloaiphong}</div>
                <Link href="" onClick={handleChitiet} className="uppercase text-green-700 font-semibold text-center">xem chi tiết</Link>
              </div>
            </>
          )
        })
      }
    </div>
  )
}
export default Rooms;
