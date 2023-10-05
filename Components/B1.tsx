import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { useEffect, useState } from "react";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})
type Props = {
    tenphong:  string,
    gia: number,
    songuoi: number
  };
const b1 = ({ tenphong, gia, songuoi }: Props) => {
    interface Khachhang{
        id: number;
        hotenKH: string;
        CMND: string,
        SDT: string,
        email:string
    }

    const [roll, setRoll] = useState('')
    const [khachhang, setKhachhang] = useState<Khachhang[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        // if (e.target.value === roll) {
        // setRoll('false')
        // } else {
        setRoll(e.target.value)
        // }
        console.log(roll)
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('khachhang') || '{}' );
        if (items) {
            setKhachhang(items);
        }
    }, []);

    return (
        <div className={roboto.className}>
        <div>
            <div className="flex space-x-2 justify-end w-11/12 mt-8">
                <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full bg-green-400">1</p>
                <p className="">Nhập thông tin</p>
                <p className="">------</p>
                <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">2</p>
                <p className="">Xem lại</p>
                <p className="">------</p>
                <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">3</p>
                <p className="">Thanh toán</p>
                <p className="">------</p>
                <p className="border-2 border-gray-400 h-6 w-6 text-center rounded-full ">4</p>
                <p className="">Phiếu xác nhận</p>
            </div>

            <div className="grid w-8/12 m-auto mt-6">
                <p className="text-gray-700 font-bold">Hãy chắn chắn rằng tất cả thông tin trên trang này là chính xác trước khi thanh toán.</p>
                <div className="grid grid-cols-6 mt-5 ">
                <div className="col-span-4 m-3 ">
                    <p className="font-semibold text-2xl">Chi tiết liên hệ</p>
                    <div className="shadow-lg  p-5">
                    {
                        khachhang.map((item, index)=>{
                            return(
                                <div key={index}>
                                    <p className="font-semibold">Họ và tên:</p>
                                    <input type="text" className="border-gray-300 border-2 mt-2 pl-2 w-10/12 h-8 rounded-md" value={item.hotenKH} />
                                    <div className="flex mt-4 ">
                                        <p className="pr-[1%] font-semibold">Số CMND: </p>
                                        <input className="border-gray-300 border-2 h-8 rounded-md pl-2" value={item.CMND}/>
                                        <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                                        <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2" value={item.SDT}/>
                                    </div>
                                    <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md h-8 w-5/12"value={item.email} /></p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="bg-gray-200 h-14 shadow-md rounded-b-lg space-y-5 space-x-10 pl-5 ">
                    <input onChange={onChange} type="radio" value="datchominh" name='roll' checked={roll === "datchominh"} /> Đặt cho mình
                    <input onChange={onChange} type="radio" value="datchonguoithan" name='roll' checked={roll === "datchonguoithan"} /> Đặt cho người khác
                    {/* <input type="radio" />  Đặt cho mình
                    <input type="radio"/> Đặt cho người khác */}
                    </div>
                    

                    {
                    roll === 'datchonguoithan' ? (
                        <div className="pt-5">
                        <p className="text-xl font-semibold">Thông tin khách:</p>
                        <div className="shadow-md rounded-b-lg p-5">
                            <p className="font-semibold">Họ và tên:</p>
                            <input type="text" className="border-gray-300 border-2 mt-2 w-10/12 h-8 pl-2 rounded-md" />
                            <div className="flex mt-4 ">
                            <p className="pr-[1%] font-semibold">Số CMND: </p>
                            <input className="border-gray-300 border-2 h-8 rounded-md pl-2" />
                            <p className="pl-[3%] pr-[1%] font-semibold">Số điện thoại:</p>
                            <input type="tel" className="border-gray-300 border-2 h-8 rounded-md pl-2" />
                            </div>
                            <p className="mt-4 font-semibold ">Email: <input type="text" className="border-gray-300 pl-2 border-2 rounded-md h-8 w-5/12" /></p>
                        </div>
                        </div>
                    ) : ""
                    }
                </div>
                <div className="col-span-2 shadow-inner bg-gray-50 rounded-md">
                    <div className="text-center pt-5">
                    <p className="font-semibold text-lg">The Kupid Homestay</p>
                    <p className="text-sm">47 Đặng Thái Thân, Phường 3, Đà Lạt</p>
                    </div>
                    <div className="bg-gray-200 mt-5 p-[3%] h-32 text-slate-700 text-base space-y-2">
                    <div className="flex">
                        <p className="text-sm basis-40">Ngày nhận phòng: </p>
                        <p className="text-base">Thu, 13/10/2023, Từ 14:00</p>
                    </div>

                    <div className="flex">
                        <p className="text-sm basis-44">Ngày trả phòng: </p>
                        <p className="text-base">Fri, 14/10/2023, Trước 12:00</p>
                    </div>
                    </div>
                    <p className="font-semibold m-5 text-lg">Phòng {tenphong}</p>
                    <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Khách/phòng</p>
                    <p className="">{songuoi} khách</p>
                    </div>
                    <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Giá</p>
                    <p className="">{gia}đ</p>
                    </div>
                    <div className="flex m-5">
                    <p className="basis-40 text-slate-500">Giảm giá</p>
                    <p className="">10%</p>
                    </div>

                    <div className="flex m-5">
                    <p className="basis-40 font-semibold text-lg">Tổng tiền</p>
                    <p className="font-semibold text-lg">1.080.000đ</p>
                    </div>

                </div>
                </div>

            </div>
            <div className="text-center mt-6"><button className="border-2 border-green-600 text-xl uppercase h-10 w-56 rounded-lg hover:bg-green-600">Tiếp tục</button></div>
        </div>
    </div>

  )
}
export default b1;