import Header from "@/Components/Header";
import { Phieudat_idKH, Phong } from "@/Service/userService";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const lichsu = () => {
  interface Phieudat {
    id: number;
    id_KH: number;
    id_Phong: number;
    ngaydat: Date;
    check_in: Date;
    check_out: Date;
    songuoi: number,
    sotien: number,
    thanhtoan: string,
    trangthai: string,
    hotennguoio: string,
    SDT_nguoio: string,
    CCCD_nguoio: string,
    ghichu: string
    // dieukien: string
  }
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string,
    avt: string
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
  const [phieudat_idKH, setPhieudat_idKH] = useState<Phieudat[]>([]);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [id_khachhang, setId_khachhang] = useState(Number);
  const [phong, setPhong] = useState<Phong[]>([]);



  useEffect(() => {
    const handlePhong = async () => {
      try {
        const params = {
          id_phong: "ALL",
        };
        console.log(params)

        const response = await Phong(params);
        const res: Phong[] = response.phong;
        console.log(response)
        console.log(res)
        setPhong(res);
      } catch (error) {
        console.log(error);
      }
    };
    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');

    if (Object.keys(khachhang1).length === 0) {
      console.log("true");
    } else {
      // console.log("ITEM",khachhang1.khachhang);
      setKhachhang(khachhang1);

      const ressss: Khachhang[] = khachhang1;
      // console.log("jhjj", ressss)

      ressss.map(async (res) => {
        // setId_khachhang(res.id)
        const params = {
          phieudat_idKH: res.id,
        };
        console.log(params)
        const response1 = await Phieudat_idKH(params);
        const res1: Phieudat[] = response1.phieudat_idKH;
        console.log(response1)
        console.log(res1)
        setPhieudat_idKH(res1);
      })

    }
    handlePhong()
  }, []);
  return (
    <div className={roboto.className}>
      <Header />
      <p className="uppercase text-2xl font-semibold text-center mt-8 text-green-500">lịch sử đặt phòng</p>
      <div className="mt-8">
        <table className=" text-center m-auto w-11/12">
          <thead>
            <tr className="bg-green-300 h-10">
              <th className=" w-20 ">#</th>
              <th className="">Ngày đặt</th>
              <th className="">Check_in</th>
              <th className=" ">Check_out</th>
              <th className=" ">Tên phòng</th>
              <th className="">Số tiền</th>
              <th className=" ">Trạng thái</th>
              <th className="">Ghi chú</th>

            </tr>
          </thead>
          <tbody>
            {
              phieudat_idKH.map((item, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className=" text-center">{item.id}</td>
                    <td className=" p-2">
                    {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                    {dayjs(item.check_in).format("DD/MM/YYYY")}
                    </td>
                    <td className=" p-2">
                    {dayjs(item.check_out).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                      {phong.map((item1) =>
                        item1.id === item.id_Phong ? item1.tenphong : null
                      )}
                    </td>
                    <td className=" text-center">{item.sotien}</td>
                    <td className=" text-center">{item.trangthai}</td>
                    <td className=" text-center">{item.ghichu}</td>
                  </tr>
                )
              })
            }



          </tbody>
        </table>
      </div>

    </div>

  )
}
export default lichsu;