import { AllKhachhang, LayPhieudat, LayTTHoadon, LayttCTSDDV, QLnoiquy, XoaQLnoiquy } from "@/Service/userService";
import { SuaQLnoiquy } from "@/Service/userService";

import { Input } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { Noiquy } from '@/Service/userService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
interface ChitietSDDV {
    id: number;
    id_PD: number;
    id_DV: number;
    solansudung: number;
    soluong: number;
    thanhtien: number;
    total_amount: number
}
interface Hoadon {
    id: number;
    id_PD: number;
    id_KH: number;
    ngaylapHD: number;
    tongtien: number;
    id_NV: number;
    // total_amount: number
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
const Hoadon_QL = () => {
    const [sddv, setSDDV] = useState<ChitietSDDV[]>([]);
    const [hoadon, setHoadon] = useState<Hoadon[]>([]);
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);
    const [allkh, setAllkh] = useState<Khachhang[]>([]);


    useEffect(() => {
        const handleLaychitietSDDV = async () => {
            try {
                const params = {
                    id_pd: "ALL"
                };
                console.log(params)
    
                const response = await LayttCTSDDV(params);
                const res: ChitietSDDV[] = response.ctsddv;
                console.log(response)
                console.log(res)
                setSDDV(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handleLayTTHoadon = async () => {
            try {
                const params = {
                    id: "ALL"
                };
                console.log(params)
    
                const response = await LayTTHoadon(params);
                const res: Hoadon[] = response.hoadon;
                console.log(response)
                console.log(res)
                setHoadon(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handleLayPhieudat = async () => {
            try {
                const params = {
                    id_pd: "ALL",
                };
                console.log(params)
    
                const response = await LayPhieudat(params);
                const res: Phieudat[] = response.phieudat;
                console.log(response)
                console.log(res)
                setPhieudat(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handleLayAllKhachhang = async () => {
            try {
              const params = {
                id_allkh: "ALL",
              };
              console.log(params)
      
              const response = await AllKhachhang(params);
              const res: Khachhang[] = response.allkh;
              console.log(response)
              console.log(res)
              setAllkh(res);
            } catch (error) {
              console.log(error);
            }
          };
        handleLaychitietSDDV()
        handleLayTTHoadon()
        handleLayPhieudat()
        handleLayAllKhachhang()
    }, [])
    return (
        <div className={roboto.className}>
            <div className="mt-8">
                <table className="border-separate border text-center w-10/12 m-auto border-slate-400 ...">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-20 ">#</th>
                            <th className="border border-slate-300">Mã phiếu đặt</th>
                            <th className="border border-slate-300">Tên khách hàng</th>
                            <th className="border border-slate-300 ">Ngày lập hóa đơn</th>
                            <th className="border border-slate-300 ">Tổng tiền phòng</th>
                            <th className="border border-slate-300 ">Tổng tiền SDDV</th>
                            <th className="border border-slate-300 ">Thành tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            hoadon.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-300 ">{item.id}</td>
                                        <td className="border border-slate-300 p-3">{item.id_PD}</td>
                                        <td className="border border-slate-300 ">
                                        {allkh.map((item3) =>
                                                item3.id === item.id_KH ? item3.hotenKH : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300">
                                        {
                                                    dayjs(item.ngaylapHD).format("DD/MM/YYYY hh:mm:ss")
                                                }
                                        </td>
                                        <td className="border border-slate-300 ">
                                        {phieudat.map((item2) =>
                                                item2.id === item.id_PD ? item2.tongtien : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 t">
                                            {sddv.map((item1) =>
                                                item1.id_PD === item.id_PD ? item1.total_amount : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 text-center">{item.tongtien}</td>
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

export default Hoadon_QL;