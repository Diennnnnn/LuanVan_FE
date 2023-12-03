import { Layhinhanh, Phong, QLnoiquy, SuaHinhanh, ThemHinhanh, XoaHinhanh, XoaQLnoiquy } from "@/Service/userService";
import { SuaQLnoiquy } from "@/Service/userService";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Autocomplete, Input, TextField } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import CommonUtils from "@/Components/CommonUtils"

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const HinhanhPhong = () => {
    interface HinhanhPhong {
        id: number;
        hinhanh: string;
        id_Phong: number;

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
    const [hinhanhPhong, setHinhanhPhong] = useState<HinhanhPhong[]>([]);
    const [valuePhong, setValuePhong] = useState("");
    const [phong, setPhong] = useState<Phong[]>([]);
    const [step, setStep] = useState("them");
    const [prevURLIMG, setPrevURLIMG] = useState("");
    const [fileIMG, setFileIMG] = useState<File>()
    const [hinhanh, setHinhanh] = useState("");
    const [id_Phong, setId_Phong] = useState(Number);
    const [id, setId] = useState(Number)

    const handleOnChangeImage = async (event: { target: { files: any; }; }) => {
        console.log("img")
        setFileIMG(event.target.files[0]);

        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64img = await CommonUtils.getBase64(file);
            console.log("check base64 img: ", base64img);
            let objectUrl = URL.createObjectURL(file);
            console.log("check objectUrl img: ", objectUrl);

            setHinhanh(base64img)
            setPrevURLIMG(objectUrl)

        }
        console.log("setPrevURLIMG", prevURLIMG)

    };
    const handleLayID_Phong = (value: string) => {
        setValuePhong(value)

        phong.map(async (item) => {
            if (value === item.tenphong) {
                setId_Phong(item.id)
            }

        })

    }
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
    const handleThemanh = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await ThemHinhanh(
            {
                hinhanh: hinhanh,
                id_Phong: id_Phong

            }
        );
        if (res && res.errCode === 0) {
            setHinhanh('')
            setId_Phong(0)
            handleLayhinhanh()
            setPrevURLIMG('')
            setValuePhong('')
            alert("Thêm hình ảnh thành công")

        } else {
            console.log(res)
            alert("Thêm hình ảnh không thành công")
        };

    }
    const handleLayhinhanh = async () => {
        try {
            const params = {
                id_layha: "ALL",
            };
            console.log(params)

            const response = await Layhinhanh(params);
            const res: HinhanhPhong[] = response.layha;
            console.log(response)
            console.log(res)
            setHinhanhPhong(res);
            // res.map((res)=>{
            //   setId(res.id)
            //   console.log("id",id)
            // })
            // console.log(phongs)

        } catch (error) {
            console.log(error);
        }
    };
    const handleSuaHinhanh = (id: number, hinhanh: string, id_Phong: number) => {
        // console.log("id", id)
        // console.log("csvc", id_CSVC)
        // console.log("id_Phong", id_Phong)
        // console.log("soluong", soluong)
        // console.log("thoigianbatdau", thoigianbatdau)

        phong.map((item) => {
            if (id_Phong === item.id) {
                setValuePhong(item.tenphong)
                setId_Phong(item.id)
            }
        })

        setId(id)
        setHinhanh(hinhanh)
        setPrevURLIMG(new Buffer(hinhanh, "base64").toString("binary"))
        setStep("capnhat")
    }

    const handleCapnhatHinhanh = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await SuaHinhanh(
            {
                id: id,
                hinhanh: hinhanh,
                id_Phong: id_Phong,

            }
        );
        if (res && res.errCode === 0) {
            setHinhanh(hinhanh)
            setId_Phong(0)
            setPrevURLIMG(new Buffer(hinhanh, "base64").toString("binary"))
            handleLayhinhanh()
            setStep('them')
            alert("Cập nhật hình ảnh thành công")


        } else {
            console.log(res)
            alert("Cập nhật hình ảnh không thành công")
        };

    }
    const handleXoaHinhanh = async (idthietbi: number) => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)

        let res = await XoaHinhanh(
            {
                id: idthietbi
            }
        );
        if (res && res.errCode === 0) {
            setHinhanh(hinhanh)
            setId_Phong(0)
            setPrevURLIMG(new Buffer(hinhanh, "base64").toString("binary"))
            handleLayhinhanh()
            alert("Xóa hình ảnh thành công")

        } else {
            console.log(res)
            alert("Xóa hình ảnh không thành công")
        };

    }
    useEffect(() => {
        handlePhong()
        handleLayhinhanh();
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                
                {step === "them" &&
                    (<p className="mb-5 text-xl">Thêm hình ảnh: </p>
                    )
                }
                {step === "capnhat" &&
                    (<p className="mt-5 text-xl">Cập nhật hình ảnh:</p>
                    )
                }
                <div className="grid grid-cols-2">
                    <div className="flex space-x-4">
                        <div className="preview-img-container w-4/12 pt-4">
                            <input
                                className=""
                                id="preview-img"
                                type="file"
                                accept=".png,.jpg"
                                hidden
                                // onChange={(e) => setFileIMG(e.target.files?.[0])}
                                onChange={(event) => handleOnChangeImage(event)}
                            />
                            <label className="lable-upload" htmlFor="preview-img">Chọn ảnh</label>

                        </div>
                        <div className="preview-img bg-contain bg-no-repeat  w-96 h-32"
                            style={{
                                backgroundImage: `url(${prevURLIMG})`,
                            }}
                        ></div>
                    </div>
                    <div className="flex">
                        <p className="w-4/12 pt-4">Tên phòng:</p>
                        <Autocomplete
                            value={valuePhong}
                            clearOnEscape
                            id="clear-on-escape"
                            options={phong.map((option) => option.tenphong)}
                            // options={}
                            onChange={(event: any, newValue: string | null) => {
                                { newValue ? handleLayID_Phong(newValue) : null }

                            }}
                            sx={{ width: 290 }}
                            renderInput={(params) => <TextField {...params} label="Phòng" variant="standard" />}
                        />
                    </div>
                </div>
                {step === "them" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleThemanh} className="bg-green-400 w-36 h-10 rounded-lg mt-5 hover:bg-green-500">Thêm hình ảnh</button>
                        </div>
                    )
                }
                {step === "capnhat" &&
                    (
                        <div className=" text-right w-10/12">
                            <button onClick={handleCapnhatHinhanh} className="bg-green-400 w-48 h-10 rounded-lg mt-5 hover:bg-green-500">Cập nhật hình ảnh</button>
                        </div>
                    )
                }
                {/* <div className="preview-img-container ">
                    <input
                        className="w-56 boder-2 bg-slate-400"
                        id="preview-img"
                        type="file"
                        accept=".png,.jpg"
                        hidden
                        // onChange={(e) => setFileIMG(e.target.files?.[0])}
                        onChange={(event) => handleOnChangeImage(event)}
                    />
                    <label className="lable-upload" htmlFor="preview-img">
                        Tải ảnh <i className="fas fa-upload"></i>
                    </label>

                </div> */}

                <button onClick={handleThemanh}>Thêm hình ảnh</button>

            </div>

            <div className="mt-8">
                <table className="border-separate border border-slate-400 m-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-20 ">#</th>
                            <th className="border border-slate-300">Hình ảnh</th>
                            <th className="border border-slate-300">Tên phòng</th>
                            <th className="border border-slate-300 w-20">Tác vụ</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            hinhanhPhong.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-300 text-center">{item.id}</td>
                                        <td className="border border-slate-300 p-3 text-justify">
                                            <div
                                                className="preview-img bg-contain bg-no-repeat  w-96 h-32"
                                                // src={new Buffer(item.anhminhhoa, "base64").toString("binary")}
                                                style={{
                                                    backgroundImage: `url(${new Buffer(item.hinhanh, "base64").toString("binary")})`,
                                                }}
                                            // onClick={() => openPreviewImg()}
                                            >
                                            </div>
                                        </td>
                                        <td className="border border-slate-300 p-3 text-justify">
                                            {phong.map((item2) =>
                                                item2.id === item.id_Phong ? item2.tenphong : null
                                            )}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            <button>
                                                <EditIcon onClick={() => handleSuaHinhanh(item.id, item.hinhanh, item.id_Phong)} />
                                            </button>
                                            <button onClick={() => handleXoaHinhanh(item.id)}><DeleteIcon /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default HinhanhPhong;