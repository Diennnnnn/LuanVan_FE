
import { AllKhachhang, LayPhieudat, LayPhieudat_ngay, Phong } from "@/Service/userService";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const Thongke = () => {
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
    
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);


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

        const handleLayPhieudat_ngay = async () => {
            try {
                const params = {
                    check_in: '2023/11/13',
                };
                console.log(params)

                const response = await LayPhieudat_ngay(params);
                const res: Phieudat[] = response.phieudat_ngay;
                console.log(response)
                console.log(res)
                setPhieudat(res);
            } catch (error) {
                console.log(error);
            }
        };


        handleLayPhieudat_ngay()

    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5"></p>
                <div className="mt-5">
                    <table className="border-separate border border-slate-400 m-auto text-center w-full">
                        <thead>
                            <tr>
                                {/* <th className="border border-slate-300 w-20">#</th> */}
                                <th className="border border-slate-300">Ngày</th>
                                <th className="border border-slate-300">Doanh thu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                phieudat.map((item, index) => {
                                    // if(item.check_in ===)
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.check_in).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2"></td>
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

export default Thongke;