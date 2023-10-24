
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    khuyenmai: any,
};
const KhuyenmaiQL = ({khuyenmai}: Props) => {
    interface Khuyenmai {
        id: number;
        tenKM: string;
        phantram: number;
        mota: string;
        start: string;
        finish: string;
      }
    const [step, setStep] = useState("them");
    const [khuyenmaiQL, setKhuyenmaiQL] = useState<Khuyenmai[]>([]);
    // const [tenDV, setTenDV] = useState("");
    // const [gia, setGia] = useState(Number)
    // const [DVT, setDVT] = useState("");
    // const [ghichu, setGhichu] = useState("");
    // const [id, setId] = useState(Number)

    // const handleThemDichvu = async () => {

    //     let res = await ThemQLDichvu(
    //         {
    //             tenDV: tenDV,
    //             gia: gia,
    //             DVT: DVT,
    //             ghichu: ghichu

    //         }
    //     );
    //     if (res && res.errCode === 0) {
    //         setTenDV('')
    //         setGia(0)
    //         setDVT('')
    //         setGhichu('')
    //         handleLayDichVu()
    //         alert("Thêm dịch vụ thành công")

    //     } else {
    //         console.log(res)
    //         alert("Thêm dịch vụ không thành công")
    //     };

    // }
    // const handleLayDichVu = async () => {
    //     try {
    //       const params = {
    //         id_dv: "ALL",
    //       };
    //       console.log(params)
  
    //       const response = await Dichvu(params);
    //       const res: Dichvu[] = response.dichvu;
    //       console.log(response)
    //       console.log(res)
    //       setDichvuQL(res);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
  

    // const handleSuaDichVu = (id: number,tenDV: string, gia:number, DVT:string, ghichu:string) => {
    //     setId(id)
    //     setTenDV(tenDV)
    //     setGia(gia)
    //     setDVT(DVT)
    //     setGhichu(ghichu)
    //     setStep("capnhat")
    // }

    // const handleCapnhatDichVu = async () => {
    //     // console.log("mota", mota)
    //     // console.log("motaEN", motaEN)

    //     let res = await SuaQLDichvu(
    //         {
    //             id: id,
    //             tenDV: tenDV,
    //             gia: gia,
    //             DVT: DVT,
    //             ghichu: ghichu

    //         }
    //     );
    //     if (res && res.errCode === 0) {
    //         setTenDV('')
    //         setGia(0)
    //         setDVT('')
    //         setGhichu('')
    //         handleLayDichVu()
    //         setStep('them')
    //         alert("Cập nhật dịch vụ thành công")

    //     } else {
    //         console.log(res)
    //         alert("Cập nhật dịch vụ không thành công")
    //     };

    // }
    // const handleXoaDichVu = async (iddichvu: number) => {
    //     // console.log("mota", mota)
    //     // console.log("motaEN", motaEN)

    //     let res = await XoaQLDichvu(
    //         {
    //             id: iddichvu
    //         }
    //     );
    //     if (res && res.errCode === 0) {
    //         setTenDV('')
    //         setGia(0)
    //         setDVT('')
    //         setGhichu('')
    //         handleLayDichVu()
    //         alert("Xóa dịch vụ thành công")

    //     } else {
    //         console.log(res)
    //         alert("Xóa dịch vụ không thành công")
    //     };

    // }
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
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                       />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12 ">Phần trăm KH:</p>
                        <input type="number" className="w-60 border-b-2 border-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Mô tả:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                         />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Thời gian bắt đầu:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none" 
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Thời gian Kết thúc:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none" 
                        />
                    </div>
                    <div className="flex ">
                        <p className="w-4/12">Điều kiện:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                         />
                    </div>
                </div>
                {step === "them" &&
                    (
                        <button className="bg-green-500 w-44 h-10 rounded-lg mt-5 ">Thêm khuyến mãi</button>

                    )
                }
                {step === "capnhat" &&
                    (
                        <button  className="bg-green-500 w-44 h-10 rounded-lg mt-5 ">Cập nhật khuyến mãi</button>

                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Tên khuyến mãi</th>
                                <th className="border border-slate-300">Phần trăm</th>
                                <th className="border border-slate-300 w-20">Mô tả</th>
                                <th className="border border-slate-300 w-20">Thời gian bắt đầu</th>
                                <th className="border border-slate-300 w-20">Thời gian kết thúc</th>
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
                                            <td className="border border-slate-300 p-2">{item.start}</td>
                                            <td className="border border-slate-300 p-2">{item.finish}</td>

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

export default KhuyenmaiQL;