import { QLnoiquy } from "@/Service/userService";
import { Input } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { Noiquy } from '@/Service/userService';

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    noiquy: any
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
    useEffect(() => {
        const handleNoiquy = async () => {
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
        handleNoiquy()
        // setNoiquyQL(noiquy)
    }, [])

    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Nội quy Homestay</p>
                <p className="mt-5 text-xl">Thêm nội quy:</p>
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
                <button onClick={handleThemnoiquy} className="bg-green-500 w-36 h-10 rounded-lg mt-5 ">Thêm nội quy</button>
                <div className="mt-8">
                    <table className="border-separate border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 ...">#</th>
                                <th className="border border-slate-300 ...">Mô tả</th>
                                <th className="border border-slate-300 ...">Mô tả EN</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                noiquyQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 ...">{item.id}</td>
                                            <td className="border border-slate-300 ...">{item.mota}</td>
                                            <td className="border border-slate-300 ...">{item.motaEN}</td>
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