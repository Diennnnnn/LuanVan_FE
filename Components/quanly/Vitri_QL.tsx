
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Danhmuccsvc, SuaQLCSVC, SuaQLVitri, ThemQLCSVC, ThemQLVitri, Vitri, XoaQLCSVC, XoaQLVitri } from "@/Service/userService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs'


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    vitri: any,
};
const Vitri_QL = ({ vitri }: Props) => {
    interface Vitri {
        id: number;
        khu: string;
        tang: number;
        // dientich: number;
      }
    const [step, setStep] = useState("them");
    const [vitriQL, setVitriQL] = useState<Vitri[]>([]);

    const [khu, setKhu] = useState("");
    const [tang, setTang] = useState(Number)
    const [id, setId] = useState(Number)

    const handleThemVitri = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", thoigianmua)

        let res = await ThemQLVitri(
            {
                khu: khu,
                tang: tang

            }
        );
        if (res && res.errCode === 0) {
            setKhu('')
            setTang(0)
            
            handleVitri()
            alert("Thêm vị trí thành công")

        } else {
            console.log(res)
            alert("Thêm vị trí không thành công")
        };

    }
    const handleVitri = async () => {
        try {
          const params = {
            id_vt: "ALL",
          };
          console.log(params)
  
          const response = await Vitri(params);
          const res: Vitri[] = response.vt;
          console.log(response)
          console.log(res)
          setVitriQL(res);
        } catch (error) {
          console.log(error);
        }
      };

    const handleSuaVitri = (id: number,khu: string, tang:number) => {
        setId(id)
        setKhu(khu)
        setTang(tang)
        setStep("capnhat")
    }

    const handleCapnhatVitri = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaQLVitri(
            {
                id: id,
                khu: khu,
                tang: tang
            }
        );
        if (res && res.errCode === 0) {
            setId(id)
            setKhu(khu)
            setTang(tang)
            handleVitri()
            setStep('them')
            alert("Cập nhật vị trí thành công")


        } else {
            console.log(res)
            alert("Cập nhật vị trí không thành công")
        };

    }
    const handleXoaVitri = async (idvitri: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLVitri(
            {
                id: idvitri
            }
        );
        if (res && res.errCode === 0) {
            setId(id)
            setKhu(khu)
            setTang(tang)
            handleVitri()
            alert("Xóa vị trí thành công")

        } else {
            console.log(res)
            alert("Xóa vị trí không thành công")
        };

    }
    useEffect(() => {
        // console.log("csvc", csvc)
        setVitriQL(vitri)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm vị trí:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật vị trí:</p>
                    )
                }
                {/* <div className="flex w-full border-2 border-green-300">
                    <div className="basis-1/2 border-2 border-gray-300">

                    </div>
                    <div className="basis-1/2 border-2 border-gray-800"></div>
                </div> */}
                <div className="grid grid-cols-2 p-3 gap-4">
                    <div className="flex ">
                        <p className="w-3/12 ">Tên Khu:</p>
                        <input type="text" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={khu} onChange={(e) => setKhu(e.target.value)} />
                    </div>

                    <div className="flex ">
                        <p className="w-4/12">Tầng:</p>
                        <input type="number" className="w-60 border-b-2 border-gray-400 outline-none"
                            value={tang} onChange={(e) => setTang(e.target.valueAsNumber)} />
                    </div>

                    
                </div>
                {step === "them" &&
                    (
                        <button onClick={handleThemVitri} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Thêm vị trí</button>

                    )
                }
                {step === "capnhat" &&
                    (
                        <button onClick={handleCapnhatVitri} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Cập nhật vị trí</button>

                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Khu</th>
                                <th className="border border-slate-300">Tầng</th>
                                <th className="border border-slate-300 w-20">Tác vụ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                vitriQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.khu}</td>
                                            <td className="border border-slate-300 p-2">{item.tang}</td>
                                            <td className="border border-slate-300 text-center">
                                                <button> 
                                                    <EditIcon onClick={() => handleSuaVitri(item.id, item.khu, item.tang)}/>
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaVitri(item.id)}/>
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

export default Vitri_QL;