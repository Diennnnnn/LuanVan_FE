
import { AllKhachhang, LayPhieudat, Phong } from "@/Service/userService";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const Phieudat_QL = () => {
    interface Phieudat {
        id: number;
        id_KH: number;
        id_Phong: number;
        ngaydat: Date;
        check_in: Date;
        check_out: Date;
        songuoi: number,
        tongtien:number,
        thanhtoan:string,
        trangthai:string,
        hotennguoio:string,
        SDT_nguoio:string,
        CCCD_nguoio:string,
        ghichu:string
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
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);
    const [allkh, setAllkh] = useState<Khachhang[]>([]);
    const [phong, setPhong] = useState<Phong[]>([]);



    useEffect(() => {
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

        handleLayPhieudat()
        handleLayAllKhachhang()
        handlePhong()
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách khách đặt phòng</p>
                <div className="mt-5">
                    <table className="border-separate border border-slate-400 m-auto text-center w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-20">#</th>
                                <th className="border border-slate-300">Họ tên khách hàng</th>
                                <th className="border border-slate-300">Tên phòng</th>
                                <th className="border border-slate-300 ">Ngày đặt</th>
                                <th className="border border-slate-300 ">Check_in</th>
                                <th className="border border-slate-300 ">Check_out</th>
                                <th className="border border-slate-300 ">Số người ở</th>
                                <th className="border border-slate-300 ">Số tiền</th>
                                <th className="border border-slate-300 ">Thanh toán</th>
                                <th className="border border-slate-300 ">Trạng thái</th>
                                
                                <th className="border border-slate-300 ">Ghi chú</th>
                                <th className="border border-slate-300 ">Họ tên người ở</th>
                                <th className="border border-slate-300 ">Số điện thoại</th>
                                <th className="border border-slate-300 ">CCCD</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                phieudat.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">
                                                {allkh.map((item2) =>
                                                    item2.id === item.id_KH ? item2.hotenKH : null
                                                )}

                                            </td>
                                            <td className="border border-slate-300 p-2">
                                            {phong.map((item1) =>
                                                    item1.id === item.id_Phong ? item1.tenphong : null
                                                )}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.check_in).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.check_out).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.songuoi}</td>
                                            <td className="border border-slate-300 p-2">{item.tongtien}</td>
                                            <td className="border border-slate-300 p-2">{item.thanhtoan}</td>
                                            <td className="border border-slate-300 p-2">{item.trangthai}</td>
                                            <td className="border border-slate-300 p-2">{item.ghichu}</td>
                                            <td className="border border-slate-300 p-2">{item.hotennguoio}</td>
                                            <td className="border border-slate-300 p-2">{item.SDT_nguoio}</td>
                                            <td className="border border-slate-300 p-2">{item.CCCD_nguoio}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Phieudat_QL;