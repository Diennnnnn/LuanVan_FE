import Header from "@/Components/Header";
import { Datphong, Phieudat_idKH, Phong, SuaPhieudat } from "@/Service/userService";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Alert, Checkbox } from '@mui/material';
import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const lichsu = () => {
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
  interface TTphieudat {
    id_KH: number,
    id_phong: number,
    ngaydat: Date,
    check_in: string,
    check_out: string,
    songuoi: number,
    tongtien: number,
    thanhtoan: string,
    trangthai: string,
    ghichu: string,
    hotennguoio: string,
    SDT_nguoio: string,
    CCCD_nguoio: string
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
  const [phieudat_idKH, setPhieudat_idKH] = useState<Phieudat[]>([]);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [id_khachhang, setId_khachhang] = useState(Number);
  const [phong, setPhong] = useState<Phong[]>([]);
  const [open, setOpen] = React.useState(false);
  const [agree, setAgree] = React.useState(Boolean);
  const [id, setId] = React.useState(Number);
  const [trangthai, setTrangthai] = React.useState('');
  const [ngaynhan, setNgaynhan] = useState(new Date());
  const [hoan, setHoan] = useState(Number);

  const router = useRouter()

  let i
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open1, setOpen1] = React.useState(false);
  const [agree1, setAgree1] = React.useState(Boolean);

  const theme1 = useTheme();
  const fullScreen1 = useMediaQuery(theme1.breakpoints.down('md'));

  const handleClickOpen1 = () => {
    setOpen1(true);
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
  // console.log(">>> check vnp_ResponseCode", router.query.vnp_ResponseCode)
  const handleLuuCSDL = () => {
    let phieudats = JSON.parse(localStorage.getItem('phieudat') || '{}');
    if (Object.keys(phieudats).length === 0) {
      console.log("true");
    } else {
      // console.log("ITEM",khachhang1.khachhang);
      // setKhachhang(phieudats);

      const res: TTphieudat[] = phieudats;

      res.map(async (item) => {
        let res = await Datphong(
          {
            id_KH: item.id_KH,
            id_phong: item.id_phong,
            ngaydat: item.ngaydat,
            check_in: item.check_in,
            check_out: item.check_out,
            songuoi: item.songuoi,
            tongtien: item.tongtien,
            thanhtoan: 'Đã thanh toán',
            trangthai: 'Chưa nhận phòng',
            ghichu: item.ghichu,
            hotennguoio: item.hotennguoio,
            SDT_nguoio: item.SDT_nguoio,
            CCCD_nguoio: item.CCCD_nguoio
          }
        );
        if (res && res.errCode === 0) {
          handleLayLichsu()
          localStorage.removeItem('phieudat')
          alert("Đặt phòng thành công")
        } else {
          console.log(res)
          handleLayLichsu()
          localStorage.removeItem('phieudat')
          alert("Đặt phòng không thành công")
        };
      })
    }

  }
  const handleLayLichsu = () => {
    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');

    if (Object.keys(khachhang1).length === 0) {
      console.log("true");
    } else {
      // console.log("ITEM",khachhang1.khachhang);
      setKhachhang(khachhang1);

      const ressss: Khachhang[] = khachhang1;
      // console.log("jhjj", ressss)

      ressss.map(async (res) => {
        // setId_khachhang(res.id)
        const params = {
          phieudat_idKH: res.id,
        };
        console.log(params)
        const response1 = await Phieudat_idKH(params);
        const res1: Phieudat[] = response1.phieudat_idKH;
        console.log(response1)
        console.log(res1)
        setPhieudat_idKH(res1);
      })
    }
  }
  const handleClickOpen = (id: number, ngaynhan: Date) => {
    let d = new Date(ngaynhan)

    setId(id)
    setNgaynhan(d)
    setOpen(true);
  };

  const handleCapnhatTrangthai = async () => {
    console.log('>>>checkin', ngaynhan)
    let ngay = ngaynhan.getDate()
    let thang = ngaynhan.getMonth() + 1
    let nam = ngaynhan.getFullYear()
    let d = new Date()
    let d1 = new Date(nam + '-' + thang + '-' + (ngay - 7))
    let d2 = new Date(nam + '-' + thang + '-' + (ngay - 5))
    let temp
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(0)
    d.setMilliseconds(0)

    d1.setHours(0)
    d1.setMinutes(0)
    d1.setSeconds(0)
    d1.setMilliseconds(0)

    d2.setHours(0)
    d2.setMinutes(0)
    d2.setSeconds(0)
    d2.setMilliseconds(0)


    if (d.getTime() <= d1.getTime()) {
      setHoan(100)
      temp = 100
    } else if (d1.getTime() < d.getTime() && d.getTime() <= d2.getTime()) {
      setHoan(50)
      temp = 50
    } else {
      setHoan(0)
      temp = 0
    }
    setOpen(false);
    setAgree(true)
    console.log('>>>>check % hoan tien', temp)


    let res = await SuaPhieudat(
      {
        id: id,
        trangthai: 'Đã hủy -'+' '+ 'Hoàn' +' '+temp + '%'

      }
    )
    if (res && res.errCode === 0) {
      setTrangthai('')
      handleLayLichsu()
      // alert("Cập nhật nội quy thành công")

    } else {
      console.log(res)
      alert("Cập nhật trạng thái không thành công")
    };

  }

  useEffect(() => {


    handleLayLichsu()

    handleLuuCSDL()
    handlePhong()

  }, []);
  return (
    <div className={roboto.className}>
      <Header />
      <p className="uppercase text-2xl font-semibold text-center mt-8 text-green-500">lịch sử đặt phòng</p>
      <div className="mt-8">
        <table className=" text-center m-auto w-11/12">
          <thead>
            <tr className="bg-green-300 h-10">
              <th className=" w-20 ">#</th>
              <th className="">Ngày đặt</th>
              <th className="">Check_in</th>
              <th className=" ">Check_out</th>
              <th className=" ">Tên phòng</th>
              <th className="">Số tiền</th>
              <th className=" ">Trạng thái</th>
              <th className="">Ghi chú</th>
              <th className="">Hủy phòng <ErrorOutlineIcon fontSize="small" onClick={handleClickOpen1} />
                <Dialog
                  fullScreen={fullScreen1}
                  open={open1}
                  onClose={() => setOpen1(false)}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    <Alert className="uppercase" severity="info">Điều kiện để hoàn tiền phòng</Alert>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">trước 07 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> 100% </label>tiền phòng.</li>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">trước 05 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> 50% </label> tiền phòng.</li>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">từ sau 05 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> không hoàn trả </label> tiền phòng.</li>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setOpen1(false)}
                    >
                      đóng
                    </Button>

                  </DialogActions>
                </Dialog>
              </th>

            </tr>
          </thead>
          <tbody>
            {
              phieudat_idKH.map((item, index) => {
                let i = item.id
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className=" text-center">{item.id}</td>
                    <td className=" p-2">
                      {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                      {dayjs(item.check_in).format("DD/MM/YYYY")}
                    </td>
                    <td className=" p-2">
                      {dayjs(item.check_out).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                      {phong.map((item1) =>
                        item1.id === item.id_Phong ? item1.tenphong : null
                      )}
                    </td>
                    <td className=" text-center">{item.tongtien}</td>
                    <td className=" text-center">{item.trangthai}</td>
                    <td className=" text-center">{item.ghichu}</td>
                    <td className=" text-center">
                      <Checkbox
                        checked={item.id === id && open ? true : false || agree && item.id === id || item.trangthai === 'Đã hủy'}
                        disabled={agree && item.id === id || item.trangthai === 'Đã hủy' || item.trangthai === 'Đã nhận phòng'}
                        onClick={() => handleClickOpen(item.id, item.check_in)}></Checkbox>
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <DialogTitle className='uppercase ' id="responsive-dialog-title">
                          {"Xác nhận hủy đặt phòng"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <p>Chúng tôi sẽ gửi email xác nhận hủy đặt phòng đến <label className='font-semibold'>duyen@gmail.com</label> và hoàn tiền phòng nếu bạn đủ điều kiện. </p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus
                            onClick={() => setOpen(false)}
                          >
                            hủy
                          </Button>
                          <Button onClick={handleCapnhatTrangthai} autoFocus>
                            Xác nhận
                          </Button>
                        </DialogActions>
                      </Dialog>
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
export default lichsu;