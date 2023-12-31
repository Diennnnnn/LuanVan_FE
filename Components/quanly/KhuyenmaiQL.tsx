
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Khuyenmai, SuaQLKhuyenmai, ThemQLKhuyenmai, XoaQLKhuyenmai } from "@/Service/userService";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    khuyenmai: any,
};
const KhuyenmaiQL = ({ khuyenmai }: Props) => {
    interface Khuyenmai {
        id: number;
        tenKM: string;
        phantram: number;
        mota: string;
        start: Date;
        finish: Date;
        dieukien: string
    }
    const [step, setStep] = useState("them");
    const [khuyenmaiQL, setKhuyenmaiQL] = useState<Khuyenmai[]>([]);
    const [tenKM, setTenKM] = useState("");
    const [phantram, setPhantram] = useState(Number)
    const [mota, setMota] = useState("");
    const [start, setStart] = useState(new Date());
    const [finish, setFinish] = useState(new Date());
    const [dieukien, setDieukien] = useState("");

    const [id, setId] = useState(Number)

    const handleThemKhuyenmai = async () => {
        console.log(tenKM)
        console.log(phantram)

        console.log(mota)

        console.log(start)

        console.log(finish)
        console.log(dieukien)


        let res = await ThemQLKhuyenmai(
            {
                tenKM: tenKM,
                phantram: phantram,
                mota: mota,
                start: start,
                finish: finish,
                dieukien: dieukien,


            }
        );
        if (res && res.errCode === 0) {
            setTenKM('')
            setPhantram(0)
            setMota('')
            setStart(new Date())
            setFinish(new Date())
            setDieukien('')
            handleLayKhuyenmai()
            alert("Thêm khuyến mãi thành công")

        } else {
            console.log(res)
            alert("Thêm khuyến mãi không thành công")
        };

    }
    const handleLayKhuyenmai = async () => {

        try {
            const params = {
                id_km: "ALL",
            };
            console.log(params)

            const response = await Khuyenmai(params);
            const res: Khuyenmai[] = response.khuyenmai;
            console.log(response)
            console.log(res)
            setKhuyenmaiQL(res);
        } catch (error) {
            console.log(error);
        }
    };



    const handleSuaKhuyenmai = (id: number, tenKM: string, phantram: number, mota: string, start: Date, finish: Date, dieukien: string) => {
       let date1 = new Date(start)
       let date2 = new Date(finish)

        setId(id)
        setTenKM(tenKM)
        setPhantram(phantram)
        setMota(mota)
        setStart(date1)
        setFinish(date2)
        setDieukien(dieukien)
        setStep("capnhat")
    }

    const handleCapnhatKhuyenmai = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLKhuyenmai(
            {
                id: id,
                tenKM: tenKM,
                phantram: phantram,
                mota: mota,
                start: start,
                finish: finish,
                dieukien: dieukien,

            }
        );
        if (res && res.errCode === 0) {
            setTenKM('')
            setPhantram(0)
            setMota('')
            setStart(new Date())
            setFinish(new Date())
            setDieukien('')
            handleLayKhuyenmai()
            setStep('them')
            alert("Cập nhật khuyến mãi thành công")

        } else {
            console.log(res)
            alert("Cập nhật khuyến mãi không thành công")
        };

    }
    const handleXoaKhuyenmai = async (idkhuyenmai: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLKhuyenmai(
            {
                id: idkhuyenmai
            }
        );
        if (res && res.errCode === 0) {
            setTenKM('')
            setPhantram(0)
            setMota('')
            setStart(new Date())
            setFinish(new Date())
            setDieukien('')
            handleLayKhuyenmai()
            alert("Xóa khuyến mãi thành công")

        } else {
            console.log(res)
            alert("Xóa khuyến mãi không thành công")
        };

    }
    useEffect(() => {
        // console.log("csvc", csvc)
        setKhuyenmaiQL(khuyenmai)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Khuyến mãi</p>
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm khuyến mãi:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật khuyến mãi:</p>
                    )
                }
                <div className="grid grid-cols-2 p-3 gap-4">
                    <div className="flex ">
                        <p className="w-4/12 ">Tên khuyến mãi:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={tenKM} onChange={(e) => setTenKM(e.target.value)} />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12 ">Phần trăm KH:</p>
                        <input type="number" min={1} className="w-72 border-b-2 border-gray-400 outline-none"
                            value={phantram} onChange={(e) => setPhantram(e.target.valueAsNumber)} />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Mô tả:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={mota} onChange={(e) => setMota(e.target.value)} />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Thời gian bắt đầu:</p>
                        <DatePicker
                            className="w-72 border-b-2 border-gray-400 outline-none"
                            dateFormat='dd/MM/yyyy'
                            selected={start}
                            onChange={(date: Date) => setStart(date)} />
                        {/* <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                        value={start} onChange={(e) => setStart(e.target.value)}/> */}
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Thời gian kết thúc:</p>
                        <DatePicker
                            className="w-72 border-b-2 border-gray-400 outline-none"
                            dateFormat='dd/MM/yyyy'
                            selected={finish}
                            onChange={(date: Date) => setFinish(date)} />
                        {/* <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                        value={finish} onChange={(e) => setFinish(e.target.value)}/> */}
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Điều kiện:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={dieukien} onChange={(e) => setDieukien(e.target.value)} />
                    </div>
                </div>
                {step === "them" &&
                    (
                        <div className=" text-right w-10/12">
                        <button onClick={handleThemKhuyenmai} className="bg-green-400 w-44 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm khuyến mãi</button>
</div>
                    )
                }
                {step === "capnhat" &&
                    (
                        <div className=" text-right w-10/12">
                        <button onClick={handleCapnhatKhuyenmai} className="bg-green-400 w-48 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật khuyến mãi</button>
</div>
                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 m-auto text-center w-11/12">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-20 ">#</th>
                                <th className="border border-slate-300">Tên khuyến mãi</th>
                                <th className="border border-slate-300">Phần trăm</th>
                                <th className="border border-slate-300 ">Mô tả</th>
                                <th className="border border-slate-300 ">Thời gian bắt đầu</th>
                                <th className="border border-slate-300 ">Thời gian kết thúc</th>
                                <th className="border border-slate-300 ">Điều kiện</th>
                                <th className="border border-slate-300 w-20">Tác vụ</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                khuyenmaiQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.tenKM}</td>
                                            <td className="border border-slate-300 p-2">{item.phantram}</td>
                                            <td className="border border-slate-300 p-2">{item.mota}</td>
                                            <td className="border border-slate-300 p-2">
                                                {
                                                    dayjs(item.start).format("DD/MM/YYYY")
                                                }

                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {
                                                    dayjs(item.finish).format("DD/MM/YYYY")
                                                }
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.dieukien}</td>
                                            <td className="border border-slate-300 text-center">
                                                <button>
                                                    <EditIcon onClick={() => handleSuaKhuyenmai(item.id, item.tenKM, item.phantram, item.mota, item.start, item.finish, item.dieukien)} />
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaKhuyenmai(item.id)} />
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

export default KhuyenmaiQL;