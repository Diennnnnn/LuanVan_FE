
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllNhanvien, Danhmuccsvc, Dichvu, SuaQLCSVC, SuaQLDichvu, SuaQLNhanvien, ThemQLCSVC, ThemQLDichvu, ThemQLNhanvien, XoaQLCSVC, XoaQLDichvu, XoaQLNhanvien } from "@/Service/userService";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { stderr } from "process";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const NhanvienQL = () => {
    interface Nhanvien {
        id: number;
        hotenNV: string;
        gioitinh: string,
        ngaysinh: Date,
        CCCD: string,
        SDT: string,
        email: string,
        diachi: string,
        chucvu: string
    }
    const [step, setStep] = useState("them");
    const [allnv, setAllnv] = useState<Nhanvien[]>([]);
    const [roll, setRoll] = useState('')
    const [ngaysinh, setNgaysinh] = useState(new Date());
    const [hotenNV, setHotenNV] = useState("");
    const [gioitinh, setGioitinh] = useState("")
    const [CCCD, setCCCD] = useState("")
    const [SDT, setSDT] = useState("")
    const [email, setEmail] = useState("")
    const [diachi, setDiachi] = useState("");
    const [chucvu, setChucvu] = useState("");
    const [id, setId] = useState(Number)



    const handleThemNhanvien = async () => {

        let res = await ThemQLNhanvien(
            {
                hotenNV: hotenNV,
                ngaysinh: ngaysinh,
                gioitinh: roll,
                CCCD: CCCD,
                SDT: SDT,
                email: email,
                diachi: diachi,
                chucvu: chucvu

            }
        );
        if (res && res.errCode === 0) {
            setHotenNV('')
            setNgaysinh(new Date())
            setRoll('')
            setCCCD('')
            setSDT('')
            setEmail('')
            setDiachi('')
            setChucvu('')
            handleLayAllNhanvien()
            alert("Thêm thông tin nhân viên thành công")

        } else {
            console.log(res)
            alert("Thêm thông tin nhân viên không thành công")
        };

    }
    const handleLayAllNhanvien = async () => {
        try {
            const params = {
                id_allnv: "ALL",
            };
            console.log(params)

            const response = await AllNhanvien(params);
            const res: Nhanvien[] = response.allnv;
            console.log(response)
            console.log(res)
            setAllnv(res);
        } catch (error) {
            console.log(error);
        }
    };



    const handleSuaNhanvien = (id: number, hotenNV: string, ngaysinh: Date, gioitinh: string, CCCD: string, SDT: string, email: string, diachi: string, chucvu: string,) => {
        let date = new Date(ngaysinh)

        setId(id)
        setHotenNV(hotenNV)
        setNgaysinh(date)
        setRoll(gioitinh)
        setSDT(SDT)
        setCCCD(CCCD)
        setEmail(email)
        setDiachi(diachi)
        setChucvu(chucvu)
        setStep("capnhat")
    }

    const handleCapnhatNhanvien = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLNhanvien(
            {
                id: id,
                hotenNV: hotenNV,
                ngaysinh: ngaysinh,
                gioitinh: roll,
                CCCD: CCCD,
                SDT: SDT,
                email: email,
                diachi: diachi,
                chucvu: chucvu

            }
        );
        if (res && res.errCode === 0) {
            setHotenNV('')
            setNgaysinh(new Date())
            setRoll('')
            setCCCD('')
            setSDT('')
            setEmail('')
            setDiachi('')
            setChucvu('')
            handleLayAllNhanvien()
            setStep('them')
            alert("Cập nhật thông tin nhân viên thành công")

        } else {
            console.log(res)
            alert("Cập nhật thông tin nhân viên không thành công")
        };

    }
    const handleXoaNhanvien = async (idnhanvien: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLNhanvien(
            {
                id: idnhanvien
            }
        );
        if (res && res.errCode === 0) {
            setHotenNV('')
            setNgaysinh(new Date())
            setRoll('')
            setCCCD('')
            setSDT('')
            setEmail('')
            setDiachi('')
            setChucvu('')
            handleLayAllNhanvien()
            alert("Xóa thông tin nhân viên thành công")

        } else {
            console.log(res)
            alert("Xóa thông tin nhân viên không thành công")
        };

    }
    useEffect(() => {
        const handleLayAllNhanvien = async () => {
            try {
                const params = {
                    id_allnv: "ALL",
                };
                console.log(params)

                const response = await AllNhanvien(params);
                const res: Nhanvien[] = response.allnv;
                console.log(response)
                console.log(res)
                setAllnv(res);
            } catch (error) {
                console.log(error);
            }
        };

        handleLayAllNhanvien()
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách nhân viên Homestay</p>
                {step === "them" &&
                    (

                        <p className="mt-5 text-xl">Thêm thông tin nhân viên:</p>
                    )
                }
                {step === "capnhat" &&
                    (
                        <p className="mt-5 text-xl">Cập nhật thông tin nhân viên:</p>
                    )
                }
                <div className="grid grid-cols-2 p-3 gap-5">
                    <div className="flex ">
                        <p className="w-3/12 ">Họ và tên:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={hotenNV} onChange={(e) => setHotenNV(e.target.value)}
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-3/12 ">Số điện thoại:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={SDT} onChange={(e) => setSDT(e.target.value)}
                        />
                    </div>
                    <div className=" flex  ">
                        <p className="w-3/12">Giới tính:</p>
                        <div className="space-x-7">
                            <input type="radio" className="" value='Nam' name='roll' checked={roll === "Nam"} onChange={(e) => setRoll(e.target.value)} />  Nam
                            <input type="radio" className="" value='Nữ' name='roll' checked={roll === "Nữ"} onChange={(e) => setRoll(e.target.value)} />  Nữ
                        </div>
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Email:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Ngày sinh:</p>

                        <DatePicker
                            className="outline-none border-b-2 border-gray-400 pl-1 w-72"
                            dateFormat='dd/MM/yyyy'
                            selected={ngaysinh}
                            onChange={(date: Date) => setNgaysinh(date)}

                        />

                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Địa chỉ:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={diachi} onChange={(e) => setDiachi(e.target.value)}
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">CCCD:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={CCCD} onChange={(e) => setCCCD(e.target.value)}
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Chức vụ:</p>
                        <input type="text" className="w-72 border-b-2 border-gray-400 outline-none"
                            value={chucvu} onChange={(e) => setChucvu(e.target.value)}
                        />
                    </div>
                </div>
                {step === "them" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleThemNhanvien} className="bg-green-400 w-60 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm thông tin nhân viên</button>
                        </div>
                    )
                }
                {step === "capnhat" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleCapnhatNhanvien} className="bg-green-400 w-72 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật thông tin nhân viên</button>
                        </div>
                    )
                }



            </div>
            <div className="mt-8">
                <table className="border-separate border border-slate-400 m-auto text-center w-11/12">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-10 ">#</th>
                            <th className="border border-slate-300">Họ và tên</th>
                            <th className="border border-slate-300">Giới tính</th>
                            <th className="border border-slate-300 w-20">Ngày sinh</th>
                            <th className="border border-slate-300 w-20">CCCD</th>
                            <th className="border border-slate-300 w-20">Số điện thoại</th>
                            <th className="border border-slate-300 w-20">Email</th>
                            <th className="border border-slate-300 w-20">Địa chỉ</th>
                            <th className="border border-slate-300 w-20">Chức vụ</th>

                            <th className="border border-slate-300 w-20">Tác vụ</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allnv.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-300 text-center">{item.id}</td>
                                        <td className="border border-slate-300 p-2">{item.hotenNV}</td>
                                        <td className="border border-slate-300 p-2">{item.gioitinh}</td>
                                        <td className="border border-slate-300 p-2">
                                            {
                                                dayjs(item.ngaysinh).format("DD/MM/YYYY")
                                            }
                                        </td>
                                        <td className="border border-slate-300 p-2">{item.CCCD}</td>
                                        <td className="border border-slate-300 p-2">{item.SDT}</td>
                                        <td className="border border-slate-300 p-2">{item.email}</td>
                                        <td className="border border-slate-300 p-2">{item.diachi}</td>
                                        <td className="border border-slate-300 p-2">{item.chucvu}</td>



                                        <td className="border border-slate-300 text-center">
                                            <button>
                                                <EditIcon onClick={() => handleSuaNhanvien(item.id, item.hotenNV, item.ngaysinh, item.gioitinh, item.CCCD, item.SDT, item.email, item.diachi, item.chucvu)} />
                                            </button>
                                            <button>
                                                <DeleteIcon onClick={() => handleXoaNhanvien(item.id)} />
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

export default NhanvienQL;