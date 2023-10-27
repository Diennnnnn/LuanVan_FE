
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Danhmuccsvc, SuaQLCSVC, ThemQLCSVC, XoaQLCSVC } from "@/Service/userService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs'


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    csvc: any,
};
const CSVC_QL = ({ csvc }: Props) => {
    interface DanhmucCSVC {
        id: number;
        tenCSVC: string;
        giagoc: number;
        soluong: number;
        thoigianmua: Date;
    }
    const [step, setStep] = useState("them");
    const [csvcQL, setCsvcQL] = useState<DanhmucCSVC[]>([]);
    const [tenCSVC, setTenCSVC] = useState("");
    const [giagoc, setGiagoc] = useState(Number)
    const [soluong, setSoluong] = useState(Number)
    const [thoigianmua, setThoigianmua] = useState(new Date());
    const [id, setId] = useState(Number)

    const handleThemCSVC = async () => {
        // console.log("mota", mota)
        console.log("motaEN", thoigianmua)

        let res = await ThemQLCSVC(
            {
                tenCSVC: tenCSVC,
                giagoc: giagoc,
                soluong: soluong,
                thoigianmua: thoigianmua

            }
        );
        if (res && res.errCode === 0) {
            setTenCSVC('')
            setGiagoc(0)
            setSoluong(0)
            setThoigianmua(new Date())
            handleCSVC()
            alert("Thêm cơ sở vật chất thành công")

        } else {
            console.log(res)
            alert("Thêm cơ sở vật chất không thành công")
        };

    }
    const handleCSVC = async () => {
        try {
            const params = {
                id_dmcsvc: "ALL",
            };
            console.log(params)

            const response = await Danhmuccsvc(params);
            const res: DanhmucCSVC[] = response.dmcsvc;
            console.log(response)
            console.log(res)
            setCsvcQL(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSuaCSVC = (id: number,tenCSVC: string, giagoc:number, soluong:number, thoigianmua:Date) => {
        let date1 = new Date(thoigianmua)
        setId(id)
        setTenCSVC(tenCSVC)
        setGiagoc(giagoc)
        setSoluong(soluong)
        setThoigianmua(date1)
        setStep("capnhat")
    }

    const handleCapnhatCSVC = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLCSVC(
            {
                id: id,
                tenCSVC: tenCSVC,
                giagoc: giagoc,
                soluong: soluong,
                thoigianmua: thoigianmua

            }
        );
        if (res && res.errCode === 0) {
            setTenCSVC('')
            setGiagoc(0)
            setSoluong(0)
            setThoigianmua(new Date())
            handleCSVC()
            setStep('them')
            alert("Cập nhật cơ sở vật chất thành công")


        } else {
            console.log(res)
            alert("Cập nhật cơ sở vật chất không thành công")
        };

    }
    const handleXoaCSVC = async (idcsvc: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLCSVC(
            {
                id: idcsvc
            }
        );
        if (res && res.errCode === 0) {
            setTenCSVC('')
            setGiagoc(0)
            setSoluong(0)
            setThoigianmua(new Date())
            handleCSVC()
            alert("Xóa cơ sở vật chất thành công")

        } else {
            console.log(res)
            alert("Xóa cơ sở vật chất không thành công")
        };

    }
    useEffect(() => {
        // console.log("csvc", csvc)
        setCsvcQL(csvc)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm cơ sở vật chất:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật cơ sở vật chất :</p>
                    )
                }
                {/* <div className="flex w-full border-2 border-green-300">
                    <div className="basis-1/2 border-2 border-gray-300">

                    </div>
                    <div className="basis-1/2 border-2 border-gray-800"></div>
                </div> */}
                <div className="grid grid-cols-2 p-3 gap-4">
                    <div className="flex ">
                        <p className="w-3/12 ">Tên CSVC:</p>
                        {/* <p>sdfghjk</p> */}
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={tenCSVC} onChange={(e) => setTenCSVC(e.target.value)} />
                    </div>

                    <div className="flex ">
                        <p className="w-4/12">Số lượng:</p>
                        <input type="number" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={soluong} onChange={(e) => setSoluong(e.target.valueAsNumber)} />
                    </div>

                    <div className="flex  ">
                        <p className="w-3/12">Giá:</p>
                        <input type="number" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={giagoc} onChange={(e) => setGiagoc(e.target.valueAsNumber)} />
                    </div>

                    <div className="flex ">
                        <p className="w-4/12">Thời gian mua:</p>
                        {/* <input type="date" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={thoigianmua} onChange={(e) => setThoigianmua(e.target.value)} /> */}
                        <DatePicker
                            dateFormat='dd/MM/yyyy'
                            selected={thoigianmua}
                            onChange={(date: Date) => setThoigianmua(date)} />

                    </div>
                </div>
                {step === "them" &&
                    (
                        <button onClick={handleThemCSVC} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Thêm CSVC</button>

                    )
                }
                {step === "capnhat" &&
                    (
                        <button onClick={handleCapnhatCSVC} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Cập nhật CSVC</button>

                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Tên CSVC</th>
                                <th className="border border-slate-300">Giá</th>
                                <th className="border border-slate-300 w-20">Số lượng</th>
                                <th className="border border-slate-300 w-20">Thời gian mua</th>
                                <th className="border border-slate-300 w-20">Tác vụ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                csvcQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.tenCSVC}</td>
                                            <td className="border border-slate-300 p-2">{item.giagoc}</td>
                                            <td className="border border-slate-300 p-2">{item.soluong}</td>
                                            <td className="border border-slate-300 p-2">
                                            {
                                                dayjs(item.thoigianmua).format("DD/MM/YYYY")                                            
                                            }
                                            </td>

                                            <td className="border border-slate-300 text-center">
                                                <button> 
                                                    <EditIcon onClick={() => handleSuaCSVC(item.id, item.tenCSVC, item.giagoc, item.soluong, item.thoigianmua)}/>
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaCSVC(item.id)}/>
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

export default CSVC_QL;