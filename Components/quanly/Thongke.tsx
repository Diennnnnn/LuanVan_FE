
import { Thongke_ngay, Thongke_thang } from "@/Service/userService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const Thongke = () => {

    const [ngay, setNgay] = useState<any[]>([]);
    const [thang, setThang] = useState<any[]>([]);
    const option = ['Theo ngày', 'Theo tháng']
    const [value, setValue] = useState('')


    useEffect(() => {
        const handleThongke_ngay = async () => {
            try {
                const response = await Thongke_ngay();
                console.log(response.phieudat_ngay)
                setNgay(response.phieudat_ngay);
            } catch (error) {
                console.log(error);
            }
        };

        const handleThongke_thang = async () => {
            try {
                const response = await Thongke_thang();
                console.log(response.phieudat_thang)
                setThang(response.phieudat_thang);
            } catch (error) {
                console.log(error);
            }
        };


        handleThongke_ngay()
        handleThongke_thang()

    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <Autocomplete
                    value={value}
                    disablePortal
                    id="combo-box-demo"
                    options={option}
                    // options={}
                    onChange={(event: any, newValue: string | null) => {
                        { newValue ? setValue(newValue) : null }

                    }}
                    sx={{ width: 290 }}
                    renderInput={(params) => <TextField {...params} label="Thống kê" variant="standard" />}
                />
                <p className="font-semibold uppercase text-2xl text-center mt-5"></p>
                <div className="mt-5">
                    {value === 'Theo ngày' ?
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
                                    ngay.map((item, index) => {
                                        // if(item.check_in ===)
                                        return (
                                            <tr key={index}>
                                                <td className="border border-slate-300 p-2">
                                                    {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                                                </td>
                                                <td className="border border-slate-300 p-2">{item.total_amount}</td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                        : null
                    }
                    {
                        value === 'Theo tháng' ?
                            <table className="border-separate border border-slate-400 m-auto text-center w-full">
                                <thead>
                                    <tr>
                                        {/* <th className="border border-slate-300 w-20">#</th> */}
                                        <th className="border border-slate-300">Tháng</th>
                                        <th className="border border-slate-300">Doanh thu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        thang.map((item2, index2) => {
                                            // if(item.check_in ===)
                                            return (
                                                <tr key={index2}>
                                                    <td className="border border-slate-300 p-2">
                                                        {item2.thang_ngaydat}
                                                    </td>
                                                    <td className="border border-slate-300 p-2">{item2.total_amount}</td>
                                                </tr>
                                            )
                                        })
                                    }



                                </tbody>
                            </table>
                            : null
                    }
                </div>
            </div>
        </div>

    )
}

export default Thongke;