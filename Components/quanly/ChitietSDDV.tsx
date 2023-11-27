
import { Dichvu, LayChitietSDDV, LayPhieudat, SuaChitietSDDV, ThemChitietSDDV, XoaChitietSDDV } from "@/Service/userService";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const ChitietSDDV = () => {
    interface ChitietSDDV {
        id: number;
        id_PD: number;
        id_DV: number;
        solansudung: number;
        soluong: number;
        thanhtien: number;
    }
    interface Dichvu {
        id: number;
        tenDV: string;
        gia: number;
        DVT: string;
        ghichu: string;
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
        ghichu: string,
        ngaygio_nhanphong: Date,
        ngaygio_traphong: Date
        // dieukien: string
    }

    const [step, setStep] = useState("them");

    const [sddv, setSDDV] = useState<ChitietSDDV[]>([]);
    const [dichvu, setDichvu] = useState<Dichvu[]>([]);
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);
    // const [id, setId] = useState('');
    const [idCTSDDV, setIdCTSDDV] = useState(Number);
    const [id_DV, setId_DV] = useState(Number);
    const [id_PD, setId_PD] = useState('');
    const [solansudung, setSolansudung] = useState(Number);
    const [soluong, setSoluong] = useState(Number);
    const [thanhtien, setThanhtien] = useState(Number);
    const [valueTenDV, setValueTenDV] = useState("");
    let gia1: number


    const handleLayID_DV = (value: string) => {
        console.log(value)
        let i = value.indexOf(' -')
        let str1 = value.slice(0, i)
        let str2 = value.slice(i + 3)
        console.log(i)
        console.log("str1", str1)
        console.log(str2)
        dichvu.map((item) => {
            if (item.tenDV === str1 && item.gia === Number(str2)) {
                setId_DV(item.id)
                setValueTenDV(item.tenDV + ' - ' + item.gia + ' VND')
            }
        })
    }

    const handleThemCT = async () => {
        console.log("id_PD", id_PD)
        console.log("id_DV", id_DV)
        console.log("solansudung", solansudung)
        console.log("soluong", soluong)
        // console.log("motaEN", dientich)
        let res = await ThemChitietSDDV(
            {
                id_PD: Number(id_PD),
                id_DV: id_DV,
                solansudung: solansudung,
                soluong: soluong,
                thanhtien: thanhtien

            }
        );
        if (res && res.errCode === 0) {
        //     setThanhtien(solansudung*soluong*gia1)
        // console.log("tiennnnn",gia1)
            setId_PD('')
            setId_DV(0)

            setSolansudung(0)
            setValueTenDV('')
            setSoluong(0)
            handleLayCTSDDV()
            alert("Thêm chi tiết SDDV thành công")

        } else {
            console.log(res)
            alert("Thêm chi tiết SDDV không thành công")
        };

    }
    const handleLayCTSDDV = async () => {
        try {
            const params = {
                id_sddv: "ALL",
            };
            console.log(params)

            const response = await LayChitietSDDV(params);
            const res: ChitietSDDV[] = response.sddichvu;
            console.log(response)
            console.log(res)
            setSDDV(res);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSuaCTSDDV = (id: number, id_PD: number, id_DV: number, solansudung: number, soluong: number, thanhtien: number) => {
        // let date = new Date(thoigianbatdau)
        // console.log("id", id_LP)
        // console.log("csvc", id_CSVC)
        // console.log("id_Phong", id_Phong)
        // console.log("soluong", soluong)
        // console.log("thoigianbatdau", thoigianbatdau)
        setIdCTSDDV(id)
        setSolansudung(solansudung)
        setSoluong(soluong)
        setId_PD(String(id_PD))

        dichvu.map((item) => {
            if (id_DV === item.id) {
                setId_DV(item.id)
                setValueTenDV(item.tenDV + ' - ' + item.gia + ' VND')
            }
        })

        // setId(id)
        // setMota(mota)
        // setDientich(dientich)
        setStep("capnhat")
    }

    const handleCapnhatCTSDDV = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaChitietSDDV(
            {
                id: idCTSDDV,
                id_PD: Number(id_PD),
                id_DV: id_DV,
                solansudung: solansudung,
                soluong: soluong,
                thanhtien: thanhtien
            }
        );
        if (res && res.errCode === 0) {
            setIdCTSDDV(0)
            setSolansudung(0)
            setSoluong(0)
            setId_PD('')
            setValueTenDV('')
            handleLayCTSDDV()
            setStep('them')
            alert("Cập nhật sử dụng dịch vụ thành công")


        } else {
            console.log(res)
            alert("Cập nhật sử dụng dịch vụ không thành công")
        };

    }
    const handleXoaCTSDDV = async (id: number) => {

        // console.log("mota", mota)
        console.log("motaEN", idCTSDDV)

        let res = await XoaChitietSDDV(
            {
                id: id
            }
        );
        if (res && res.errCode === 0) {
            setIdCTSDDV(0)
            setSolansudung(0)
            setSoluong(0)
            setId_PD('')
            setValueTenDV('')
            handleLayCTSDDV()
            alert("Xóa CTSDDV thành công")
        } else {
            console.log(res)
            alert("Xóa CTSDDV không thành công")
        };
    }
    useEffect(() => {
        const handleLayDichVu = async () => {
            try {
                const params = {
                    id_dv: "ALL",
                };
                console.log(params)

                const response = await Dichvu(params);
                const res: Dichvu[] = response.dichvu;
                console.log(response)
                console.log(res)
                setDichvu(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handleLayCTSDDV = async () => {
            try {
                const params = {
                    id_sddv: "ALL",
                };
                console.log(params)

                const response = await LayChitietSDDV(params);
                const res: ChitietSDDV[] = response.sddichvu;
                console.log(response)
                console.log(res)
                setSDDV(res);
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
        handleLayCTSDDV()
        handleLayDichVu()
        handleLayPhieudat()
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-8/12 flex m-auto mt-10">
                <div className="w-6/12 space-y-6 ">
                    <div className="flex">
                        <p className="basis-4/12 pt-4">Mã phiếu đặt</p>
                        <Autocomplete
                            value={id_PD}
                            clearOnEscape
                            id="clear-on-escape"
                            options={phieudat.map((option) => String(option.id))}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? setId_PD(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="Mã phiếu đặt" variant="standard" />}
                        />
                    </div>
                    <div className="flex ">
                        <p className="basis-4/12">Số lượng:</p>
                        <input type="number"
                            className="w-72 border-b-2 border-gray-400 outline-none pl-1"
                            value={soluong} onChange={(e) => setSoluong(e.target.valueAsNumber)}
                            min={1} />
                    </div>

                </div>
                <div className="w-6/12 space-y-6">
                    <div className="flex ">
                        <p className="basis-4/12 pt-4">Tên dịch vụ:</p>
                        <Autocomplete
                            value={valueTenDV}
                            clearOnEscape
                            id="clear-on-escape"
                            options={dichvu.map((option) => option.tenDV + ' - ' + option.gia)}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_DV(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="Tên dịch vụ - Giá" variant="standard" />}
                        />
                    </div>

                    <div className="flex ">
                        <p className="basis-4/12">Số lần sử dụng:</p>
                        <input type="number"
                            className="w-72 border-b-2 border-gray-400 outline-none pl-1"
                            value={solansudung} onChange={(e) => setSolansudung(e.target.valueAsNumber)}
                            min={1} />
                    </div>
                </div>
            </div>
            {step === "them" &&
                (
                    <div className=" text-right w-10/12">
                        <button onClick={handleThemCT} className="bg-green-400 w-56 h-10 rounded-lg mt-8 hover:bg-green-500">Thêm sử dụng dịch vụ</button>
                    </div>
                )
            }
            {step === "capnhat" &&
                (
                    <div className=" text-right w-10/12">
                        <button onClick={handleCapnhatCTSDDV} className="bg-green-400 w-56 h-10 rounded-lg mt-8 hover:bg-green-500">Cập sử dụng dịch vụ</button>
                    </div>
                )
            }
            <div className="mt-8">
                <table className="border-separate border border-slate-400 m-auto text-center w-11/12">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-20 ">#</th>
                            <th className="border border-slate-300">Mã phiếu đặt</th>
                            <th className="border border-slate-300">Tên dịch vụ</th>
                            <th className="border border-slate-300 ">Số lần sử dụng</th>
                            <th className="border border-slate-300 ">Số lượng</th>
                            <th className="border border-slate-300 ">Đơn giá</th>
                            <th className="border border-slate-300 ">Thành tiền</th>
                            <th className="border border-slate-300 ">Tác vụ</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sddv.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-300 text-center">{item.id}</td>
                                        <td className="border border-slate-300 p-2">{item.id_PD}</td>
                                        <td className="border border-slate-300 p-2">
                                            {dichvu.map((item1) =>
                                                item1.id === item.id_DV ? item1.tenDV : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">{item.solansudung}</td>
                                        <td className="border border-slate-300 p-2">{item.soluong}</td>
                                        <td className="border border-slate-300 p-2">
                                            {dichvu.map((item1) =>
                                                item1.id === item.id_DV ? item1.gia : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">
                                            {thanhtien}
                                            {/* {dichvu.map((item1) =>
                                                item1.id === item.id_DV ? item.solansudung * item.soluong * item1.gia : null
                                            )} */}

                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            <button>
                                                <EditIcon onClick={() => handleSuaCTSDDV(item.id, item.id_PD, item.id_DV, item.solansudung, item.soluong, item.thanhtien)} />
                                            </button>
                                            <button>
                                                    <DeleteIcon onClick={() => handleXoaCTSDDV(item.id)} />
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

    )
}

export default ChitietSDDV;