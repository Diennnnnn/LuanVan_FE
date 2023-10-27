
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    allkh: any,
};
const KhachhangQL = ({ allkh }: Props) => {
    interface Khachhang {
        id: number;
        hotenKH: string;
        gioitinh: string,
        ngaysinh: string,
        CMND: string,
        SDT: string,
        email: string
    }
    const [allkhachhangQL, setAllKhachhangQL] = useState<Khachhang[]>([]);

    useEffect(() => {
        // console.log("csvc", csvc)
        setAllKhachhangQL(allkh)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách khách hàng</p>

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Họ và tên</th>
                                <th className="border border-slate-300">Giới tính</th>
                                <th className="border border-slate-300 w-20">Ngày sinh</th>
                                <th className="border border-slate-300 w-20">CCCD</th>
                                <th className="border border-slate-300 w-20">Số điện thoại</th>
                                <th className="border border-slate-300 w-20">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allkhachhangQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.hotenKH}</td>
                                            <td className="border border-slate-300 p-2">{item.gioitinh}</td>
                                            <td className="border border-slate-300 p-2">
                                                {
                                                    dayjs(item.ngaysinh).format("DD/MM/YYYY")
                                                }
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.CMND}</td>
                                            <td className="border border-slate-300 p-2">{item.SDT}</td>
                                            <td className="border border-slate-300 p-2">{item.email}</td>


                                            {/* <td className="border border-slate-300 text-center">
                                                <button> 
                                                    <EditIcon onClick={() => handleSuaDichVu(item.id, item.tenDV, item.gia, item.DVT, item.ghichu)}/>
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaDichVu(item.id)}/>
                                                    </button>
                                            </td> */}
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

export default KhachhangQL;