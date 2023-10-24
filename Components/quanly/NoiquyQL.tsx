import { QLnoiquy, XoaQLnoiquy } from "@/Service/userService";
import { SuaQLnoiquy } from "@/Service/userService";

import { Input } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { Noiquy } from '@/Service/userService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    noiquy: any,
};
const NoiquyQL = ({ noiquy }: Props) => {
    interface Noiquy {
        id: number;
        mota: string;
        motaEN: string;

    }
    const [noiquyQL, setNoiquyQL] = useState<Noiquy[]>([]);
    const [mota, setMota] = useState("");
    const [motaEN, setMotaEN] = useState("");
    const [id, setId] = useState(Number)
    const [step, setStep] = useState("them");

    const handleThemnoiquy = async () => {
        console.log("mota", mota)
        console.log("motaEN", motaEN)

        let res = await QLnoiquy(
            {
                mota: mota,
                motaEN: motaEN

            }
        );
        if (res && res.errCode === 0) {
            setMota('')
            setMotaEN('')
            handleNoiquy1()
            alert("Thêm nội quy thành công")

        } else {
            console.log(res)
            alert("Thêm nội quy không thành công")
        };

    }

    const handleNoiquy1 = async () => {
        try {
            const params = {
                id_noiquy: "ALL",
            };
            console.log(params)

            const response = await Noiquy(params);
            const res: Noiquy[] = response.nq;
            console.log(response)
            console.log(res)
            setNoiquyQL(res);


        } catch (error) {
            console.log(error);
        }
    };

    const handleSuaNQ = (id: number, mt: string, mtEN: string) => {
        setId(id)
        setMota(mt)
        setMotaEN(mtEN)
        setStep("capnhat")
    }

    const handleCapnhatnoiquy = async () => {
        console.log("mota", mota)
        console.log("motaEN", motaEN)

        let res = await SuaQLnoiquy(
            {
                id: id,
                mota: mota,
                motaEN: motaEN

            }
        );
        if (res && res.errCode === 0) {
            setMota('')
            setMotaEN('')
            handleNoiquy1()
            setStep('them')
            alert("Cập nhật nội quy thành công")

        } else {
            console.log(res)
            alert("Cập nhật nội quy không thành công")
        };

    }
    const handleXoanoiquy = async (idnq: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaQLnoiquy(
            {
                id: idnq
            }
        );
        if (res && res.errCode === 0) {
            setMota('')
            setMotaEN('')
            handleNoiquy1()
            alert("Xóa nội quy thành công")

        } else {
            console.log(res)
            alert("Xóa nội quy không thành công")
        };

    }
    useEffect(() => {
        setNoiquyQL(noiquy)
    }, [])

    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Nội quy Homestay</p>
                {step === "them" &&
                    (<p className="mt-5 text-xl">Thêm nội quy:</p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật nội quy:</p>
                    )
                }
                {/* <p className="mt-5 text-xl">Thêm nội quy:</p> */}
                <div className="flex mt-5 ">
                    <div className="flex basis-1/2 space-x-6">
                        <p className="">Mô tả:</p>
                        <textarea className="resize-y rounded-md h-32 w-96 border-2 border-green-300 outline-none p-3" value={mota} onChange={(e) => setMota(e.target.value)}></textarea>
                    </div>

                    <div className="flex space-x-6">
                        <p className="">Mô tả EN:</p>
                        <textarea className="resize-y rounded-md w-96 border-2 border-green-300 outline-none p-3" value={motaEN} onChange={(e) => setMotaEN(e.target.value)}></textarea>
                    </div>
                </div>
                {step === "them" &&
                    (
                        <button onClick={handleThemnoiquy} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Thêm nội quy</button>

                    )
                }
                {step === "capnhat" &&
                    (
                        <button onClick={handleCapnhatnoiquy} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Cập nhật nội quy</button>

                    )
                }

                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Mô tả</th>
                                <th className="border border-slate-300">Mô tả EN</th>
                                <th className="border border-slate-300 w-20">Tác vụ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                noiquyQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.mota}</td>
                                            <td className="border border-slate-300 p-2">{item.motaEN}</td>
                                            <td className="border border-slate-300 text-center">
                                                <button onClick={() => handleSuaNQ(item.id, item.mota, item.motaEN)}><EditIcon /></button>
                                                {/* <EditIcon/> */}
                                                <button onClick={() => handleXoanoiquy(item.id)}><DeleteIcon /></button>
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

export default NoiquyQL;