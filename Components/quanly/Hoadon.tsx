
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const ChitietSDDV = () => {
    
    return (
        <div className={roboto.className}>

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
                    {/* <tbody>
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
                                            {dichvu.map((item1) =>
                                                item1.id === item.id_DV ? item.solansudung * item.soluong * item1.gia : null
                                            )}

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


                    </tbody> */}
                </table>
            </div>
        </div>

    )
}

export default ChitietSDDV;