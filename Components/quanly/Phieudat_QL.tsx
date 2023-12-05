
import { AllKhachhang, CreateHoadon, LayPhieudat, LayTTnhanphong, LayttCTSDDV, Nhanphong, Phong, SuaPhieudat, Traphong } from "@/Service/userService";
import { Checkbox } from "@mui/material";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
// import Hoadon from "./Hoadon";
import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from "react-dom";
import router from "next/router";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const Phieudat_QL = () => {
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
        ghichu: string
        // dieukien: string
    }
    interface Khachhang {
        id: number;
        hotenKH: string;
        gioitinh: string,
        ngaysinh: string,
        CMND: string,
        SDT: string,
        email: string,
        avt: string
    }
    interface Phong {
        //tên giống csdl
        id: number;
        id_LP: number;
        id_VT: number;
        tenphong: string;
        trangthai: string;
        mota: string;
    }
    interface Nhanphong {
        //tên giống csdl
        id: number;
        id_pd: number;
        ngaynhan: Date;
        ngaytra: Date;
    }
    interface ChitietSDDV {
        id: number;
        id_PD: number;
        id_DV: number;
        solansudung: number;
        soluong: number;
        thanhtien: number;
        total_amount: number
    }
    const [sddv, setSDDV] = useState<ChitietSDDV[]>([]);
    const [nhanphong, setNhanphong] = useState<Nhanphong[]>([]);
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);
    const [allkh, setAllkh] = useState<Khachhang[]>([]);
    const [phong, setPhong] = useState<Phong[]>([]);
    const [id, setId] = useState(Number);
    const [tienSDDV, setTienSDDV] = useState(Number);
    let sddvv: number
    let checkinsom: number
    let checkouttre: number

    const handleLaychitietSDDV = async (id: number) => {
        try {
            const params = {
                id_pd: id,
            };
            console.log(params)

            const response = await LayttCTSDDV(params);
            const res: ChitietSDDV[] = response.ctsddv;
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
    const handleLaynhanphong = async () => {
        try {
            const params = {
                id_pd: "ALL",
            };
            console.log(params)

            const response = await LayTTnhanphong(params);
            const res: Nhanphong[] = response.nhanphong;
            console.log(response)
            console.log(res)
            setNhanphong(res);
        } catch (error) {
            console.log(error);
        }
    };
    const handenhanphong = async (id: number) => {
        // console.log(dayjs(new Date()).format("DD/MM/YYYY hh:mm:ss"));

        let res = await Nhanphong(
            {
                ngaynhan: new Date(),
                id_pd: id

            }
        );
        if (res && res.errCode === 0) {
            handleLayPhieudat()
            handleLaynhanphong()
            // setTrangthai('')
            // handleLayLichsu()
            alert("Nhận phòng thành công")

        } else {
            console.log(res)
            alert("Nhận phòng KHÔNG thành công")
        };
    }
    const handetraphong = async (id: number, tongtienpd: number, id_kh: number) => {
        console.log("checkout")

        sddvv = 0
        let d = new Date()
        // d.setHours(11,0,0,0)
        let res = await Traphong(
            {
                ngaytra: d,
                id_pd: id

            }
        );
        if (res && res.errCode === 0) {

            // tinh tong tien su dung DV
            try {
                const params = {
                    id_pd: 'ALL',
                };
                console.log(params)

                const response = await LayttCTSDDV(params);
                const res: ChitietSDDV[] = response.ctsddv;
                console.log(response.ctsddv[0].total_amount)
                console.log("chi tiet sddv", res)
                res.map((im) => {
                    if (im.id_PD === id) {
                        sddvv = im.total_amount
                        console.log('im.total_amount', im.total_amount)

                    }
                })
                // sddvv = response.ctsddv[0].total_amount

                // console.log(res)
                // setSDDV(res);
                console.log('tien sddvvv', sddvv)
                // res.map((item) => { 
                //     sddvv += sddvv + item.thanhtien
                //     console.log('tien sddvvv', sddvv)
                // })
                setTienSDDV(sddvv)
            } catch (error) {
                console.log(error);
            }

            // tinh tong tien checkin som hoac checkout tre
            try {
                const params = {
                    id_pd: id,
                };
                console.log(params)

                const response = await LayTTnhanphong(params);
                const res: Nhanphong[] = response.nhanphong;
                // console.log(response)
                // console.log(res)
                // setNhanphong(res);
                phieudat.map((ph) => {
                    if (ph.id === res[0].id_pd) {
                        let checkin = new Date(ph.check_in)
                        let checkout = new Date(ph.check_out)

                        let chheckin7h = new Date(checkin)
                        let chheckin12h = new Date(checkin)
                        chheckin7h.setHours(7, 0, 0, 0)
                        chheckin12h.setHours(12, 0, 0, 0)

                        let chheckout12h = new Date(checkout)
                        let chheckout18h = new Date(checkout)
                        chheckout12h.setHours(12, 0, 0, 0)
                        chheckout18h.setHours(18, 0, 0, 0)

                        // console.log('chheckin7he : chheckin7h',chheckin7h)
                        // console.log('chheckin7he : chheckin12h',chheckin12h)

                        //tinh tien khi checkout
                        if (d.getTime() > chheckout12h.getTime() && d.getTime() < chheckout18h.getTime()) {
                            checkouttre = 150000
                        }
                        else
                            checkouttre = 0
                        // tinh tien khi checkin
                        let ngaynhanphong = new Date(res[0].ngaynhan)
                        // console.log('ngaynhanphong', ngaynhanphong.getTime() - chheckin12h.getTime())
                        if (ngaynhanphong.getTime() > chheckin7h.getTime() && ngaynhanphong.getTime() < chheckin12h.getTime())
                            checkinsom = 150000
                        else
                            checkinsom = 0

                    }

                })

            } catch (error) {
                console.log(error);
            }
            console.log('checkinsom', checkinsom)
            console.log('checkouttre', checkouttre)
            console.log('sddv', sddvv)
            console.log('tongtienpd', checkinsom + Number(tongtienpd) + Number(checkouttre) + Number(sddvv))


            handleLayPhieudat()
            handleLaynhanphong()
            let res2 = await CreateHoadon(
                {
                    id_kh: id_kh,
                    id_pd: id,
                    id_nv: 3,
                    tongtien: checkinsom + Number(tongtienpd) + Number(checkouttre) + Number(sddvv)

                })
            if (res2 && res2.errCode === 0) {
                router.push({
                    pathname: '/hoadon',
                    query: { id_pd: id, checkinsom: checkinsom, checkouttre: checkouttre, tiendv: sddvv }

                })
                console.log('in hoa don')
            } else {
                console.log(res2)
                alert("Trả phòng không thành công")
            };
        }
    }
    const handleCapnhatTrangthai = async (id: number, trangthai: string, tongtienpd: number, id_kh: number) => {
        // setOpen(false);
        // setAgree(true)
        let res = await SuaPhieudat(
            {
                id: id,
                trangthai: trangthai

            }
        );
        if (res && res.errCode === 0) {
            handleLayPhieudat()
            if (trangthai === 'Đã nhận phòng') {
                handenhanphong(id)

            } else {
                handetraphong(id, tongtienpd, id_kh)
            }
            // alert("Cập nhật nội quy thành công")

        } else {
            console.log(res)
            alert("Cập nhật trạng thái không thành công")
        };

    }

    useEffect(() => {


        const handleLaynhanphong = async () => {
            try {
                const params = {
                    id_pd: "ALL",
                };
                console.log(params)

                const response = await LayTTnhanphong(params);
                const res: Nhanphong[] = response.nhanphong;
                console.log(response)
                console.log(res)
                setNhanphong(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handleLaychitietSDDV = async () => {
            try {
                const params = {
                    id_pd: "ALL",
                };
                console.log(params)

                const response = await LayttCTSDDV(params);
                const res: Nhanphong[] = response.nhanphong;
                console.log(response)
                console.log(res)
                setNhanphong(res);
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

        const handleLayAllKhachhang = async () => {
            try {
                const params = {
                    id_allkh: "ALL",
                };
                console.log(params)

                const response = await AllKhachhang(params);
                const res: Khachhang[] = response.allkh;
                console.log(response)
                console.log(res)
                setAllkh(res);
            } catch (error) {
                console.log(error);
            }
        };
        const handlePhong = async () => {
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

        handleLayPhieudat()
        handleLayAllKhachhang()
        handlePhong()
        handleLaynhanphong()
    }, [])
    return (
        <div className={roboto.className}>
            <div className="m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách khách đặt phòng</p>
                <div className="mt-5">
                    <table className="border-separate border border-slate-400 m-auto text-center w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-20">#</th>
                                <th className="border border-slate-300">Họ tên khách hàng</th>
                                <th className="border border-slate-300">Tên phòng</th>
                                <th className="border border-slate-300 ">Ngày đặt</th>
                                <th className="border border-slate-300 ">Check_in</th>
                                <th className="border border-slate-300 ">Check_out</th>
                                <th className="border border-slate-300 ">Số người ở</th>
                                <th className="border border-slate-300 ">Số tiền</th>
                                <th className="border border-slate-300 ">Thanh toán</th>
                                <th className="border border-slate-300 ">Trạng thái</th>

                                <th className="border border-slate-300 ">Ghi chú</th>
                                <th className="border border-slate-300 ">Họ tên người ở</th>
                                <th className="border border-slate-300 ">Số điện thoại</th>
                                <th className="border border-slate-300 ">CCCD</th>
                                <th className="border border-slate-300 ">Nhận phòng</th>
                                <th className="border border-slate-300 ">Trả phòng</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                phieudat.map((item, index) => {
                                    let i = item.trangthai.slice(0, 6) === 'Đã hủy'
                                    let i1 = item.trangthai === 'Đã nhận phòng'
                                    let i2 = item.trangthai === 'Đã trả phòng'
                                    return (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">
                                                {allkh.map((item2) =>
                                                    item2.id === item.id_KH ? item2.hotenKH : null
                                                )}

                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {phong.map((item1) =>
                                                    item1.id === item.id_Phong ? item1.tenphong : null
                                                )}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.check_in).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                {dayjs(item.check_out).format("DD/MM/YYYY")}
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.songuoi}</td>
                                            <td className="border border-slate-300 p-2">{item.tongtien}</td>
                                            <td className="border border-slate-300 p-2">{item.thanhtoan}</td>
                                            <td className={`border border-slate-300 p-2
                                                ${i ? 'text-red-600 font-semibold' : null}
                                                ${i1 ? 'text-blue-700 font-semibold' : null}
                                                ${i2 ? 'text-green-700 font-semibold' : null}`}>
                                                {item.trangthai}</td>
                                            <td className="border border-slate-300 p-2">{item.ghichu}</td>
                                            <td className="border border-slate-300 p-2">{item.hotennguoio}</td>
                                            <td className="border border-slate-300 p-2">{item.SDT_nguoio}</td>
                                            <td className="border border-slate-300 p-2">{item.CCCD_nguoio}</td>
                                            {/* <td className="border border-slate-300 p-2" onClick={() => handetraphong(item.id, item.tongtien, item.id_KH)}>{item.CCCD_nguoio}</td> */}

                                            <td className="border border-slate-300 p-2">
                                                <Checkbox
                                                    disabled={(item.trangthai.slice(0, 6) === 'Đã hủy') || (item.trangthai === 'Đã trả phòng') ? true : false}
                                                    checked={(item.trangthai === 'Đã nhận phòng') || (item.trangthai === 'Đã trả phòng')}
                                                    onClick={() => handleCapnhatTrangthai(item.id, 'Đã nhận phòng', item.tongtien, item.id_KH)} />
                                                <p>{nhanphong.map((i) => (i.id_pd === item.id && i.ngaynhan) ? dayjs(i.ngaynhan).format("DD/MM/YYYY hh:mm:ss") : null)}</p>
                                            </td>
                                            <td className="border border-slate-300 p-2">
                                                <Checkbox
                                                    disabled={(item.trangthai.slice(0, 6) === 'Đã hủy') || (item.trangthai === 'Đã trả phòng') || (item.trangthai === 'Chưa nhận phòng') ? true : false}
                                                    checked={(item.trangthai === 'Đã trả phòng')}
                                                    onClick={() => handleCapnhatTrangthai(item.id, 'Đã trả phòng', item.tongtien, item.id_KH)} />
                                                <p>{nhanphong.map((i) => (i.id_pd === item.id && i.ngaytra) ? dayjs(i.ngaytra).format("DD/MM/YYYY hh:mm:ss") : null)}</p>

                                            </td>
                                            {/* <td className="border border-slate-300 p-2">
                                                <Checkbox 
                                                disabled = {(item.trangthai.slice(0,6) === 'Đã hủy' ) ? true : false} 
                                                checked = {(item.trangthai === 'Đã nhận phòng' )}
                                                onClick={()=>handleCapnhatTrangthai(item.id)}/>
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

export default Phieudat_QL;
// ReactDOM.render(<Hoadon></Hoadon>, document.getElementById('root'))
