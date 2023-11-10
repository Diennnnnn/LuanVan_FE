
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Danhmuccsvc, Dsthietbi, Loaiphong, Phong, SuaQLCSVC, SuaQLPhong, SuaQLThietbi, ThemQLCSVC, ThemQLPhong, ThemQLThietbi, Vitri, XoaQLCSVC, XoaQLPhong, XoaQLThietbi } from "@/Service/userService";
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

const Phong_QL = () => {
    interface Phong {
        //tên giống csdl
        id: number;
        id_LP: number;
        id_VT: number;
        tenphong: string;
        trangthai: string;
        mota: string;
        dientich: number;
    }
    interface Vitri {
        id: number;
        khu: string;
        tang: number;
        // dientich: number;
    }
    interface Loaiphong {
        id: number;
        tenloaiphong: string;
        songuoi: number;
        gia: number;
    }

    const [phong, setPhong] = useState<Phong[]>([]);
    const [vitri, setVitri] = useState<Vitri[]>([]);
    const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);

    const [step, setStep] = useState("them");
    const [valueLoaiphong, setValueLoaiphong] = useState("");
    const [valueKhu, setValueKhu] = useState("");
    const [valueTang, setValueTang] = useState(0);

    // const [thietbi, setThietbi] = useState<Dsthietbi[]>([]);
    const [id_P, setId_P] = useState(Number)
    const [id_LP, setId_LP] = useState(Number)
    const [id_VT, setId_VT] = useState(Number)
    const [tenphong, setTenphong] = useState('')
    const [mota, setMota] = useState('')
    const [dientich, setDientich] = useState(Number)
    // const [tenCSVC, setTenCSVC] = useState("");
    // const [giagoc, setGiagoc] = useState(Number)
    // const [soluong, setSoluong] = useState(Number)
    // const [thoigianbatdau, setThoigianbatdau] = useState(new Date());
    const [id, setId] = useState(Number)



    const handleLayID_LP = (value: string) => {
        console.log(value)
        let i = value.indexOf(' -')
        let str1 = value.slice(0, i)
        let str2 = value.slice(i + 3, i + 4)
        let str3 = value.slice(i+13)
        // console.log(i)
        // console.log(str1)
        // console.log(str2)
        // console.log(str3)
        loaiphong.map((item) => {
            if (item.tenloaiphong === str1 && item.songuoi === Number(str2) && item.gia === Number(str3)) {
                setId_LP(item.id)
                setValueLoaiphong(item.tenloaiphong + ' - ' + item.songuoi + ' người'+ ' - ' + item.gia + ' VND')
                
            }
        })

    }
    const handleLayID_VT = (value: string) => {
        console.log(value)
        let i = value.indexOf(' -')
        let str1 = value.slice(4, i)
        let str2 = value.slice(value.length - 1, value.length)
        console.log(i)
        console.log(str1)
        console.log(str2)
        vitri.map((item) => {
            if (item.khu === str1 && item.tang === Number(str2)) {
                setId_VT(item.id)
                setValueKhu('Khu ' + item.khu + ' - ' + 'Tầng ' + item.tang)

            }
        })

    }
    // const handleLayID_Phong = (value: string) => {
    //     setValuePhong(value)

    //     phongQL.map(async (item) => {
    //         if (value === item.tenphong) {
    //             setId_Phong(item.id)
    //         }

    //     })

    // }
    const handleThemPhong = async () => {
        console.log("mota", id_LP)
        console.log("motaEN", id_VT)
        console.log("mota", tenphong)
        console.log("motaEN", mota)
        console.log("motaEN", dientich)
        let res = await ThemQLPhong(
            {
                id_LP: id_LP,
                id_VT: id_VT,
                tenphong: tenphong,
                mota: mota,
                dientich: dientich

            }
        );
        if (res && res.errCode === 0) {
            setId_LP(0)
            setId_VT(0)
            setTenphong('')
            setMota('')
            setDientich(0)
            setValueLoaiphong('')
            setValueKhu('')
            handleLayPhong()
            alert("Thêm phòng thành công")

        } else {
            console.log(res)
            alert("Thêm phòng không thành công")
        };

    }
    const handleLayPhong = async () => {
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

    const handleSuaPhong = (id: number, tenphong: string, id_LP: number, id_VT: number, mota: string, dientich: number) => {
        // let date = new Date(thoigianbatdau)
        console.log("id", id_LP)
        // console.log("csvc", id_CSVC)
        // console.log("id_Phong", id_Phong)
        // console.log("soluong", soluong)
        // console.log("thoigianbatdau", thoigianbatdau)
        setTenphong(tenphong)
        setId_P(id)
        setMota(mota)
        setDientich(dientich)


        loaiphong.map((item) => {
            if (id_LP === item.id) {
                setId_LP(item.id)
                setValueLoaiphong(item.tenloaiphong + ' - ' + item.songuoi + ' người'+ ' - ' + item.gia + ' VND')
            }
        })
        vitri.map((item) => {
            if (id_VT === item.id) {
                setValueKhu('Khu ' + item.khu + ' - ' + 'Tầng ' + item.tang)
                setId_VT(item.id)
            }
        })
        vitri.map((item) => {
            if (id_VT === item.id) {
                setValueTang(item.tang)
                setId_VT(item.id)
            }
        })
        setId(id)
        setMota(mota)
        setDientich(dientich)
        setStep("capnhat")
    }

    const handleCapnhatPhong = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLPhong(
            {
                id: id_P,
                id_LP: id_LP,
                id_VT: id_VT,
                tenphong: tenphong,
                mota: mota,
                dientich: dientich
            }
        );
        if (res && res.errCode === 0) {
            setId_LP(0)
            setId_VT(0)
            setTenphong('')
            setMota('')
            setDientich(0)
            handleLayPhong()
            setStep('them')
            alert("Cập nhật phòng thành công")


        } else {
            console.log(res)
            alert("Cập nhật phòng không thành công")
        };

    }
    const handleXoaPhong = async (id: number) => {
        ` `
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLPhong(
            {
                id: id
            }
        );
        if (res && res.errCode === 0) {
            setId_LP(0)
            setId_VT(0)
            setTenphong('')
            setMota('')
            setDientich(0)
            handleLayPhong()
            alert("Xóa phòng thành công")
        } else {
            console.log(res)
            alert("Xóa phòng không thành công")
        };
    }


    useEffect(() => {
        const handleLayPhong = async () => {
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
        const handleLayVitri = async () => {
            try {
                const params = {
                    id_vt: "ALL",
                };
                console.log(params)

                const response = await Vitri(params);
                const res: Vitri[] = response.vt;
                console.log(response)
                console.log(res)
                setVitri(res);
            } catch (error) {
                console.log(error);
            }
        };
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
                setLoaiphong(res);
            } catch (error) {
                console.log(error);
            }
        };

        handleLayPhong()
        handleLayVitri()
        handleLayLoaiphong()

    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách phòng</p>

                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm phòng:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật phòng:</p>
                    )
                }

                <div className="grid grid-cols-2 p-3 gap-6">
                    <div className="flex ">
                        <p className="w-3/12">Tên phòng:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={tenphong} onChange={(e) => setTenphong(e.target.value)}
                        />

                    </div>

                    <div className="flex  ">
                        <p className="w-3/12">Diện tích:</p>
                        <input type="number" className="w-72 border-b-2 border-gray-400 outline-none pl-1"
                            value={dientich} onChange={(e) => setDientich(e.target.valueAsNumber)}
                        />
                    </div>


                    <div className="flex ">
                        <p className="w-3/12 pt-4">Loại phòng:</p>

                        <Autocomplete
                            value={valueLoaiphong}
                            clearOnEscape
                            id="clear-on-escape"
                            options={loaiphong.map((option) => option.tenloaiphong + ' - ' + option.songuoi + ' người' + ' - ' + option.gia)}
                            // options={loaiphong.map((option) => [option.tenloaiphong, option.songuoi])}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_LP(newValue) : null }

                            }}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Loại phòng - Số người - Giá" variant="standard" />}
                        />

                    </div>

                    <div className="flex  ">
                        <p className="w-3/12 pt-4">Vị trí:</p>
                        <Autocomplete
                            value={valueKhu}
                            clearOnEscape
                            id="clear-on-escape"
                            options={vitri.map((option) => 'Khu ' + option.khu + ' - ' + 'Tầng ' + option.tang)}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_VT(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="Khu - Tầng" variant="standard" />}
                        />
                    </div>



                    <div className="flex  ">
                        <p className="w-3/12">Mô tả:</p>
                        <textarea className="resize-y rounded-md w-72 border-2 border-gray-400 outline-none p-3"
                            value={mota} onChange={(e) => setMota(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            {step === "them" &&
                (
                    <div className=" text-right w-10/12">
                        <button onClick={handleThemPhong} className="bg-green-400 w-36 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm Phòng</button>
                    </div>
                )
            }
            {step === "capnhat" &&
                (
                    <div className=" text-right w-10/12">
                        <button onClick={handleCapnhatPhong} className="bg-green-400 w-48 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật phòng</button>
                    </div>
                )
            }

            <div className="mt-8">
                <table className="border-separate border border-slate-400 m-auto text-center w-11/12">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-14 ">#</th>
                            <th className="border border-slate-300">Tên phòng</th>
                            <th className="border border-slate-300 ">Loại phòng</th>
                            <th className="border border-slate-300 ">Số người</th>
                            <th className="border border-slate-300 w-80">Mô tả</th>
                            <th className="border border-slate-300 ">Giá</th>
                            <th className="border border-slate-300 ">Diện tích</th>
                            <th className="border border-slate-300 ">Khu</th>
                            <th className="border border-slate-300 ">Tầng</th>
                            <th className="border border-slate-300 ">Tác vụ</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            phong.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-300 text-center">{item.id}</td>
                                        <td className="border border-slate-300 p-2">{item.tenphong}</td>
                                        <td className="border border-slate-300 p-2">
                                            {loaiphong.map((item2) =>
                                                item2.id === item.id_LP ? item2.tenloaiphong : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">
                                            {loaiphong.map((item2) =>
                                                item2.id === item.id_LP ? item2.songuoi : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">{item.mota}</td>
                                        <td className="border border-slate-300 p-2">
                                            {loaiphong.map((item2) =>
                                                item2.id === item.id_LP ? item2.gia : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">{item.dientich}</td>
                                        <td className="border border-slate-300 p-2">
                                            {vitri.map((item2) =>
                                                item2.id === item.id_VT ? item2.khu : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 p-2">
                                            {vitri.map((item2) =>
                                                item2.id === item.id_VT ? item2.tang : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            <button>
                                                <EditIcon onClick={() => handleSuaPhong(item.id, item.tenphong, item.id_LP, item.id_VT, item.mota, item.dientich)} />
                                            </button>
                                            <button>
                                                <DeleteIcon onClick={() => handleXoaPhong(item.id)} />
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

export default Phong_QL;

