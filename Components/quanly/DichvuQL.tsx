
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Danhmuccsvc, Dichvu, SuaQLCSVC, SuaQLDichvu, ThemQLCSVC, ThemQLDichvu, XoaQLCSVC, XoaQLDichvu } from "@/Service/userService";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    dichvu: any,
};
const DichvuQL = ({ dichvu }: Props) => {
    interface Dichvu {
        id: number;
        tenDV: string;
        gia: number;
        DVT: string;
        ghichu: string;
    
      }
    const [step, setStep] = useState("them");
    const [dichvuQL, setDichvuQL] = useState<Dichvu[]>([]);

    const [tenDV, setTenDV] = useState("");
    const [gia, setGia] = useState(Number)
    const [DVT, setDVT] = useState("");
    const [ghichu, setGhichu] = useState("");
    const [id, setId] = useState(Number)

    const handleThemDichvu = async () => {

        let res = await ThemQLDichvu(
            {
                tenDV: tenDV,
                gia: gia,
                DVT: DVT,
                ghichu: ghichu

            }
        );
        if (res && res.errCode === 0) {
            setTenDV('')
            setGia(0)
            setDVT('')
            setGhichu('')
            handleLayDichVu()
            alert("Thêm dịch vụ thành công")

        } else {
            console.log(res)
            alert("Thêm dịch vụ không thành công")
        };

    }
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
          setDichvuQL(res);
        } catch (error) {
          console.log(error);
        }
      };
  
  

    const handleSuaDichVu = (id: number,tenDV: string, gia:number, DVT:string, ghichu:string) => {
        setId(id)
        setTenDV(tenDV)
        setGia(gia)
        setDVT(DVT)
        setGhichu(ghichu)
        setStep("capnhat")
    }

    const handleCapnhatDichVu = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLDichvu(
            {
                id: id,
                tenDV: tenDV,
                gia: gia,
                DVT: DVT,
                ghichu: ghichu

            }
        );
        if (res && res.errCode === 0) {
            setTenDV('')
            setGia(0)
            setDVT('')
            setGhichu('')
            handleLayDichVu()
            setStep('them')
            alert("Cập nhật dịch vụ thành công")

        } else {
            console.log(res)
            alert("Cập nhật dịch vụ không thành công")
        };

    }
    const handleXoaDichVu = async (iddichvu: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLDichvu(
            {
                id: iddichvu
            }
        );
        if (res && res.errCode === 0) {
            setTenDV('')
            setGia(0)
            setDVT('')
            setGhichu('')
            handleLayDichVu()
            alert("Xóa dịch vụ thành công")

        } else {
            console.log(res)
            alert("Xóa dịch vụ không thành công")
        };

    }
    useEffect(() => {
        // console.log("csvc", csvc)
        setDichvuQL(dichvu)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Dịch vụ của Homstay</p>
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm dịch vụ:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật dịch vụ:</p>
                    )
                }
                <div className="grid grid-cols-2 p-3 gap-4">
                    <div className="flex ">
                        <p className="w-3/12 ">Tên dịch vụ:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                        value={tenDV} onChange={(e) => setTenDV(e.target.value)}/>
                    </div>
                    <div className="flex ">
                        <p className="w-3/12 ">Ghi chú:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                        value={ghichu} onChange={(e) => setGhichu(e.target.value)}/>
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Giá:</p>
                        <input type="number" className="w-60 border-b-2 border-gray-400 outline-none"
                         value={gia} onChange={(e) => setGia(e.target.valueAsNumber)} />
                    </div>
                    <div className="flex ">
                        <p className="w-3/12">Đơn vị tính:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none" 
                        value={DVT} onChange={(e) => setDVT(e.target.value)}/>
                    </div>
                </div>
                {step === "them" &&
                    (
                        <button onClick={handleThemDichvu} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Thêm dịch vụ</button>

                    )
                }
                {step === "capnhat" &&
                    (
                        <button onClick={handleCapnhatDichVu} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Cập nhật dịch vụ</button>

                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Tên CSVC</th>
                                <th className="border border-slate-300">Giá</th>
                                <th className="border border-slate-300 w-20">DVT</th>
                                <th className="border border-slate-300 w-20">Ghi chú</th>
                                <th className="border border-slate-300 w-20">Tác vụ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                dichvuQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.tenDV}</td>
                                            <td className="border border-slate-300 p-2">{item.gia}</td>
                                            <td className="border border-slate-300 p-2">{item.DVT}</td>
                                            <td className="border border-slate-300 p-2">{item.ghichu}</td>

                                            <td className="border border-slate-300 text-center">
                                                <button> 
                                                    <EditIcon onClick={() => handleSuaDichVu(item.id, item.tenDV, item.gia, item.DVT, item.ghichu)}/>
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaDichVu(item.id)}/>
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

export default DichvuQL;