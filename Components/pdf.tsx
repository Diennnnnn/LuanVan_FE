import { AllKhachhang, Dichvu, Khachhang, LayPhieudat, LayTTnhanphong, LayttCTSDDV, Phong } from "@/Service/userService";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

// import { Noto_Serif } from 'next/font/google'
type Props = {
    id_pd: number,
    checkinsom: number,
    checkouttre: number,
    tiendv: number
}


const ReportTemplate = ({ id_pd, checkinsom, checkouttre, tiendv }: Props) => {
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
    interface Nhanphong {
        //tên giống csdl
        id: number;
        id_pd: number;
        ngaynhan: Date;
        ngaytra: Date;
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
    interface ChitietSDDV {
        id: number;
        id_PD: number;
        id_DV: number;
        solansudung: number;
        soluong: number;
        thanhtien: number;
        total_amount: number
    }
    interface Dichvu {
        id: number;
        tenDV: string;
        gia: number;
        DVT: string;
        ghichu: string;
    }
    const [sddv, setSDDV] = useState<ChitietSDDV[]>([]);
    const [phieudat, setPhieudat] = useState<Phieudat[]>([]);
    const [allkh, setAllkh] = useState<Khachhang[]>([]);
    const [nhanphong, setNhanphong] = useState<Nhanphong[]>([]);
    const [phong, setPhong] = useState<Phong[]>([]);
    const [dichvu, setDichvu] = useState<Dichvu[]>([]);

    const [htenKH, setHtenKH] = useState('');
    const [htenngo, setHtenngo] = useState('');
    const [ngaynhan, setNgaynhan] = useState(new Date());
    const [ngaytra, setNgaytra] = useState(new Date());
    const [tienphong, setTienphong] = useState(Number);
    const [songuoio, setSonguoi1] = useState(Number);
    const [tenphong, setTenphong] = useState('');

    let i

    let str = '47 Đặng Thái Thân, Phường 3, Thành phố Đà Lạt'

    const Tranlate = (str: string) => {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        i = str

        return str;
    }
    // Tralate(str)
    const handleLayPhieudat = async () => {
        try {
            const params = {
                id_pd: id_pd,
            };
            console.log(params)

            const response = await LayPhieudat(params);
            const res: Phieudat[] = response.phieudat;
            // console.log(response)
            // console.log(res)
            setPhieudat(res);
            res.map(async (res) => {
                setTienphong(res.tongtien)
                setHtenngo(Tranlate(res.hotennguoio))
                const params = {
                    id_allkh: res.id_KH,
                };
                console.log(params)

                const response = await AllKhachhang(params);
                const reskh: Khachhang[] = response.allkh;
                // console.log(response)
                // console.log(res)
                setAllkh(reskh);
                setHtenKH(Tranlate(reskh[0].hotenKH))
                const params1 = {
                    id_phong: res.id_Phong,
                };
                console.log(params)

                const response1 = await Phong(params1);
                const resp: Phong[] = response1.phong;
                console.log(response1)
                console.log(resp)
                setTenphong(resp[0].tenphong)
                // setPhong(res);
            })
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
    const handleLaynhanphong = async () => {
        try {
            const params = {
                id_pd: id_pd,
            };
            console.log(params)

            const response = await LayTTnhanphong(params);
            const res: Nhanphong[] = response.nhanphong;
            console.log(response)
            console.log(res)
            setNhanphong(res);
            let d = new Date(res[0].ngaynhan)
            let d2 = new Date(res[0].ngaytra)

            setNgaynhan(d)
            setNgaytra(d2)
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
    const handleLaychitietSDDV = async () => {
        try {
            const params = {
                id_pd: id_pd,
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
    const handleLayDichVu = async () => {
        try {
            const params = {
                id_dv: "ALL",
            };
            console.log(params)

            const response = await Dichvu(params);
            const res: Dichvu[] = response.dichvu;
            console.log(response)
            console.log(res)
            setDichvu(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handlePhong()
        handleLayAllKhachhang()
        handleLayPhieudat()
        handleLaynhanphong()
        handleLaychitietSDDV()
        handleLayDichVu()
    }, [])

    return (
        <>
            {/* <div style={styles.page}> */}
            {/* <div className={noto_serif.className} > */}

            <div className="w-[450px] text-xs p-5" style={{ border: "6px double" }}>
                {/* <h1  style={{ color: "red", }}>dfghj</h1> */}
                <div className="flex space-x-3 pb-5">
                    <div className="basis-8/12">
                        <p style={{ fontWeight: "bold" }}>Thong tin noi o</p>
                        <p>The Kupid Homestay</p>
                        <p>47 Dang Thai Than, Phuong 3, Thanh pho Da Lat</p>
                    </div>
                    <div className="">
                        <p style={{ fontWeight: "bold" }} > Ho ten khach hang:</p>
                        <p>{htenKH}</p>
                        <p>Ma phieu dat: {id_pd}</p>
                    </div>
                </div>
                <div className="space-y-1 pb-4">
                    <p className="uppercase text-center" style={{ fontWeight: "bold" }}>Hoa don dat phong</p>
                    {/* <p> tien checkin som {checkinsom}</p>
                    <p> tien checkout tre{checkouttre}</p> */}
                    <p>Ngay nhan phong: {dayjs(ngaynhan).format("DD/MM/YYYY hh:mm:ss")}</p>
                    <p>Ngay tra phong: {dayjs(ngaytra).format("DD/MM/YYYY hh:mm:ss")}</p>
                    <p>Ten phong: {tenphong}</p>
                    {/* <p> Tong tien phong: {tienphong}</p> */}
                </div>
                <div className="space-y-1">
                    <p className="uppercase text-center" style={{ fontWeight: "bold" }}>thong tin su dung dich vu</p>
                    <div className="flex  pb-3 ">
                        <p className="w-3/12">Ten dich vu</p>
                        <p className="w-3/12">So lan su dung</p>
                        <p className="w-2/12 ">So luong</p>
                        <p className="w-2/12 ">Gia</p>
                        <p className="w-2/12 ">Thanh tien</p>
                    </div>
                    <hr className=""></hr>
                    <div className="flex  ">
                        {sddv.map((item) => {
                            return (
                                <>
                                    <p className="w-3/12 "> {dichvu.map((item1) =>
                                        item1.id === item.id_DV ? Tranlate(item1.tenDV) : null
                                    )}</p>
                                    <p className="w-3/12">{item.solansudung}</p>
                                    <p className="w-2/12">{item.soluong}</p>
                                    <p className="w-2/12 "> {dichvu.map((item1) =>
                                        item1.id === item.id_DV ? item1.gia : null
                                    )}</p>
                                    <p className="w-2/12 text-right pr-2 ">{item.thanhtien}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="space-y-1 pt-3">
                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12 pl-40">Tong tien dich vu:</p>
                        <p className=" w-20 text-right pr-2 ">{tiendv}</p>
                    </div>
                    
                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12  pl-40">Phi nhan phong som:</p>
                        <p className="w-20 text-right pr-2 ">{checkinsom}</p>
                    </div>
                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12  pl-40">Tong tra phong tre:</p>
                        <p className="w-20 text-right pr-2 ">{checkouttre}</p>
                    </div>

                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12  pl-40">Tong tien phong:</p>
                        <p className="w-20 text-right pr-2 ">{tienphong}</p>
                    </div>
                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12  pl-40">Thanh tien:</p>
                        <p className="w-20 text-right pr-2">{tienphong + tiendv + checkinsom + checkouttre}</p>
                    </div>
                    <div className="flex ">
                        <p style={{ fontWeight: "bold" }} className="w-10/12 pl-40">Da thanh toan:</p>
                        <p className="w-20  text-right pr-2 ">- {tienphong}</p>
                    </div>
                    <div className="flex " style={{ fontWeight: "bold" }} >
                        <p className="w-10/12  pl-40">Con lai:</p>
                        <p className="w-20 text-right pr-2">{tiendv + checkinsom + checkouttre}</p>
                    </div>
                </div>
                <div className="text-center mt-6" style={{ fontWeight: "bold" }}>
                    <p>Cam on quy khach da chon The Kupid Homestay khi den Da Lat!</p>
                    <p>Hen gap lai quy khach.</p>
                </div>
            </div>

            {/* {sddv.map((item) => {
                return (
                    <>
                        <p> {dichvu.map((item1) =>
                            item1.id === item.id_DV ? Tranlate(item1.tenDV) : null
                        )}</p>
                        <p>Số lần SD: {item.solansudung}</p>
                        <p>Số lượng: {item.soluong}</p>
                        <p>Thành tiền:{item.thanhtien}</p>



                    </>
                )
            })} */}
            {/* <p>Tong tien dv : {tiendv}</p>
            <p>Thanh tien: {tienphong + tiendv + checkinsom + checkouttre} </p>
            <p>trừ : {tienphong}</p>
            <p>tien cuoi cung: {tiendv + checkinsom + checkouttre}</p> */}

        </>
    );
};

export default ReportTemplate;