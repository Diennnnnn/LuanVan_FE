import Header from "@/Components/Header";
import Rooms from "@/Components/Rooms";
import { Loaiphong, Phong } from "@/Service/userService";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import React, { useEffect, useState } from "react";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const rooms = () => {
    interface Phong {
        //tên giống csdl
        id: number;
        id_LP: number;
        id_VT: number;
        tenphong: string;
        trangthai: string;
        mota: string;
    }
    const [phong, setPhong] = useState<Phong[]>([]);

    const [checkin, setCheckin] = useState(new Date())
    const [checkout, setCheckout] = useState(new Date())
    const [mincheckout, setMincheckout] = useState(new Date())

    const handleCheckDate = (checki: Date) => {
        setCheckin(checki)
        let datecheckout = new Date(checki)
        datecheckout.setDate(datecheckout.getDate() + 1)
        setMincheckout(datecheckout)
        console.log(datecheckout)
        setCheckout(datecheckout)
    }

    useEffect(() => {
        const handleCheckDate = (checki: Date) => {
            setCheckin(checki)
            let datecheckout = new Date(checki)
            datecheckout.setDate(datecheckout.getDate() + 1)
            setMincheckout(datecheckout)
            console.log(datecheckout)
            setCheckout(datecheckout)
        }
        const handlephong = async () => {
            try {
                const params = {
                    id_phong: 'ALL',
                };
                console.log(params)
                const response = await Phong(params);
                const res: Phong[] = response.phong; //gán dữ liệu vào res
                console.log(response)
                setPhong(res); //gán res vào setPhong
                // res.map((res) => {
                //     setId_loaiphong(res.id_LP)
                //     // console.log("id", id)
                // })

            } catch (error) {
                console.log(error);
            }


        };
        handleCheckDate(new Date())
        handlephong();
        // handleLoaiphong()
    }, [])
    // useEffect(() => {

    //     const handleLoaiphong = async () => {
    //         try {
    //             const params = {
    //                 id_lp: id_loaiphong,
    //             };
    //             console.log(params)
    //             const response = await Loaiphong(params);
    //             const res: Loaiphong[] = response.loaiphong;
    //             console.log(response)
    //             setLoaiphong(res);
    //             res.map((res) => {
    //                 setId_loaiphong(res.id)
    //                 // console.log("id", id)
    //             })

    //         } catch (error) {
    //             console.log(error);
    //         }


    //     };
    //     handleLoaiphong();
    //     // handleLoaiphong(id_loaiphong)
    // }, [])


    return (
        <div className={roboto.className}>
            <Header></Header>
            <div className="flex w-11/12 gap-2 bg-gray-100 pb-10 m-auto mt-8">
                <div className="basis-2/12 p-3 space-y-2 mt-6">
                    <p className="uppercase font-bold">bộ lọc tìm kiếm</p>
                    <p>Nhận phòng:</p>
                    <DatePicker
                        className="outline-none border-b-2 w-52 border-gray-300 pl-1"
                        // type="datetime"
                        selected={checkin}
                        minDate={new Date()}
                        // maxDate={new Date("10-30-2023")}
                        // onChange={(date: Date) => setStartDate(date)}
                        onChange={(date: Date) => handleCheckDate((date))}
                        dateFormat="dd/MM/yyyy"
                    />
                    <p>Trả phòng:</p>
                    <DatePicker
                        className="outline-none border-b-2 border-gray-300 pl-1"
                        // type="datetime"
                        selected={checkout}
                        minDate={mincheckout}
                        // maxDate={new Date("10-30-2023")}
                        // onChange={(date: Date) => setStartDate(date)}
                        onChange={(date: Date) => setCheckout((date))}
                        dateFormat="dd/MM/yyyy"
                    />
                    {/* <input type="Date" 
                    className="border-2 border-gray-300" 
                    value={check_out}
                    onChange={(event) => setCheck_out(event.target.value)}
                    /> */}
                    <hr className=" border-black" />
                    <div className="flex ">
                        <p className="basis-1/5 ">Phòng:</p>
                        <div className="space-y-2 pl-4">
                            <div><input type="checkbox" /> <label>2 người</label></div>
                            <div><input type="checkbox" className="" /> <label>4 người</label></div>
                            <div><input type="checkbox" className="" /> <label>Nhóm</label></div>
                        </div>
                    </div>
                    
                    <hr className=" border-black" />

                    <div className="flex ">
                        <p className="basis-1/5 ">Khu:</p>
                        <div className="space-y-2 pl-4">
                            <div className="flex space-x-3">
                                <div><input type="checkbox" /> <label>A</label></div>
                                <div><input type="checkbox" /> <label>B</label></div>
                            </div>
                            <div className="flex space-x-3 ">
                                <div><input type="checkbox" /> <label>C</label></div>
                                <div><input type="checkbox" /> <label>Nhà gỗ</label></div>
                            </div>

                        </div>
                    </div>

                    <hr className=" border-black" />
                    <div className="flex ">
                        <p className="basis-1/5 ">Tầng:</p>
                        <div className="space-y-2 pl-4">
                            <div className="flex space-x-3">
                                <div><input type="checkbox" /> <label>1</label></div>
                                <div><input type="checkbox" /> <label>2</label></div>
                            </div>
                            <div className="flex space-x-3">
                                <div><input type="checkbox" /> <label>3</label></div>
                                <div><input type="checkbox" /> <label>4</label></div>
                            </div>

                        </div>
                    </div>
                    <hr className=" border-black" />


                    <div className="flex ">
                        <p className="basis-1/5 ">Giá:</p>
                        <div className="space-y-2 pl-4">
                            <div>
                                <input type="checkbox" /> <label>Dưới 1 triệu</label>
                            </div>
                            <div><input type="checkbox" /> <label>Trên 1 triệu</label></div>
                        </div>
                    </div>

                    <hr className=" border-black" />
                </div>
                <div className="basis-10/12  mt-6 ">
                    {/* <button onClick={handleClick}>dfghjk</button> */}
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 pr-5">
                        {/* <button onClick={handlePhong}>click</button> */}


                        {
                            phong.map((phongs, indexP) => {

                                return (
                                    <Rooms key={indexP} tenphong={phongs.tenphong} id_lp={phongs.id_LP} id_phong={phongs.id}
                                        check_in={checkin.getDate() + "-" + (checkin.getMonth() + 1) + "-" + checkin.getFullYear()}
                                        check_out={checkout.getDate() + "-" + (checkout.getMonth() + 1) + "-" + checkout.getFullYear()} />
                                )

                            })
                        }







                    </div>
                </div>

            </div>
        </div>
    )
}
export default rooms;
{/* <div className="border-2 border-yellow-700">
                <Rooms></Rooms>
            </div>
            <div className="border-2 border-yellow-700">
                <Rooms></Rooms>
            </div>
            <div className="border-2 border-yellow-700">
                <Rooms></Rooms>
            </div>
            <div className="border-2 border-yellow-700">
                <Rooms></Rooms>
            </div> */}