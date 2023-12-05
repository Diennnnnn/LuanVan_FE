
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Danhmuccsvc, Dsthietbi, SuaQLCSVC, SuaQLThietbi, ThemQLCSVC, ThemQLThietbi, XoaQLCSVC, XoaQLThietbi } from "@/Service/userService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    csvc: any,
    phong: any
};
const Thietbi_QL = ({ csvc, phong }: Props) => {
    interface Phong {
        //tên giống csdl
        id: number;
        id_LP: number;
        id_VT: number;
        tenphong: string;
        trangthai: string;
        mota: string;
    }
    interface Dsthietbi {
        id: number;
        id_CSVC: number;
        id_Phong: number;
        soluong: number;
        thoigianbatdau: Date;
    }
    interface DanhmucCSVC {
        id: number;
        tenCSVC: string;
        giagoc: number;
        soluong: number;
        thoigianmua: Date
    }

    const [csvcQL, setCsvcQL] = useState<DanhmucCSVC[]>([]);
    const [phongQL, setPhongQL] = useState<Phong[]>([]);
    const [thietbiQL, setThietbiQL] = useState<Dsthietbi[]>([]);
    const [step, setStep] = useState("them");
    const [valueCSVC, setValueCSVC] = useState("");
    const [valuePhong, setValuePhong] = useState("");
    const [thietbi, setThietbi] = useState<Dsthietbi[]>([]);
    const [id_csvc, setId_csvc] = useState(Number)
    const [id_Phong, setId_Phong] = useState(Number)
    const [soluong, setSoluong] = useState(Number)

    // const [tenCSVC, setTenCSVC] = useState("");
    // const [giagoc, setGiagoc] = useState(Number)
    // const [soluong, setSoluong] = useState(Number)
    const [thoigianbatdau, setThoigianbatdau] = useState(new Date());
    const [id, setId] = useState(Number)



    const handleLayID_CSVC = (value: string) => {
        setValueCSVC(value)

        csvcQL.map(async (item) => {
            if (value === item.tenCSVC) {
                setId_csvc(item.id)
            }

        })

    }
    const handleLayID_Phong = (value: string) => {
        setValuePhong(value)

        phongQL.map(async (item) => {
            if (value === item.tenphong) {
                setId_Phong(item.id)
            }

        })

    }
    const handleThemThietbi = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", thoigianmua)

        let res = await ThemQLThietbi(
            {
                id_CSVC: id_csvc,
                id_Phong: id_Phong,
                soluong: soluong,
                thoigianbatdau: thoigianbatdau

            }
        );
        if (res && res.errCode === 0) {
            setId_csvc(0)
            setId_Phong(0)
            setSoluong(0)
            setThoigianbatdau(new Date())
            setValueCSVC('')
            setValuePhong('')
            handleLayThietbi()
            
            alert("Thêm thiết bị thành công")

        } else {
            console.log(res)
            alert("Thêm thiết bị không thành công")
        };

    }
    const handleLayThietbi = async () => {
        try {
            const params = {
                id_phong: "ALL",
            };
            console.log(params)

            const response = await Dsthietbi(params);
            const res: Dsthietbi[] = response.dstb;
            console.log(response)
            console.log(res)
            setThietbi(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSuaThietbi = (id: number, id_CSVC: number, id_Phong: number, soluong: number, thoigianbatdau: Date) => {
        let date = new Date(thoigianbatdau)
        // console.log("id", id)
        // console.log("csvc", id_CSVC)
        // console.log("id_Phong", id_Phong)
        // console.log("soluong", soluong)
        // console.log("thoigianbatdau", thoigianbatdau)

        csvcQL.map((item) => {
            if (id_CSVC === item.id) {
                setValueCSVC(item.tenCSVC)
                setId_csvc(item.id)
            }
        })
        phongQL.map((item) => {
            if (id_Phong === item.id) {
                setValuePhong(item.tenphong)
                setId_Phong(item.id)
            }
        })

        setId(id)
        setSoluong(soluong)
        setThoigianbatdau(date)
        setStep("capnhat")
    }

    const handleCapnhatThietbi = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLThietbi(
            {
                id: id,
                id_CSVC: id_csvc,
                id_Phong: id_Phong,
                soluong: soluong,
                thoigianbatdau: thoigianbatdau

            }
        );
        if (res && res.errCode === 0) {
            setId_csvc(0)
            setId_Phong(0)
            setSoluong(0)
            setThoigianbatdau(new Date())
            setValueCSVC('')
            setValuePhong('')
            handleLayThietbi()
            setStep('them')
            alert("Cập nhật thiết bị thành công")


        } else {
            console.log(res)
            alert("Cập nhật thiết bị không thành công")
        };

    }
    const handleXoaThietbi = async (idthietbi: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLThietbi(
            {
                id: idthietbi
            }
        );
        if (res && res.errCode === 0) {
            setId_csvc(0)
            setId_Phong(0)
            setSoluong(0)
            setThoigianbatdau(new Date())
            handleLayThietbi()
            alert("Xóa thiết bị thành công")

        } else {
            console.log(res)
            alert("Xóa thiết bị không thành công")
        };

    }


    useEffect(() => {
        const handleLayThietbi = async () => {
            try {
                const params = {
                    id_phong: "ALL",
                };
                console.log(params)

                const response = await Dsthietbi(params);
                const res: Dsthietbi[] = response.dstb;
                console.log(response)
                console.log(res)
                setThietbi(res);
            } catch (error) {
                console.log(error);
            }
        };
        // console.log("csvc", csvc)
        setCsvcQL(csvc)
        setPhongQL(phong)
        handleLayThietbi();
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách thiết bị của phòng</p>

                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm thiết bị:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật thiết bị:</p>
                    )
                }

                <div className="grid grid-cols-2 p-3 gap-6">
                    <div className="flex">
                        <p className="w-3/12 pt-4">Tên CSVC:</p>
                        <Autocomplete
                            value={valueCSVC}
                            disablePortal
                            id="combo-box-demo"
                            options={csvcQL.map((option) => option.tenCSVC)}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_CSVC(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="CSVC" variant="standard" />}
                        />

                    </div>

                    <div className="flex ">
                        <p className="w-4/12 pt-4">Tên phòng:</p>
                        <Autocomplete
                            value={valuePhong}
                            clearOnEscape
                            id="clear-on-escape"
                            options={phongQL.map((option) => option.tenphong)}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_Phong(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="Phòng" variant="standard" />}
                        />

                    </div>

                    <div className="flex  ">
                        <p className="w-3/12">Số lượng:</p>
                        <input type="number" min={1} className="w-72 border-b-2 border-gray-400 outline-none pl-1"
                            value={soluong} onChange={(e) => setSoluong(e.target.valueAsNumber)}
                        />
                    </div>

                    <div className="flex ">
                        <p className="w-4/12">Thời gian để vào:</p>

                        <DatePicker
                            className="outline-none border-b-2 w-72 border-gray-400 pl-1"
                            dateFormat='dd/MM/yyyy'
                            selected={thoigianbatdau}
                            onChange={(date: Date) => setThoigianbatdau(date)}

                        />

                    </div>
                </div>
                {step === "them" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleThemThietbi} className="bg-green-400 w-36 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm thiết bị</button>
                        </div>
                    )
                }
                {step === "capnhat" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleCapnhatThietbi} className="bg-green-400 w-48 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật thiết bị</button>
                        </div>
                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 text-center m-auto w-11/12">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-20 ">#</th>
                                <th className="border border-slate-300">Tên CSVC</th>
                                <th className="border border-slate-300">Tên phòng</th>
                                <th className="border border-slate-300 ">Số lượng</th>
                                <th className="border border-slate-300 ">Thời gian để vào</th>
                                <th className="border border-slate-300 ">Tác vụ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                thietbi.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">
                                                {csvcQL.map((item1) =>
                                                    item1.id === item.id_CSVC ? item1.tenCSVC : null
                                                )}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {phongQL.map((item2) =>
                                                    item2.id === item.id_Phong ? item2.tenphong : null
                                                )}
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.soluong}</td>
                                            <td className="border border-slate-300 p-2">
                                                {
                                                    dayjs(item.thoigianbatdau).format("DD/MM/YYYY")
                                                }
                                            </td>

                                            <td className="border border-slate-300 text-center">
                                                <button>
                                                    <EditIcon onClick={() => handleSuaThietbi(item.id, item.id_CSVC, item.id_Phong, item.soluong, item.thoigianbatdau)} />
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaThietbi(item.id)} />
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

export default Thietbi_QL;
{/* <input type="date" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={thoigianmua} onChange={(e) => setThoigianmua(e.target.value)} /> */}
