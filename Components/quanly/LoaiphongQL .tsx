
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Khuyenmai, Loaiphong, SuaQLKhuyenmai, SuaQLLoaiphong, ThemQLKhuyenmai, ThemQLLoaiphong, XoaQLKhuyenmai, XoaQLLoaiphong } from "@/Service/userService";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    loaiphong: any,
};
// 
const LoaiphongQL = ({ loaiphong }: Props) => {
    interface Loaiphong {
        id: number;
        tenloaiphong: string;
        songuoi: number;
        gia: number;
    }
    const [step, setStep] = useState("them");
    const [loaiphongQL, setLoaiphongQL] = useState<Loaiphong[]>([]);
    const [tenloaiphong, setTenloaiphong] = useState("");
    const [songuoi, setSonguoi] = useState(Number)
    const [gia, setGia] = useState(Number);

    const [id, setId] = useState(Number)

    const handleThemLoaiphong = async () => {

        let res = await ThemQLLoaiphong(
            {
                tenloaiphong: tenloaiphong,
                songuoi: songuoi,
                gia: gia,

            }
        );
        if (res && res.errCode === 0) {
            setTenloaiphong('')
            setSonguoi(0)
            setGia(0)

            handleLayLoaiphong()
            alert("Thêm loại phòng thành công")

        } else {
            console.log(res)
            alert("Thêm loại phòng không thành công")
        };

    }
    const handleLayLoaiphong = async () => {

        try {
            const params = {
                id_lp: "ALL",
            };
            console.log(params)

            const response = await Loaiphong(params);
            const res: Loaiphong[] = response.loaiphong;
            console.log(response)
            console.log(res)
            setLoaiphongQL(res);
        } catch (error) {
            console.log(error);
        }
    };



    const handleSuaLoaiphong = (id: number, tenloaiphong: string, songuoi: number, gia: number) => {

        setId(id)
        setTenloaiphong(tenloaiphong)
        setSonguoi(songuoi)
        setGia(gia)

        setStep("capnhat")
    }

    const handleCapnhatLoaiphong = async () => {
        console.log("id", id)

        console.log("tenloaiphong", tenloaiphong)
        console.log("songuoi", songuoi)
        console.log("gia", gia)

        let res = await SuaQLLoaiphong(
            {
                id: id,
                tenloaiphong: tenloaiphong,
                songuoi: songuoi,
                gia: gia,

            }
        );
        if (res && res.errCode === 0) {
            console.log(res)

            setTenloaiphong('')
            setGia(0)
            setSonguoi(0)

            handleLayLoaiphong()
            setStep('them')
            alert("Cập nhật loại phòng thành công")

        } else {
            console.log(res)
            alert("Cập nhật loại phòng không thành công")
        };

    }
    const handleXoaLoaiphong = async (idloaiphong: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLLoaiphong(
            {
                id: idloaiphong
            }
        );
        if (res && res.errCode === 0) {
            setTenloaiphong('')
            setGia(0)
            setSonguoi(0)
            handleLayLoaiphong()
            alert("Xóa loại phòng thành công")

        } else {
            console.log(res)
            alert("Xóa loại phòng không thành công")
        };

    }
    useEffect(() => {
        // console.log("csvc", csvc)
        setLoaiphongQL(loaiphong)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Loại phòng</p>
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm loại phòng:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật loại phòng:</p>
                    )
                }
                <div className="grid grid-cols-2 p-3 gap-4">
                    <div className="flex ">
                        <p className="w-4/12 ">Tên loại phòng:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={tenloaiphong} onChange={(e) => setTenloaiphong(e.target.value)} />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12 ">Số người:</p>
                        <input type="number" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={songuoi} onChange={(e) => setSonguoi(e.target.valueAsNumber)} />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Giá:</p>
                        <input type="number" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={gia} onChange={(e) => setGia(e.target.valueAsNumber)} />
                    </div>

                </div>
                {step === "them" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleThemLoaiphong} className="bg-green-400 w-44 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm loại phòng</button>
                        </div>
                    )
                }
                {step === "capnhat" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleCapnhatLoaiphong} className="bg-green-400 w-48 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật loại phòng</button>
                        </div>
                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 m-auto text-center w-11/12">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-20 ">#</th>
                                <th className="border border-slate-300">Tên loại phòng</th>
                                <th className="border border-slate-300">Số người</th>
                                <th className="border border-slate-300 ">Giá</th>
                                <th className="border border-slate-300">Tác vụ</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                loaiphongQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.tenloaiphong}</td>
                                            <td className="border border-slate-300 p-2">{item.songuoi}</td>
                                            <td className="border border-slate-300 p-2">{item.gia}</td>

                                            <td className="border border-slate-300 text-center">
                                                <button>
                                                    <EditIcon onClick={() => handleSuaLoaiphong(item.id, item.tenloaiphong, item.songuoi, item.gia)} />
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaLoaiphong(item.id)} />
                                                </button>
                                            </td>
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

export default LoaiphongQL;