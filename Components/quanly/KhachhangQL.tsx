
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
import CommonUtils from "../CommonUtils";
import { SuaTTKH } from "@/Service/userService";
import Image from "next/image";


const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
type Props = {
    allkh: any,
};
const KhachhangQL = ({ allkh }: Props) => {
    interface Khachhang {
        id: number;
        hotenKH: string;
        gioitinh: string,
        ngaysinh: Date,
        CCCD: string,
        SDT: string,
        email: string,
        avt: string
    }
    const [allkhachhangQL, setAllKhachhangQL] = useState<Khachhang[]>([]);
    const [prevURLIMG, setPrevURLIMG] = useState("");
    const [fileIMG, setFileIMG] = useState<File>()
    const [avt, setAvt] = useState("");
    const [id, setId] = useState(Number)
    const [hotenKH, setHotenKH] = useState("")
    const [CCCD, setCCCD] = useState("")
    const [SDT, setSDT] = useState("")
    const [email, setEmail] = useState("")
    const [ngaysinh, setNgaysinh] = useState(new Date())
    const [gioitinh, setGioitinh] = useState("")

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

            setAvt(base64img)
            setPrevURLIMG(objectUrl)

        }
        console.log("setPrevURLIMG", prevURLIMG)

    };

    const handleSuaTTKH = (id: number, hotenKH: string, gioitinh: string, ngaysinh: Date, CCCD: string, SDT: string, email: string, avt: string,) => {
        // console.log("id", id)
        // console.log("csvc", id_CSVC)
        // console.log("id_Phong", id_Phong)
        // console.log("soluong", soluong)
        // console.log("thoigianbatdau", thoigianbatdau)
        let date1 = new Date(ngaysinh)
        setId(id)
        setHotenKH(hotenKH)
        setGioitinh(gioitinh)
        setNgaysinh(date1)
        setCCCD(CCCD)
        setEmail(email)
        setSDT(SDT)
        if (avt != '') {
            setPrevURLIMG(new Buffer(avt, "base64").toString("binary"))
        }
    }

    const handleCapnhatTTKH = async () => {
        // console.log("mota", mota)
        // console.log("motaEN", motaEN)
        let date1 = new Date(ngaysinh)

        let res = await SuaTTKH(
            {
                id: id,
                hotenKH: hotenKH,
                gioitinh: gioitinh,
                ngaysinh: ngaysinh,

                CCCD: CCCD,
                SDT: SDT,
                email: email,
                avt: avt

            }
        );
        if (res && res.errCode === 0) {
            setHotenKH(hotenKH)
            setGioitinh(gioitinh)
            setNgaysinh(date1)
            setCCCD(CCCD)
            setEmail(email)
            setSDT(SDT)
            setPrevURLIMG(new Buffer(avt, "base64").toString("binary"))
            // setStep('them')
            alert("Cập nhật thành công")


        } else {
            console.log(res)
            alert("Cập nhậtkhông thành công")
        };

    }

    useEffect(() => {
        // console.log("csvc", csvc)
        setAllKhachhangQL(allkh)
    }, [])
    return (
        <div className={roboto.className}>
            <div className="w-11/12 m-auto">
                <p className="font-semibold uppercase text-2xl text-center mt-5">Danh sách khách hàng</p>
                {/* <div className="flex space-x-4">
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
                </div> */}

                {/* <button onClick={handleCapnhatTTKH}>ehjkl</button> */}
                <div className="mt-8">
                    <table className="border-separate border border-slate-400  m-auto text-center w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 w-10 ">#</th>
                                <th className="border border-slate-300">Họ và tên</th>
                                <th className="border border-slate-300">Giới tính</th>
                                <th className="border border-slate-300 w-20">Ngày sinh</th>
                                <th className="border border-slate-300 w-20">CCCD</th>
                                <th className="border border-slate-300 w-20">Số điện thoại</th>
                                <th className="border border-slate-300 w-20">Email</th>
                                <th className="border border-slate-300 w-20">Avata</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allkhachhangQL.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.id}</td>
                                            <td className="border border-slate-300 p-2">{item.hotenKH}</td>
                                            <td className="border border-slate-300 p-2">{item.gioitinh}</td>
                                            <td className="border border-slate-300 p-2">
                                                {
                                                    dayjs(item.ngaysinh).format("DD/MM/YYYY")
                                                }
                                            </td>
                                            <td className="border border-slate-300 p-2">{item.CCCD}</td>
                                            <td className="border border-slate-300 p-2">{item.SDT}</td>
                                            <td className="border border-slate-300 p-2">{item.email}</td>
                                            <td className="border border-slate-300 p-2">
                                                {item.avt ?
                                                    <>
                                                        <Image
                                                            className="preview-img bg-contain bg-no-repeat  w-96 h-32"
                                                            src={new Buffer(item.avt, "base64").toString("binary")}
                                                            width={500}
                                                            height={500}
                                                            alt="Picture of the author"
                                                        />
                                                    </>
                                                    : null

                                                }
                                            </td>
                                            


                                            {/* <td className="border border-slate-300 text-center">
                                                <button> 
                                                    <EditIcon onClick={() => handleSuaDichVu(item.id, item.tenDV, item.gia, item.DVT, item.ghichu)}/>
                                                </button>
                                                <button>
                                                    <DeleteIcon onClick={() => handleXoaDichVu(item.id)}/>
                                                    </button>
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

export default KhachhangQL;