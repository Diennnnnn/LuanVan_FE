import Header from "@/Components/Header";
import Rooms from "@/Components/Rooms";
import { Loaiphong, Phong } from "@/Service/userService";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import React, { useEffect, useState } from "react";
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
    const [check_in, setCheck_in] = useState("");
    const [check_out, setCheck_out] = useState("");

    const handleClick =()=>{
        console.log("ádfgnm", check_in)
        console.log("cvdfg", check_out)

    }


    useEffect(() => {
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
            <div className="grid grid-cols-6 w-11/12 gap-2 bg-gray-100 m-auto mt-8">
                <div className="col-span-1 pl-3 space-y-2 mt-6">
                    <p className="uppercase font-bold">bộ lọc tìm kiếm</p>
                    <p>Nhận phòng:</p>
                    <input type="Date" 
                    className="border-2 border-gray-300" 
                    value={check_in}
                    onChange={(event) => setCheck_in(event.target.value)}
                    />
                    <p>Trả phòng:</p>
                    <input type="Date" 
                    className="border-2 border-gray-300" 
                    value={check_out}
                    onChange={(event) => setCheck_out(event.target.value)}
                    />
                    <hr className=" border-black" />
                    <p>Phòng:</p>
                    <input type="checkbox" /> <label>2 người</label>
                    <input type="checkbox" className="ml-3" /> <label>4 người</label>
                    <hr className=" border-black" />
                    <p>Tầng:</p>
                    <input type="checkbox" /> <label>1</label>
                    <input type="checkbox" className="ml-3" /> <label>2</label>
                    <input type="checkbox" className="ml-3" /> <label>3</label>
                    <input type="checkbox" className="ml-3" /> <label>4</label>
                    <hr className=" border-black" />
                    <p>Giá:</p>
                    <input type="checkbox" /> <label>Dưới 1 triệu</label>
                    <br />
                    <input type="checkbox" /> <label>Trên 1 triệu</label>
                    <hr className=" border-black" />
                </div>
                <div className="col-span-5 mt-6">
                    {/* <button onClick={handleClick}>dfghjk</button> */}
                    <div className="grid grid-cols-3 gap-5 pr-5">
                        {/* <button onClick={handlePhong}>click</button> */}

                        
                            {
                                phong.map((phongs, indexP) => {
                                    return (
                                        <Rooms key={indexP} tenphong={phongs.tenphong} id_lp={phongs.id_LP} id_phong={phongs.id} check_in={check_in} check_out={check_out}/>                                        
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