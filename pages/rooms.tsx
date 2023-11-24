import Header from "@/Components/Header";
import Rooms from "@/Components/Rooms";
import { Loaiphong, Phong, handleLayPhieudat_idPhong } from "@/Service/userService";
import { Console } from "console";
import { Montserrat } from "next/font/google";
import Router from "next/router";
import { ppid } from "process";
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
        ghichu: string,
        maGD: number,
        thoigianGD: string
        // dieukien: string
    }
    const [phong, setPhong] = useState<Phong[]>([]);
    const [phong1, setPhong1] = useState<Phong[]>([]);
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);

    const [checkin, setCheckin] = useState(new Date())
    const [checkout, setCheckout] = useState(new Date())
    const [mincheckout, setMincheckout] = useState(new Date())


    const [dsphong, setDsphong] = useState([
        {
            id: 0,
            id_LP: 0,
            id_VT: 0,
            tenphong: '',
            trangthai: '',
            mota: ''
        },
    ])
    const arrp: number[] = []

    // const arrp: any[] = []
    // console.log("vkevk length", dsphong.length)
    // console.log("vkevk length", dsphong)

    const handleCheckDate = (checki: Date) => {
        setCheckin(checki)
        let datecheckout = new Date(checki)
        datecheckout.setDate(datecheckout.getDate() + 1)
        setMincheckout(datecheckout)
        // console.log(datecheckout)
        setCheckout(datecheckout)
        handlephong(checki, datecheckout)
        // setPhong1(ds)
        // handleCheck(111)
        // phong.map((item) => {
        //     handleDeleteJoke(item.id)
        // })
    }
    const handlephong = async (ci: Date, ck: Date) => {
        arrp.slice(0, arrp.length)

                dsphong.splice(0, dsphong.length)

        setCheckout(ck)
        let start = new Date(ci)
        let end = new Date(ck)
        start.setHours(0)
        start.setMinutes(0)
        start.setSeconds(0)
        start.setMilliseconds(0)

        end.setHours(0)
        end.setMinutes(0)
        end.setSeconds(0)
        end.setMilliseconds(0)
        // console.log('das', start)
        // console.log('das', end)

        try {
            const params = {
                id_phong: 'ALL',
            };
            // console.log(params)
            const response = await Phong(params);
            const res: Phong[] = response.phong; //gán dữ liệu vào res
            // console.log(response)
            setPhong(res); //gán res vào setPhong
            res.map(async (res) => {
                const params = {
                    phieudat_idPhong: res.id,
                };
                // console.log(params)
                const response1 = await handleLayPhieudat_idPhong(params);
                const res1: Phieudat[] = response1.phieudat_idPhong; //gán dữ liệu vào res
                if (res1.length === 0) {
                    let timvitri = arrp.findIndex((val) => val === res.id)
                    if (timvitri === -1) {
                        arrp.push(res.id)
                        console.log("arrpush", arrp)
                        const dsgheDD = {
                            id: (res.id),
                            id_LP: res.id_LP,
                            id_VT: res.id_VT,
                            tenphong: res.tenphong,
                            trangthai: res.trangthai,
                            mota: res.mota
                        }
                        console.log(phong1)
                        dsphong.push(dsgheDD)
                        setDsphong([dsgheDD, ...dsphong])
                        // setPhong1([dsgheDD, ...phong1])
                    }
                }
                res1.map((i) => {
                    let d1 = new Date(i.check_in)
                    let d2 = new Date(i.check_out)
                    console.log(i.maGD)
                    d1.setHours(0, 0, 0, 0)
                    d2.setHours(0, 0, 0, 0)
                    if (
                        (start.getTime() < d1.getTime() &&
                            end.getTime() < d2.getTime())
                        ||
                        (start.getTime() > d1.getTime() &&
                            end.getTime() > d2.getTime())
                        ||
                        (start.getTime() === d2.getTime() &&
                            end.getTime() > d2.getTime())
                    ) {

                        // let timvitri = phong1.filter((dsgheDDs) => res.id === dsgheDDs.id)
                        let timvitri = arrp.findIndex((val) => val === res.id)
                        if (timvitri === -1) {
                            arrp.push(res.id)

                            const dsgheDD = {

                                id: (res.id),
                                id_LP: res.id_LP,
                                id_VT: res.id_VT,
                                tenphong: res.tenphong,
                                trangthai: res.trangthai,
                                mota: res.mota
                            }
                            console.log('phong1', phong1)
                            dsphong.push(dsgheDD)
                            setDsphong([dsgheDD, ...dsphong])
                            // setPhong1([dsgheDD, ...phong1])
                        }
                    }
                })



            })
            // console.log('â')

        } catch (error) {
            console.log(error);
        }

    };

    /*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
    const count_element_in_array = (array: string | any[], x: number) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
                count++;
        }
        return count
        // console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
    }
    const handleDeleteJoke = (id: number) => {

        console.log('sdsd', dsphong)
        setDsphong(dsphong.filter(dsphong => dsphong.id !== id))

        // setPhong1([dsphong, ...phong1])
        // console.log("delete joke", id)
        // setArrIdghe(arrIdghe.filter(item => item !== id))
        // console.log("delete joke", arrIdghe)

    }
    useEffect(() => {

       
            dsphong.splice(0, dsphong.length)
        
        const handleCheckDate = (checki: Date) => {
            setCheckin(checki)
            let datecheckout = new Date(checki)
            datecheckout.setDate(datecheckout.getDate() + 1)
            setMincheckout(datecheckout)
            // console.log(datecheckout)
            setCheckout(datecheckout)
            handlephong(checki, datecheckout)
            // console.log('arrp', arrp)


        }
        const handlephong1 = async () => {

            try {
                const params = {
                    id_phong: 'ALL',
                };
                // console.log(params)
                const response = await Phong(params);
                const res: Phong[] = response.phong; //gán dữ liệu vào res

                setPhong(res); //gán res vào setPhong
                // res.map((item) => {
                //     handleDeleteJoke(item.id)
                //     console.log(dsphong)
                //     dsphong.map((ij) => {
                //         let count = 0;
                //         for (let i = 0; i < dsphong.length; i++) {
                //             if (dsphong[i].id === ij.id) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
                //                 count++;
                //         }
                //         console.log("coint", count)
                //         if (count > 1) {
                //             setDsphong(dsphong.filter(dsphong => dsphong.id === ij.id))

                //         }
                //     })
                // })
                console.log('arrp', arrp)

            } catch (error) {
                console.log(error);
            }


        };
        handlephong1()
        handleCheckDate(new Date())
    }, [])
    const handleCheck = () => {
        // phong1.pop()
        // setPhong1(phong1)
        // console.log(phong1)
        // arrp.push(i)
        // const temp = phong1.slice(0,1)
        // setPhong1(phong1.slice(0,1))
        // dsphong = phong1.slice(0,1)
        // phong1.push(temp)
        console.log('arrp', phong1)
        console.log('arrp', dsphong)


    }

    return (
        <div className={roboto.className}>
            <Header></Header>
            <div className="flex w-11/12 gap-2 bg-gray-50 pb-10 m-auto mt-8">
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
                        onChange={(date: Date) => handlephong(checkin, date)}
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
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 pr-5">
                        {/* <button onClick={() => console.log(phong1)}>{dsphong.length}</button> */}
                        {
                            dsphong.slice(1,dsphong.length).map((phongs, indexP) => {
                                // if (arrp.includes(phongs.id)) {
                                return (
                                    <Rooms key={indexP} tenphong={phongs.tenphong} id_lp={phongs.id_LP} id_phong={phongs.id}
                                        check_in={checkin.getDate() + "-" + (checkin.getMonth() + 1) + "-" + checkin.getFullYear()}
                                        check_out={checkout.getDate() + "-" + (checkout.getMonth() + 1) + "-" + checkout.getFullYear()} />
                                )
                                // }


                            })
                        }



                        {/* <button onClick={() => handleCheck()}>{dsphong.length}</button> */}

                    </div>
                </div>

            </div>
        </div>
    )
}
export default rooms;
